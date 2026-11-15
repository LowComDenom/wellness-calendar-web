# Anonymous js function

```js
name: (() => {
  switch (i) {
    case 1: return "January";
    case 2: return "February";
    // ...
  }
})()
```

`()` at the end: that executes the anonymous function immediately and assigns its return value to `name`, rather than assigning the function itself.