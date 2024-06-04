<script>
  import { onMount, onDestroy } from "svelte";
  // @ts-ignore
  import Scroller from "@sveltejs/svelte-scroller";
  // @ts-ignore
  import CartesianPlane from "./CartesianPlane.svelte";
  import Katex from "./Katex.svelte";

  const mse = `\\frac{1}{n} \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2`;
  const y_i = `y_i`;
  const y_hat_i = `\\hat{y}_i`;
  const guess_line = `y = -0.1x + 4`;

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
          <h1>A Visual Guide to Gradient Descent</h1>
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
          Lets start with a classic example, this is the Iris flower dataset.
          For the purposes of our demonstration, we will use only two features:
          sepal length (x axis) and sepal width (y axis). It's easy for us to
          see that there's a clear seperation in the data, but how can a
          computer see the same?
          <br /> <br />
          We can try and draw a line that seperates the two classes but we need a
          way to messure how "good" that line is at fitting the data. This is called
          the cost function. A common cost function is the mean squared error.
        </p>
      </section>
      <section class="translate-right">
        <h1>Defining a Loss Function</h1>
        <p>
          The mean squared error loss is defined as: <Katex
            math={mse}
            displayMode
          />
          Where <Katex math={y_i} /> is the actual value and <Katex
            math={y_hat_i}
          /> is the predicted value. We'll use this loss function to evaluate the
          performance of an example model. A good starting line could be <Katex
            math={guess_line}
            displayMode
          />
        </p>
      </section>
      <section class="translate-right">
        <h1>Variants of gradient descent</h1>
        <p>
          Visual: Comparative visuals of stochastic, batch, and mini-batch
          gradient descent. Show how updates differ when using the entire
          dataset versus subsets.
        </p>
        <p>
          While the basic gradient descent algorithm updates parameters using
          the entire dataset, its variants make the process more efficient.
          Stochastic Gradient Descent (SGD) updates parameters using just one
          data point at a time. Mini-batch uses a subset, balancing efficiency
          and accuracy. Here’s how each variant operates on the same cost
          function.
        </p>
      </section>
      <section class="translate-right">
        <h1>Practical application and convergence</h1>
        <p>
          Visual: Graphs showing convergence over iterations under different
          conditions, such as varying learning rates or feature scales.
        </p>
        <p>
          In practical applications, the convergence of gradient descent is
          influenced by several factors including the choice of learning rate
          and the scaling of features. Poorly chosen parameters can lead the
          algorithm to diverge or converge too slowly. Adjusting these can
          significantly affect the outcome, as demonstrated below.
        </p>
      </section>
      <section class="translate-right">
        <h1>Playground</h1>
        <p>
          Visual: Interactive sliders controlling the learning rate, initial
          point, and perhaps even the type of gradient descent (stochastic vs.
          batch vs. mini-batch). Show the path on the cost function curve live
          as parameters are adjusted.
        </p>
        <p>
          Explore gradient descent by adjusting the parameters yourself. Change
          the learning rate, initial starting point, or gradient descent type.
          Watch how these changes affect the path to convergence on the cost
          function. This hands-on interaction can deepen your understanding of
          the dynamics of gradient descent.
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
