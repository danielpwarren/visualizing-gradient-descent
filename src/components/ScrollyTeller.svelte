<script>
  // @ts-ignore
  import Scroller from "@sveltejs/svelte-scroller";
  // @ts-ignore
  import CartesianPlane from "./CartesianPlane.svelte";

  let count, index, offset, progress;
</script>

<div>
  <Scroller
    top={0.0}
    bottom={1}
    threshold={0.5}
    bind:count
    bind:index
    bind:offset
    bind:progress
  >
    <div class="background" slot="background">
      <!-- <BackgroundPlot {index} /> -->
      <CartesianPlane {index} />
    </div>

    <div class="foreground" slot="foreground">
      <section class="centered">
        <div class="hero">
          <h1>A Visual Guide to Gradient Descent</h1>
          <p>
            Optimization lies at the heart of many machine learning algorithms.
            It's the process of finding the best parameters or settings for a
            model to minimize errors and improve accuracy. In this visual
            journey, we'll explore one of the most fundamental optimization
            techniques used in machine learning, gradient descent.
          </p>
        </div>
      </section>
      <section class="translate-right">
        <h1>Concept of gradients and derivatives</h1>
        <p>
          Visual: An animated sequence showing a point moving down the curve,
          step-by-step, adjusting its position based on the gradient.
        </p>
        <p>
          Gradients and derivatives are crucial for understanding how algorithms
          adjust their parameters during training. A gradient measures the slope
          of the tangent to the curve of the cost function at any point,
          providing the direction and rate of steepest ascent. By moving in the
          opposite direction, gradient descent seeks the lowest point on the
          curve.
        </p>
      </section>
      <section>
        <h1>Basic algorithm of gradient descent</h1>
        <p>
          Visual: An animated sequence showing a point moving down the curve,
          step-by-step, adjusting its position based on the gradient.
        </p>
        <p>
          Gradient descent updates the parameters iteratively to minimize the
          cost function. Starting from a random point, the algorithm calculates
          the gradient and takes a step proportional to the negative of the
          gradient. This step size is controlled by a parameter known as the
          learning rate. Let's see how this plays out.
        </p>
      </section>
      <section>
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
      <section>
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
      <section>
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

  .foreground {
    width: 50%;
    margin: 0 auto;
    height: auto;
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

  .hero {
    background-color: rgba(0, 0, 0, 0.95);
    border-radius: 10px;
  }

  .translate-right {
    transform: translateX(50%);
  }
</style>
