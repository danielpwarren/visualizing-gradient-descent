<script>
    import { onMount } from 'svelte';
    import DecisionBoundary from './components/decisionboundary.svelte';
    import { preprocessData, gradientDescent } from './components/logisticregression.js';
    import irisData from './assets/irisdata.json';

    let processedData = [];
    let modelResults;

    onMount(async () => {
        processedData = preprocessData(irisData);
        const X = processedData.map(d => [1, d.sepalLength, d.sepalWidth]);
        const y = processedData.map(d => d.species);
        modelResults = gradientDescent(X, y, 0.01, 100);
    });
</script>

<main>
    <h1>Logistic Regression Visualization</h1>
    {#if modelResults}
         <DecisionBoundary data={processedData} weightsHistory={modelResults.weightsHistory} costHistory={modelResults.costHistory}/>
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
