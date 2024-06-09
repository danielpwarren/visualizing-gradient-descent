<script>
  import { onMount, onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import * as d3 from "d3";
  import randomData from "../assets/random_data.json";
  import irisData from "../assets/iris_data.json";
  import { gradientDescent } from "../components/logisticregression.js";

  let color_1 = "#4A90E2";
  let color_2 = "#8BC34A";
  let color_3 = "#FF5733";

  export let index;
  let svg;
  let width, height;
  let xScale, yScale;
  let xAxis, yAxis;
  let margin = { top: 20, right: 20, bottom: 40, left: 50 };
  const padding = 0.25;

  let points = [];
  let velocities = [];
  let animationFrameId;
  let initialLoad = true;

  let iterations = 50;

  const randomDomain = { x: [0, 1], y: [0, 1] };
  const irisDomain = calculateDomain(irisData);

  function calculateDomain(data) {
    const xExtent = d3.extent(data, (d) => d.x);
    const yExtent = d3.extent(data, (d) => d.y);
    const xPadding = (xExtent[1] - xExtent[0]) * padding;
    const yPadding = (yExtent[1] - yExtent[0]) * padding;
    return {
      x: [xExtent[0] - xPadding, xExtent[1] + xPadding],
      y: [yExtent[0] - yPadding, yExtent[1] + yPadding],
    };
  }

  function initializePoints() {
    points = randomData.map((d, i) => ({
      id: i,
      x: d.x,
      y: d.y,
      color: d.class === 0 ? color_1 : color_2,
    }));
    velocities = points.map(() => ({
      vx: (Math.random() - 0.5) * 0.005,
      vy: (Math.random() - 0.5) * 0.005,
    }));
  }

  function startAnimation() {
    function update() {
      points.forEach((point, index) => {
        point.x += velocities[index].vx;
        point.y += velocities[index].vy;

        if (point.x > xScale.domain()[1] || point.x < xScale.domain()[0])
          velocities[index].vx *= -1;
        if (point.y > yScale.domain()[1] || point.y < xScale.domain()[0])
          velocities[index].vy *= -1;
      });

      const selection = d3
        .select(svg)
        .select(".points")
        .selectAll("circle")
        .data(points, (d) => d.id);

      selection.join(
        (enter) =>
          enter
            .append("circle")
            .attr("cx", (d) => xScale(d.x))
            .attr("cy", (d) => yScale(d.y))
            .attr("r", 5)
            .attr("fill", (d) => d.color),
        (update) =>
          update.attr("cx", (d) => xScale(d.x)).attr("cy", (d) => yScale(d.y)),
        (exit) => exit.remove()
      );

      animationFrameId = requestAnimationFrame(update);
    }

    update();
  }

  function createScales() {
    xScale = d3.scaleLinear().range([0, width]);
    yScale = d3.scaleLinear().range([height, 0]);
  }

  function createAxes() {
    xAxis = d3.axisBottom(xScale).ticks(Math.max(2, Math.floor(width / 50)));
    yAxis = d3.axisLeft(yScale).ticks(Math.max(2, Math.floor(height / 50)));
  }

  function renderAxes() {
    d3.select(svg)
      .select(".x-axis")
      .attr("transform", `translate(${margin.left}, ${height + margin.top})`)
      .transition()
      .duration(500)
      .call(xAxis);

    d3.select(svg)
      .select(".y-axis")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .transition()
      .duration(500)
      .call(yAxis);
  }

  function renderPoints() {
    const selection = d3
      .select(svg)
      .select(".points")
      .selectAll("circle")
      .data(points, (d) => d.id);

    selection.join(
      (enter) =>
        enter
          .append("circle")
          .attr("cx", (d) => xScale(d.x))
          .attr("cy", (d) => yScale(d.y))
          .attr("r", 5)
          .attr("fill", (d) => d.color),
      (update) =>
        update
          .transition()
          .duration(1000)
          .attr("cx", (d) => xScale(d.x))
          .attr("cy", (d) => yScale(d.y)),
      (exit) => exit.remove()
    );

    if (index === 5) {
      updateDecisionBoundary();
    } else {
      clearDecisionBoundary();
    }
  }

  function drawDecisionBoundary() {
    const X = irisData.map((d) => [1, d.x, d.y]);
    const y = irisData.map((d) => (d.class === "Iris-setosa" ? 0 : 1));

    const { weights } = gradientDescent(X, y, 0.1, iterations);

    const x1 = xScale.domain()[0];
    const x2 = xScale.domain()[1];
    const y1 = (-weights[0] - weights[1] * x1) / weights[2];
    const y2 = (-weights[0] - weights[1] * x2) / weights[2];

    const lineData = [
      { x: x1, y: y1 },
      { x: x2, y: y2 },
    ];

    const line = d3
      .line()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    d3.select(svg)
      .select(".decision-boundary")
      .selectAll("path")
      .data([lineData])
      .join("path")
      .attr("d", line)
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("fill", "none");
  }

  function clearDecisionBoundary() {
    d3.select(svg).select(".decision-boundary").selectAll("path").remove();
  }

  function updateDecisionBoundary() {
    drawDecisionBoundary();
  }

  function updateScales(domain) {
    xScale.domain(domain.x);
    yScale.domain(domain.y);
    createAxes();
    renderAxes();
    renderPoints();
  }

  function resize() {
    if (index === 0) {
      margin = { top: 0, right: 0, bottom: 0, left: 0 };
      height = svg.clientHeight - margin.top - margin.bottom;
      width = svg.clientWidth - margin.left - margin.right;
    } else {
      margin = { top: 20, right: 20, bottom: 40, left: 50 };
      width = height = svg.clientHeight - margin.top - margin.bottom;
    }

    createScales();
    updateScales(getDomain());
  }

  onMount(() => {
    const observer = new ResizeObserver(resize);
    observer.observe(svg);

    height = svg.clientHeight - margin.top - margin.bottom;
    width = svg.clientWidth - margin.left - margin.right;
    createScales();
    createAxes();
    updateScales(getDomain());

    initializePoints();
    startAnimation();

    onDestroy(() => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    });
  });

  function handleIndexChange(index) {
    cancelAnimationFrame(animationFrameId);
    switch (index) {
      case 0:
        initializePoints();
        updateScales(randomDomain);
        if (!initialLoad) {
          setTimeout(() => {
            startAnimation();
          }, 1000);
        } else {
          startAnimation();
          initialLoad = false;
        }
        break;
      case 1:
      case 2:
      case 5:
      case 6:
      case 7:
        points = irisData.map((d, i) => ({
          id: i,
          x: d.x,
          y: d.y,
          color:
            d.class === "Iris-setosa"
              ? color_1
              : d.class === "Iris-versicolor"
                ? color_2
                : color_3,
        }));
        updateScales(irisDomain);
        break;
    }
  }

  function getDomain() {
    switch (index) {
      case 0:
        return randomDomain;
      default:
        return irisDomain;
    }
  }

  $: handleIndexChange(index);
  $: if (index >= 0) resize();
  $: svgStyle =
    index === 0
      ? "width: 100%; height: 100vh;"
      : "width: 100%; height: 100%; aspect-ratio: 1 / 1;";
  $: showAxes = index > 0;

  $: legendX = width - margin.right - 90;
  $: legendY = margin.top + 10;
</script>

<svg bind:this={svg} style={svgStyle}>
  <g
    class="x-axis"
    style="opacity: {showAxes ? 1 : 0};"
    in:fade={{ delay: 300, duration: 300 }}
  ></g>
  <g
    class="y-axis"
    style="opacity: {showAxes ? 1 : 0};"
    in:fade={{ delay: 300, duration: 300 }}
  ></g>
  <g
    class="points"
    transform={`translate(${showAxes ? margin.left : 0}, ${showAxes ? margin.top : 0})`}
  ></g>
  <g
    class="decision-boundary"
    transform={`translate(${showAxes ? margin.left : 0}, ${showAxes ? margin.top : 0})`}
  ></g>

  <!-- Legend -->
  {#if showAxes}
    <g class="legend" transform={`translate(${legendX}, ${legendY})`}>
      <rect
        width="100"
        height="50"
        fill="rgba(0, 0, 0, 0.9)"
        stroke="black"
        rx="10"
        ry="10"
      ></rect>
      <g transform="translate(10, 10)">
        <circle cx="5" cy="5" r="5" fill={color_1}></circle>
        <text x="15" y="10" font-size="12px" fill="white">Setosa</text>
      </g>
      <g transform="translate(10, 30)">
        <circle cx="5" cy="5" r="5" fill={color_2}></circle>
        <text x="15" y="10" font-size="12px" fill="white">Versicolor</text>
      </g>
    </g>
  {/if}
</svg>

{#if index === 5}
  <div>
    <label for="iterations">Iterations:</label>
    <input
      type="range"
      id="iterations"
      min="0"
      max="200"
      step="1"
      bind:value={iterations}
      on:input={updateDecisionBoundary}
    />
    <span>{iterations}</span>
  </div>
{/if}
