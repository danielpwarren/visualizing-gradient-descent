<script>
    import { onMount } from 'svelte';
    export let data;
    export let weightsHistory;
    export let costHistory;

    let currentIteration = 0; // Current iteration index
    let currentWeights = weightsHistory[0]; // Initial weights

    const svgWidth = 500;
    const svgHeight = 500;
    const padding = 50;

    // Function to scale data to SVG dimensions
    function scaleX(x) {
        const xMin = Math.min(...data.map(d => d.sepalLength));
        const xMax = Math.max(...data.map(d => d.sepalLength));
        return ((x - xMin) / (xMax - xMin)) * (svgWidth - 2 * padding) + padding;
    }

    function scaleY(y) {
        const yMin = Math.min(...data.map(d => d.sepalWidth));
        const yMax = Math.max(...data.map(d => d.sepalWidth));
        return svgHeight - (((y - yMin) / (yMax - yMin)) * (svgHeight - 2 * padding) + padding);
    }

    // Compute boundary function
    function boundaryY(x, weights) {
        if (weights[2] !== 0) {
            return -(weights[0] + weights[1] * x) / weights[2];
        }
        return null;
    }

    function currentBoundary() {
        return weightsHistory[currentIteration];
    }
    
    function updateWeights(iteration) {
        currentWeights = weightsHistory[iteration];
        currentIteration = iteration;
    }
</script>

<div class="container">
    <svg width={svgWidth} height={svgHeight}>
        <!-- Data points -->
        {#each data as point}
            <circle cx={scaleX(point.sepalLength)} cy={scaleY(point.sepalWidth)}
                    r="5" fill={point.species === 0 ? 'red' : 'blue'} />
        {/each}
        <!-- Decision boundary -->
        {#if boundaryY(4, currentWeights) !== null && boundaryY(7.5, currentWeights) !== null}
            <line x1={scaleX(4)} y1={scaleY(boundaryY(4, currentWeights))}
                x2={scaleX(7.5)} y2={scaleY(boundaryY(7.5, currentWeights))}
                stroke="green" stroke-width="2"/>
        {/if}
    </svg>
    <div class="controls">
        <input type="range" min="0" max={weightsHistory.length - 1} value={currentIteration}
            on:input={(e) => updateWeights(e.target.value)} />
        <p>Iteration: {currentIteration}</p>
        <p>Loss: {costHistory[currentIteration].toFixed(4)}</p>
    </div>
</div>

<style>
    .container {
        display: flex;
        align-items: start;
        justify-content: space-around;
    }
    .controls {
        display: flex;
        flex-direction: column;
        padding: 20px;
    }
    svg {
        border: 1px solid black;
    }
</style>