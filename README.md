# FunctionThreshold

Limit the amount of times a function can be called in a specific timeframe and throw an error if the limit is exceeded.

## Example

```
function myFunction(suffix) {
  console.log('hooray, hello ' + suffix + '!');
}

// myFunction should only be called 5 times in a timeframe of 10 seconds (10.000 ms)
var threshold = new FunctionThreshold(myFunction, 5, 10000);

// call the function somewhere. It will throw an exception if limit is exceeded
threshold.call('world');

```
