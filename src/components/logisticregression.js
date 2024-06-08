function preprocessData(data) {
    return data.filter(d => d.Species === 'Iris-setosa' || d.Species === 'Iris-versicolor')
               .map(d => ({
                   sepalLength: d.SepalLengthCm,
                   sepalWidth: d.SepalWidthCm,
                   species: d.Species === 'Iris-setosa' ? 0 : 1
               }));
}

function sigmoid(z) {
    return 1 / (1 + Math.exp(-z));
}

function computeCost(predictions, y) {
    const m = y.length;
    return -1 / m * y.reduce((acc, actual, index) => {
        const pred = predictions[index];
        return acc + (actual * Math.log(pred) + (1 - actual) * Math.log(1 - pred));
    }, 0);
}

function gradientDescent(X, y, lr, maxIterations, tolerance = 0.0001) {
    let weights = new Array(X[0].length).fill(0);
    let m = X.length;
    let costHistory = [];
    let weightsHistory = [];
    let converged = false;

    let previousCost = Infinity;
    let iteration = 0;

    while (!converged && iteration < maxIterations) {
        let predictions = X.map(inputs => sigmoid(inputs.reduce((acc, input, idx) => acc + input * weights[idx], 0)));
        let currentCost = computeCost(predictions, y);
        costHistory.push(currentCost);
        weightsHistory.push([...weights]);

        // Update weights
        weights = weights.map((w, j) => w - lr * (1/m) * predictions.reduce((acc, pred, idx) => acc + (pred - y[idx]) * X[idx][j], 0));

        // Check for convergence (i.e., if the change in cost is less than the tolerance)
        if (Math.abs(previousCost - currentCost) < tolerance) {
            converged = true;
        }

        previousCost = currentCost;
        iteration++;
    }

    return { weights, costHistory, weightsHistory };
}

export { preprocessData, sigmoid, gradientDescent };
