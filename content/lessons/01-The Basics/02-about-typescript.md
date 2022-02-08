---
title: About Typescript
---

:::tip
Typescript is **exactly the same** as Javascript, with *optional* types on top of it.
:::

## How do you use types in Typescript?

You can (optionally) specify a type after a variable, by using a colon: ```const x: number```.

It is very useful to specify the types expected by a function:

```typescript
function doSomething(x: number, y: number, title: string): number {
    // . . .
}
```
The above function takes two numbers and a string, and returns a number.

:::tip
Having precise type definitions allows your IDE to give you much better errors and warnings, and it makes your life a lot easier!
:::

If you still want the possibility for a variable to have multiple types, you can use a union: 

```typescript
const x: number | string
```

If you want optional arguments, declare them with a `?`:

```typescript
function doSomething(x: number, y: number, title?: string): number {
    // . . .
}
```

Here `title` is an optional parameter.

:::info Going further
Typescript has many more nice features: *enums*, *better classes*, *objects with well-defined fields* (called *interface*) *etc.*

Check out the [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) if you want to know more.
:::

## How do you use Javascript?

We won't need much knowledge of Javascript for this class.

The only thing I want you to remember is the proper way of declaring variables:

:::tip
Use `const`, or `let`.
:::

```typescript
const x = 10
```

A variable declared with `const` cannot be changed afterwards. It is a good practice to use `const` when your variable doesn't change, because it makes it clearer to the reader (and to yourself) that you don't intend to change this variable for the moment.

```typescript
let x = 10
```

If you need a mutable variable, then it is perfectly fine to declare it with `let`. I would recommend to always start with a `const` variable, and then change it to `let` once you decide to make it vary in your program.

And please, forget `var`. It is the old way of declaring variables and it can have confusing behaviour, so we introduced `const` and `let` in the language to replace `var`. Never ever use `var` again.

:::tip Good to know
In Javascript the semicolons at the end of every line are not required. It is only a stylistic choice and I'll let you decide which convention you prefer.
:::