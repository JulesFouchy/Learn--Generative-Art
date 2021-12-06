---
title: First Drawings
---
import P5Code from "/src/components/P5Code"
import Exercise from "/src/components/Exercise"

<head>
<script src="https://julesfouchy.github.io/p5.js-widget/p5-widget.js"></script>
</head>

## `width` and `height`

`width` and `height` are built-in variables that allow you to access the size of the sketch at any time. You will see me use them all the time, and you should really be using them to position your shapes relatively inside the canvas.<br/>
For example `(width/2, height/2)` corresponds to the center of the canvas.

## The coordinate system

:::tip
Important to note: the y-axis is pointing down!<br/>
*(0, 0)* is the top-left of the canvas.
:::

If you prefer having *(0, 0)* as the center of the canvas, you can do `translate(width/2, height/2)` before your start drawing. And to make the y-axis point up, also add `scale(1, -1)`

<P5Code code={`
//translate(width/2, height/2)
//scale(1, -1)
;br
ellipse(100, 100, 20)
;br
// -------
// Draw the axes
// -------
noFill()
strokeWeight(2)
// x-axis
stroke("red")
line(-width, 0, width, 0)
triangle(width/2, 0, width/2 - 10, 10, width/2 - 10, -10)
// y-axis
stroke("green")
line(0, -height, 0, height)
triangle(0, height/2, 10 , height/2 - 10, -10, height/2 - 10)
`}/>

   
## Shapes

*p5* knows how to draw quite a few shapes! We will take a look at the most common ones here but remember that you can find them *all* at https://p5js.org/reference/.

### `ellipse`

Ellipses are circles that can be wider in one direction (just like rectangles are squares that can be wider in one direction).

We specify them by giving the center *x* and *y*, and then the *diameter* (or two diameters if we want to have different sizes along the x and y axes).

<P5Code code={`
ellipse(
    width/2,  // center (x coordinate)
    height/2, // center (y coordinate)
    100,      // diameter along the x-axis
    50        // diameter along the y-axis
)
;br
ellipse(
    width/2,     // center (x coordinate)
    height*0.75, // center (y coordinate)
    100          // diameter
)
`}/>

### `rect`

Rectangles use almost the same parameters as Ellipses. The big difference though is that the first two parameters are (by default) the coordinates of the top-left corner, not the center! (You can change this with the `rectMode` function)

<P5Code code={`
// rectMode(CENTER)
rect(
    width/2,  // top-left corner (x coordinate) (or center if you used rectMode(CENTER))
    height/2, // top-left corner (y coordinate) (or center if you used rectMode(CENTER))
    100,      // size along the x-axis
    50        // size along the y-axis
)
;br
rect(
    width/2,     // top-left corner (x coordinate) (or center if you used rectMode(CENTER))
    height*0.75, // top-left corner (y coordinate) (or center if you used rectMode(CENTER))
    100          // size 
)
`}/>
      
      

## Colors

:::tip
`fill(...)` is used to color the inside of the shape, and `stroke(...)` is used for its boundary.<br/>
If you don't want any stroke, you can remove it by calling `noStroke()`. And you can remove the fill by calling `noFill()`.
:::

The default way of specifing a color is by giving its RGB values. For example `fill(255, 145, 23)` will give some nice orange. (You can make so that `fill` uses HSB or HSL values instead of RGB with the `colorMode` function).

You can also use an hexadecimal string like `"#FF9117"` or a CSS color name like `"orange"`.

Note that the colors you specify remain until you change them. So for example this will draw both the ellipse and the rectangle in orange:

<P5Code code={`
// Choose an orange color and no stroke
fill(
    255, // Red   (between 0 and 255)
    145, // Green (between 0 and 255)
    23   // Blue  (between 0 and 255)
)
// fill("#FF9117")
noStroke()
// Draw some shapes
ellipse(100, 100, 50)
rect(200, 200, 100)
`}/>

The last (important) one in the family is `strokeWeight(...)`. It controls the thickness of the stroke, which is also the size of points and lines.<br/>
It has a value of 1 by default.

<P5Code code={`
strokeWeight(10)
    ellipse(width/2, height/2, 100)
    point(width/2, height/2)
strokeWeight(50)
    line(100, height*0.8, width-100, height*0.8)
strokeWeight(1) // Back to default
    line(100, height*0.3, width-100, height*0.3)
`}/>

## Exercises

:::info Exercises
- <Exercise title="Draw a house"
            demo_link="https://p5-class-jf.github.io/house/"
            code_link="https://github.com/p5-class-jf/house/blob/main/src/sketch.ts"
  />
- <Exercise title="Draw Mickey Mouse's face"
            demo_link="https://p5-class-jf.github.io/mickey-mouse/"
            code_link="https://github.com/p5-class-jf/mickey-mouse/blob/main/src/sketch.ts"
  />
- <Exercise title="Draw a face"
            demo_link="https://p5-class-jf.github.io/face/"
            code_link="https://github.com/p5-class-jf/face/blob/main/src/sketch.ts"
  />
:::