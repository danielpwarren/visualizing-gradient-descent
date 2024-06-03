function preprocessData(data) {
    return data.filter(d => d.Species === 'Iris-setosa' || d.Species === 'Iris-versicolor')
               .map(d => ({
                   sepalLength: d.SepalLengthCm,
                   sepalWidth: d.SepalWidthCm,
                   species: d.Species === 'Iris-setosa' ? 0 : 1
               }));
}


function spiralData(data, classes) {
    const X = data.map((d, i) => {
        const classNumber = d.species;
        const radius = i / data.length;
        const theta = (classNumber * 4 + (i % (data.length / classes)) * 4 / (data.length / classes)) + Math.random() * 0.2;
        return [radius * Math.sin(theta * 2.5), radius * Math.cos(theta * 2.5)];
    });
    const y = data.map(d => d.species);
    return { X, y };
}

function verticalData(data, classes) {
    const X = data.map((d, i) => {
        const classNumber = d.species;
        return [Math.random() * 0.1 + classNumber / classes, d.sepalWidth];
    });
    const y = data.map(d => d.species);
    return { X, y };
}

export { preprocessData, spiralData, verticalData };

