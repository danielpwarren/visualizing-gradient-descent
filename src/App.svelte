<script>
  import { onMount } from "svelte";
  import DecisionBoundary from "./components/decisionboundary.svelte";
  import {
    preprocessData,
    gradientDescent,
  } from "./components/logisticregression.js";
  import LossGraph from "./components/lossgraph.svelte";
  import irisData from "./assets/irisdata.json";

  let processedData = [];
  let modelResults;
  let maxIterations = 10000; // Start with a default value

  onMount(() => {
    processedData = preprocessData(irisData);
    runModel(); // Run model initially on mount
  });

  function runModel() {
    const X = processedData.map((d) => [1, d.sepalLength, d.sepalWidth]);
    const y = processedData.map((d) => d.species);
    modelResults = gradientDescent(X, y, 0.01, maxIterations);
  }
</script>

<main>
  <h1>Logistic Regression Visualization</h1>
  {#if modelResults}
    <DecisionBoundary
      data={processedData}
      weightsHistory={modelResults.weightsHistory}
      costHistory={modelResults.costHistory}
    />
    <LossGraph costHistory={modelResults.costHistory} />
  {:else}
    <p>Loading model results...</p>
  {/if}
  <h1>Write up</h1>
  <p>
    This is a very rough draft, but so far weve worked towards figuring out some
    plan for the project.
  </p>
  <ul>
    <li>
      <p>
        1. So far Eric has created a rough draft for a Visualization of gradient
        descent, and we have begun plans for the general structure of the site.
        The site will feature scrollytelling, consisting of a series of
        sections. So far we plan to include linear models and the math behind
        them, the risk equation and its derivatives, and the general formula for
        gradient descent with examples and visualizations. Some planned
        visualizations include a plot of the loss landscape (if possible) and a
        plot of the decision boundary.
      </p>
    </li>
    <li>
      <p>
        2. I think the most challenging part of this project will likely be the
        loss landscape visualization. This is likely to need a 3D plot, which is
        not something we've done before using D3. The other visualizations will
        also be somewhat challenging, but should be easier than the 3d plot. The
        final challenge will be time management, as we have a lot of work to do
        in a short amount of time.
      </p>
    </li>
  </ul>
</main>

<style>
  main {
    text-align: center;
    padding: 20px;
  }
  ul {
    list-style-type: none;
  }
  svg {
    border: 1px solid #ccc;
  }
</style>
