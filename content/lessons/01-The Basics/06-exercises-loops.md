---
title: "Exercises: Loops"
---
import Exercise from "../../../components/Exercise"

## Many rectangles

<Exercise title="Draw 100 rectangles. Lay them out as you want."
          demo_link="https://p5-class-jf.github.io/100-rectangles-v1/"
          code_link="https://github.com/p5-class-jf/100-rectangles-v1/blob/main/src/sketch.ts"
/>

:::info Bonus constraints
*Play with the alpha value (transparency) or with the [Blend Mode](https://p5js.org/reference/#/p5/blendMode) to make it more interesting when rectangles overlap.*
<Exercise title=""
          demo_link="https://p5-class-jf.github.io/100-rectangles-v2/"
          code_link="https://github.com/p5-class-jf/100-rectangles-v2/blob/main/src/sketch.ts"
/>
:::

## Random positions

<Exercise title="Draw 100 ellipses. Try to have more of them near the center of the canvas."
          demo_link="https://p5-class-jf.github.io/100-ellipses/"
          code_link="https://github.com/p5-class-jf/100-ellipses/blob/main/src/sketch.ts"
/>

:::info Bonus constraints
*Find several ways of having them concentrated near the center. I can think of at least 3 different ways of achieving this result.*
:::

## Rosace

<Exercise title="Draw a rosace."
          demo_link="https://p5-class-jf.github.io/rosace/"
          code_link="https://github.com/p5-class-jf/rosace/blob/main/src/sketch.ts"
/>

:::info Bonus constraints
*How to colorize the rosace?*
<Exercise title=""
          demo_link="https://julesfouchy.github.io/p5_Rosace_Generator/"
          code_link="https://github.com/JulesFouchy/p5_Rosace_Generator/blob/main/sketch/sketch.ts"
/>

and its [fragment shader](https://github.com/JulesFouchy/p5_Rosace_Generator/blob/main/shader/myShader.frag)
:::

## Chessboard

<Exercise title="Make a chessboard pattern."
          demo_link="https://p5-class-jf.github.io/chessboard/"
          code_link="https://www.openprocessing.org/sketch/1107037"
          code_link_name="Step-by-step help and solution"
/>

:::info Bonus constraints
- *Can you generalize to any number of grid cells?*
- *Can you think of another tiling pattern? Using three colors instead of two for example.*
- *Can you do it in less than 10 lines of code? Less than 5?*
    - Avoid accumulative variables (compute everything based on the current loop indices instead of having global variables that change from one loop iteration to the next)
    - Use one loop instead of two<br/>
    [Solution in 10 lines](https://github.com/p5-class-jf/chessboard-10-lines/blob/main/src/sketch.ts)<br/>
    [Solution in 5 lines](https://github.com/p5-class-jf/chessboard-5-lines/blob/main/src/sketch.ts)
:::

## Custom circle

*__Draw a circle, but do it by placing each vertex "by hand" using a [shape](https://p5js.org/reference/#/p5/beginShape)__*
<Exercise title=""
          demo_link="https://p5-class-jf.github.io/distorted-circle/"
          code_link="https://github.com/p5-class-jf/distorted-circle/blob/main/src/sketch.ts"
/>

:::info Bonus constraints
*Now that you drew the circle yourself, you have more control and you can alter it!*
- *Add a small random offset to each vertex to create a distorted circle (See Method 0 of the example)*
- *Add an offset based on the angle of the current vertex to make continuous effects (See Methods 1 and 2 of the example)*
<Exercise title=""
          demo_link="https://p5-class-jf.github.io/distorted-circle-v2/"
          code_link="https://github.com/p5-class-jf/distorted-circle-v2/blob/main/src/sketch.ts"
/>
:::