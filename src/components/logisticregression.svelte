<script>
    import { onMount } from 'svelte';
    import { gradientDescent, preprocessData } from './logisticregression.js';
    import irisData from '../assets/irisdata.json';

    let modelResults;

    onMount(() => {
        let processedData = preprocessData(irisData);
        const X = processedData.map(d => [1, d.sepalLength, d.sepalWidth]); // Add intercept term
        const y = processedData.map(d => d.species);
        modelResults = gradientDescent(X, y, 0.01, 100);
        console.log(modelResults);
    });
</script>

{#if modelResults}
    <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <!-- Data Points -->
        {#each modelResults.data as point, index}
            <circle cx={scaleX(point.sepalLength)} cy={scaleY(point.sepalWidth)} r="5" fill={point.species === 0 ? 'red' : 'blue'} />
        {/each}

        <!-- Decision Boundary -->
        <!-- Draw line based on modelResults.weights -->
    </svg>
    <!-- Plot for cost history -->
    <svg width="500" height="200">
        {#each modelResults.costHistory as cost, index}
            <circle cx={index * 5} cy={200 - cost * 100} r="2" fill="black" />
        {/each}
    </svg>
{/if}

<style>
    svg {
        border: 1px solid #ccc;
    }
</style>
