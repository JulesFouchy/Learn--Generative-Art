---
title: setup and draw
---

In p5, there are two very important functions that you have to fill in: `setup` and `draw`

## `setup`

:::tip
`setup` will be called once at the start of your programm: this is where you choose the size of your canvas, initialize variables *etc.*
:::

If you are using my template you don't need to worry about choosing a size: it is done automatically, the default being a square that fills the window with a 25px margin.
(You can change this by modifying the `__desiredCanvasWidth` and `__desiredCanvasHeight` functions inside *src/p6/chooseCanvasSize.ts*).

The nice thing about specifying the size the way I did is that when the window resizes, the canvas is adapted automatically.

## `draw`

:::tip
`draw` will be called over and over, 60 times a second.
:::

This is where you put your drawing and animation code.

*With that said, let's start drawing!*