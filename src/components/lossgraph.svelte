<script>
  export let costHistory;

  const svgWidth = 800;
  const svgHeight = 300;
  const padding = 50; // Padding for axes labels and ticks

  function scaleX(index) {
    return padding + (index / 3000) * (svgWidth - 2 * padding); // Scale for up to 3000 iterations
  }

  function scaleY(cost) {
    const maxCost = Math.max(...costHistory);
    return padding + (svgHeight - 2 * padding) * (1 - cost / maxCost);
  }

  function generateXTicks() {
    const numberOfTicks = 10; // Number of ticks on the x-axis
    let ticks = [];
    for (let i = 0; i <= numberOfTicks; i++) {
      let x = (i * 3000) / numberOfTicks; // Dividing 3000 iterations into equal parts
      ticks.push({ value: x, label: `${Math.round(x)}` }); // Removed 'Iter' prefix
    }
    return ticks;
  }

  function generateYTicks() {
    const maxCost = Math.max(...costHistory);
    const numberOfTicks = 5;
    let ticks = [];
    for (let i = 0; i <= numberOfTicks; i++) {
      let cost = (i * maxCost) / numberOfTicks;
      ticks.push({ value: cost, label: cost.toFixed(2) });
    }
    return ticks;
  }

  let xTicks = generateXTicks();
  let yTicks = generateYTicks();
</script>

<svg width={svgWidth} height={svgHeight}>
  <polyline
    fill="none"
    stroke="blue"
    stroke-width="2"
    points={costHistory
      .map((cost, index) => `${scaleX(index)},${scaleY(cost)}`)
      .join(" ")}
  />

  <!-- X-axis and labels -->
  <line
    x1={padding}
    y1={svgHeight - padding}
    x2={svgWidth - padding}
    y2={svgHeight - padding}
    stroke="black"
  />
  {#each xTicks as tick}
    <text x={scaleX(tick.value)} y={svgHeight - 15} text-anchor="middle"
      >{tick.label}</text
    >
    <line
      x1={scaleX(tick.value)}
      y1={svgHeight - padding}
      x2={scaleX(tick.value)}
      y2={svgHeight - padding + 5}
      stroke="black"
    />
  {/each}

  <!-- Y-axis and labels -->
  <line
    x1={padding}
    y1={padding}
    x2={padding}
    y2={svgHeight - padding}
    stroke="black"
  />
  {#each yTicks as tick}
    <text x="35" y={scaleY(tick.value)} dy="0.32em" text-anchor="end"
      >{tick.label}</text
    >
    <line
      x1={padding - 5}
      y1={scaleY(tick.value)}
      x2={padding}
      y2={scaleY(tick.value)}
      stroke="black"
    />
  {/each}

  <!-- Axis Titles -->
  <text x={padding / 2} y={padding / 2} text-anchor="start" font-weight="bold"
    >Loss</text
  >
  <text
    x={svgWidth / 2}
    y={svgHeight - 5}
    text-anchor="middle"
    font-weight="bold">Iterations</text
  >
</svg>

<style>
  text {
    font-size: 12px;
    fill: black;
  }
</style>
