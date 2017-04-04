# function-threshold

[![NPM version][npm-image]][npm-url]

Limit the amount of times a function can be called in a specific timeframe and throw an error if the limit is exceeded.

## Installation

with [npm](https://npmjs.org)

```bash
npm install function-threshold
```

with [yarn](https://yarnpkg.com/)

```bash
yarn add function-threshold
```

## Example

```javascript
var FunctionThreshold = require('function-threshold');

function myFunction(suffix) {
  console.log('hooray, hello ' + suffix + '!');
}

// limit to 5 executions per 10 seconds (10.000 ms)
var threshold = new FunctionThreshold(myFunction, 5, 10000);

// call the function somewhere. It will throw an exception if limit is exceeded
threshold.call('world');

```

[npm-image]: https://img.shields.io/npm/v/function-threshold.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/function-threshold