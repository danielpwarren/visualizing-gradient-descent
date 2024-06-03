<script>
  import { onMount } from 'svelte';
  import { preprocessData, spiralData, verticalData } from '../function.js';
  import irisData from './assets/irisdata.json';
  import * as d3 from 'd3';

  let dataType = 'original'; // Default data type
  let data = { X: [], y: [] };

  // Preprocess the Iris dataset
  let processedData = preprocessData(irisData);

  const svgWidth = 800;
  const svgHeight = 800; // Adjust height to make it the same as width for spiral data
  const padding = 60; // Padding for labels and ticks

  // Generate data based on selected data type
  function generateData() {
    const classes = 2; // Number of classes

    switch (dataType) {
      case 'vertical':
        data = verticalData(processedData, classes);
        break;
      case 'spiral':
        data = spiralData(processedData, classes);
        break;
      case 'original':
      default:
        data = {
          X: processedData.map(d => [d.sepalLength, d.sepalWidth]),
          y: processedData.map(d => d.species)
        };
        break;
    }
    console.log('Generated Data:', data);
  }

  generateData();

  function getRange() {
    const xMin = Math.min(...data.X.map(d => d[0]));
    const xMax = Math.max(...data.X.map(d => d[0]));
    const yMin = Math.min(...data.X.map(d => d[1]));
    const yMax = Math.max(...data.X.map(d => d[1]));

    return { xMin, xMax, yMin, yMax };
  }

  function updateScales() {
    const { xMin, xMax, yMin, yMax } = getRange();

    xScale.domain([xMin, xMax]);
    yScale.domain([yMin, yMax]);
  }

  let { xMin, xMax, yMin, yMax } = getRange();

  const xScale = d3.scaleLinear()
    .domain([xMin, xMax])
    .range([padding, svgWidth - padding]);

  const yScale = d3.scaleLinear()
    .domain([yMin, yMax])
    .range([svgHeight - padding, padding]);

  const xAxis = d3.axisBottom(xScale).ticks(10);
  const yAxis = d3.axisLeft(yScale).ticks(10);

  onMount(() => {
    const svg = d3.select("svg");
    svg.append("g")
      .attr("transform", `translate(0, ${svgHeight - padding})`)
      .call(xAxis)
      .attr("class", "x-axis");

    svg.append("g")
      .attr("transform", `translate(${padding}, 0)`)
      .call(yAxis)
      .attr("class", "y-axis");
  });

  // Function to update plot when data type changes
  function updatePlot() {
    generateData();
    updateScales();

    d3.select(".x-axis")
      .call(xAxis);
    d3.select(".y-axis")
      .call(yAxis);

    console.log('Updated Plot:', data);
  }
</script>

<div>
  <label for="dataType">Select Data Type: </label>
  <select id="dataType" bind:value={dataType} on:change={updatePlot}>
    <option value="original">Original</option>
    <option value="spiral">Spiral</option>
    <option value="vertical">Vertical</option>
  </select>
</div>

<svg width="{svgWidth}" height="{svgHeight}">
  <!-- Plot Data Points -->
  {#each data.X as point, i}
    <circle cx="{xScale(point[0])}" cy="{yScale(point[1])}" r="3" fill={data.y[i] === 0 ? 'red' : 'blue'} />
  {/each}

  <!-- Axis Titles -->
  <text x="{padding / 2}" y="{padding / 2}" text-anchor="start" font-weight="bold">Sepal Width (cm)</text>
  <text x="{svgWidth / 2}" y="{svgHeight - padding / 2}" text-anchor="middle" font-weight="bold">Sepal Length (cm)</text>

  <!-- Legend -->
  <rect x="{svgWidth - padding - 100}" y="{padding}" width="10" height="10" fill="red" />
  <text x="{svgWidth - padding - 80}" y="{padding + 10}" text-anchor="start">Iris-setosa</text>
  <rect x="{svgWidth - padding - 100}" y="{padding + 20}" width="10" height="10" fill="blue" />
  <text x="{svgWidth - padding - 80}" y="{padding + 30}" text-anchor="start">Iris-versicolor</text>
</svg>

<style>
  text {
    font-size: 12px;
    fill: black;
  }
</style>

