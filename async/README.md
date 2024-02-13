## Async

Do functions on separate threads, so that the main thread is not blocked.
Is syntactic sugar for `then`.
Returns a promise to the caller.
TypeScript uses `Promise`.

`await` can temporarily pause the execution of the function until the promise is resolved.

\*\*Beware which thread you are on. If you are on the main thread, you can't use `await`, you have to use `then`.

- Mapping to `json` is a promise, so you can use `.then`.

## Microtask

- Fulfilling a promise.
- Will be called on the **start of the next event loop**.

## Macrotasks:

- Will be executed on the **next event loop**.
- Examples: `setTimeout`, `setInterval`.

## Promise
- Call back hell is when you have a asnnc operation 
- Promise is a JavaScript API.
- Can be chained.
- Can `.catch` all errors in the chain with a single function.
- Huge improvement over callback hell.
- Avoid doing things concurrently like this no value is dependant on another so no need.

## Event Loop

- You can test using log functions to see the order of execution and test.

## Resources

- [Async Await Pro Tips](https://github.com/codediodeio/async-await-pro-tips)
- [Event Loop](https://www.youtube.com/watch?v=cCOL7MC4Pl0)

## Revision

- Explain the event loop.
- Explain the difference between micro and macrotasks.
- Explain the difference between async and sync.
- Know when to use async and await.
- Explain the difference between a promise and a callback.
- Write a blindfolded implementation of a promise.

## Study Tips

- Don't get bogged down in environment stuff.

---

## Promise chaining.
```
callbackFunction().then(logSomething); // Autmaitcally passed resolved 
```
