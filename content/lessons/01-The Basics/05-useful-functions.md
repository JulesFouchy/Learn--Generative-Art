---
title: Useful Functions
---
import P5Code from "../../../components/P5Code"
import LoadP5Widget from "../_load_p5_widget.md"

<LoadP5Widget/>

## `random`

Returns a random number inside a given interval

<P5Code code={`
ellipse(
    random(0, width),  // Center x, a random number between 0 and width
    random(0, height), // Center y, a random number between 0 and height
    100                // Diameter
)
`}/>
<br/>
<br/>

It can also give you a random element from a list:

<P5Code code={`
const colorsList = ["#4287f5", "#f0243f", "#94f268"]
;br
const myColor = random(colorsList) // Pick a random color from the list
;br
fill(myColor)
ellipse(width/2, height/2, 100)
`}/>

## `lerp` and `lerpColor`

This is basically what allows you to make gradients:

<P5Code code={`
for (let t = 0; t < 1; t += 0.1) {
    const diameter = lerp(
      20,  // start
      150, // end
      t    // progression percentage (between 0 and 1)
    )
    const col = lerpColor(color("#FFC003"), color("#6D32ED"), t)
    const x = lerp(10, width - 100, t)
    fill(col)
    noStroke()
    ellipse(x, height/2, diameter)
}
`}/>

## `p5.Vector`

A `p5.Vector` is a type that holds two (or three) coordinates : *x*, *y* and *z*.<br/>
It has a lot of useful methods like getting its length or direction, and you can do math operations with them.<br/>
PS: check [the documentation](https://p5js.org/reference/#/p5.Vector)!

One nice thing in particular is that you can create them from an angle:

<P5Code code={`
translate(width/2, height/2) // put (0, 0) in the center of the canvas because the vectors will be distributed around (0, 0)
;br
for (let angle = 0; angle < TWO_PI; angle += TWO_PI / 6) {
    const p = p5.Vector.fromAngle(angle).mult(100) // Vector of length 100 pointing in the direction of angle
    ellipse(p.x, p.y, 50)
}
`}/>



## Transforms: `translate`, `rotate` and `scale`

When you start doing more complex things, keeping track of all the relative coordinates can get very annoying: transforms can help you handle that very nicely!<br/>
Also, some things like drawing a square rotated by 45° cannot be done except with transforms!

:::tip
Here is [a nice tutorial about transforms](https://processing.org/tutorials/transform2d/).<br/>
It is using *Processing* and not *p5*, but the functions are exactly the same!
(except that `pushMatrix()` is called `push()` in *p5*, and `popMatrix()` is called `pop()`.
:::