# Visualizing Gradient Descent

Sections:

- Introduction to optimization
- Concept of gradients and derivatives
- Basic algorithm of gradient descent
- Variants of gradient descent (e.g., stochastic, mini-batch)
- Practical application and convergence

Visualizations:

- A 3D surface plot for visualizing a cost function
- A 2D plot showing steps of gradient descent on the curve
- Interactive sliders to change learning rate or other parameters

Data:

We can either use synthetic data or the plant dataset from before. These are some of the synthetic datasets I've written in python in the past

sine:

```python
def sine_data(samples):
    X = np.arange(samples).reshape(-1, 1) / samples
    y = np.sin(2 * np.pi * X).reshape(-1, 1)
    return X, y
```

spiral:

```python
def spiral_data(samples, classes):
    X = np.zeros((samples*classes, 2))
    y = np.zeros(samples*classes, dtype='uint8')
    for class_number in range(classes):
        ix = range(samples*class_number, samples*(class_number+1))
        r = np.linspace(0.0, 1, samples)  # radius
        t = np.linspace(class_number*4, (class_number+1)*4,
                        samples) + np.random.randn(samples)*0.2
        X[ix] = np.c_[r*np.sin(t*2.5), r*np.cos(t*2.5)]
        y[ix] = class_number
    return X, y
```

vertical:

```python
def vertical_data(samples, classes):
    X = np.zeros((samples*classes, 2))
    y = np.zeros(samples*classes, dtype='uint8')
    for class_number in range(classes):
        ix = range(samples*class_number, samples*(class_number+1))
        X[ix] = np.c_[np.random.randn(
            samples)*.1 + (class_number)/3, np.random.randn(samples)*.1 + 0.5]
        y[ix] = class_number
    return X, y
```
