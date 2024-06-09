<script>
  import { onMount, onDestroy } from "svelte";
  // @ts-ignore
  import Scroller from "@sveltejs/svelte-scroller";
  // @ts-ignore
  import CartesianPlane from "./CartesianPlane.svelte";
  import Katex from "./Katex.svelte";

  let count, index, offset, progress, viewportHeight, viewportWidth;

  onMount(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  onDestroy(() => {
    window.removeEventListener("resize", handleResize);
  });

  const handleResize = () => {
    viewportHeight = window.innerHeight;
    viewportWidth = window.innerWidth;
  };

  $: foregroundStyle = `
    width: ${index > 0 ? `${viewportWidth - viewportHeight}px` : "50%"};
    transform: ${index > 0 ? `translateX(${viewportHeight}px)` : "translateX(0%)"};
    ${index < 1 ? "margin: 0 auto" : ""};
    transition: transform 0.5s ease-in-out, width 0.5s ease;
    position: relative;
  `;
</script>

<div>
  <Scroller
    top={0.0}
    bottom={1}
    threshold={0.33}
    bind:count
    bind:index
    bind:offset
    bind:progress
  >
    <div class="background" slot="background">
      <CartesianPlane {index} />
    </div>

    <div class="foreground" slot="foreground" style={foregroundStyle}>
      <section class="centered">
        <div class="hero">
          <h1>Understanding Gradient Descent in Machine Learning</h1>
          <p>
            Optimization lies at the heart of all modern machine learning
            algorithms. It's the process of finding the best parameters or
            settings for a model to minimize errors and improve accuracy. In
            this visual journey, we'll explore one of the most fundamental
            optimization techniques used in machine learning, gradient descent.
          </p>
        </div>
      </section>
      <section class="translate-right">
        <h1>The Fundamentals</h1>
        <p>
          Gradient Descent involves initializing parameters and iteratively
          updating them to minimize the cost function. The gradient measures the
          error change as the parameters change. Using the direction of steepest
          descent, the algorithm updates parameters to find the local minimum.
          The size of the learning rate determines the step size in each
          iteration, impacting the number of iterations required for
          convergence.
          <br /> <br />
          The gradient measures the amount of error change as the weight changes. Gradient descent is
          generally used on convex functions, and the direction of the steepest descent is crucial to finding
          the local minimum. The size of the learning rate decides the number of iterations and the
          complexity of the gradient descent. The larger the learning rate, the bigger the step size, and vice
          versa for a smaller step size.
          <br /> <br />
           The risk of the cost function should
            decrease as the number of iteration steps increases. The cost function should converge to a
            certain amount after a certain number of iterations because the slope is getting closer to zero.
        </p>
      </section>
      <section class="translate-right">
        <h1>Variants of Gradient Descent</h1>
        <p>
          Different versions of Gradient Descent, like Stochastic Gradient
          Descent (SGD) and Batch Gradient Descent, cater to various data types
          and scenarios. Batch Gradient Descent, for instance, enhances
          efficiency by dividing the dataset into training and test sets rather
          than using the entire dataset.
        </p>
      </section>
      <section class="translate-right">
        <h1>The Iris Dataset</h1>
        <p>
          The Iris dataset is widely used in machine learning education and
          demonstrations. It includes three classes of Iris plants: setosa,
          versicolor, and virginica. For this visualization, we focus on two
          classes: Iris setosa and Iris versicolor, and two features: sepal
          length and sepal width.
        </p>
      </section>
      <section class="translate-right">
        <h1>Practical application and convergence</h1>
        <p>
          Visualizing gradient descent using the Iris dataset helps illustrate
          how the decision boundary evolves. This demonstrates the practical
          application of gradient descent in optimizing model parameters and
          achieving convergence.
          <br /> <br />
          In the next page, we will incorporate an interactive animation that illustrates the gradient descent 
          iterative process up until the final optimal decision boundary is reached. 
          The following will be included in this animation:
          <br /> <br />
          Initial Setup: Display the first decision boundary on a scatter plot of the data points, starting with
          the initial values of the parameters, where iteration is 0.
          <br /> <br />
          Iteration Steps: Update the decision boundary based on the new parameter values for every
          iteration. Plot the evolving decision boundary to see how it changes over time.
          <br /> <br />
          Convergence: Call attention to the crucial iterations where there is a notable shift in the decision
          boundary. It aids in identifying the pivotal points in the optimization process
          <br /> <br />
          User Controls: Give the user controls to add, substract iteration to view animation. This lets people
          study the gradient descent process at their own speed and go back over particular steps to have a
          deeper understanding.
        </p>
      </section>
      <section class="translate-right">
        <h1>Performing Gradient Descent</h1>
        <p>
          To begin gradient descent, press and hold the '2' key. This will
          initialize and iteratively update the logistic regression model used
          in our example. The decision boundary will adjust to minimize the cost
          function, and the model will converge to the optimal parameters.
          <br /> <br />
          As the updates become smaller, the model converges to the optimal parameters,
          and the decision boundary separates the two classes.
          <br /> <br />
          The visualization helps the people understand process of gradient descent and shows how it continuously 
          improves decision-making with iterative steps until reaching the optimal point. The key takeaway is that 
          gradient descent is powerful! It not only can help us flower lovers identify the Iris species but more 
          importantly, it transforms random models into precise classifiers, helping to solve daily problems with 
          understandable models.
        </p>
      </section>
    </div>
  </Scroller>
</div>

<style>
  .background {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  section {
    height: 90vh;
    color: white;
    text-align: center;
    padding: 1em;
    margin: 0 0 2em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .centered {
    padding: 2em;
  }

  p {
    text-align: left;
  }

  .hero {
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 15px;
    padding: 2em;
  }
</style>
