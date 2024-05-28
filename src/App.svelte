<script>
    import { onMount } from 'svelte';
    import DecisionBoundary from './components/decisionboundary.svelte';
    import { preprocessData, gradientDescent } from './components/logisticregression.js';
    import LossGraph from './components/lossgraph.svelte';
    import irisData from './assets/irisdata.json';
    

    let processedData = [];
    let modelResults;
    let maxIterations = 10000;  // Start with a default value

    onMount(() => {
        processedData = preprocessData(irisData);
        runModel();  // Run model initially on mount
    });

    function runModel() {
        const X = processedData.map(d => [1, d.sepalLength, d.sepalWidth]);
        const y = processedData.map(d => d.species);
        modelResults = gradientDescent(X, y, 0.01, maxIterations);
    }
</script>

<main>
    <h1>Logistic Regression Visualization</h1>
    {#if modelResults}
         <DecisionBoundary data={processedData} weightsHistory={modelResults.weightsHistory} costHistory={modelResults.costHistory}/>
         <LossGraph costHistory = {modelResults.costHistory}/>
    {:else}
        <p>Loading model results...</p>
    {/if}

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
