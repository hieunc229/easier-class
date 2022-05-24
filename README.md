# easier-class

easier-class is a small Javascript ultility for working with classes.

## Examples

```js
import createClass, { createClassStr } from "easier-class";

const condition = false;

// Concat classes, and return a string
const container2Class = createClassStr(
  "class-1", "class-2",
  // will add class-3 if condition is true/not undefined/not null
  condition && "class-3"
) // => "class-1 class-2"

// Return an util object with "add/toString" functions
const containerClass = createClass(
  "class-1", "class-2",
  // will add class-3 if condition is true/not undefined/not null
  condition && "class-3"
);

containerClass.add("class-4");

// return a string with added classes
containerClass.toString(); // => "class-1 class-2 class-4"
```

## Installation

easier-class is available via npm packages. You can install easier-class using npm or yarn

```sh
$ npm install easier-class --save

// or using yarn
$ yarn add easier-class
```

## Features

### createClass

Create class receive arguments as string, false, undefined or null, and return the util object. This util object has the following functions

- `add` which allows you to add more classes
- `toString` concatenate any string values and return a string

### createClassStr

Create class receive arguments as string, false, undefined or null, and return a string value. Similar to calling `createClass(..arguments).toString()`

## Feedback, question

Feel free to [create a new issue](https://github.com/hieunc229/easier-class/issues/new) to discus about easier-class