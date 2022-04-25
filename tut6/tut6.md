# Tutorial 6
## Polling
There are 2 main methods to enable polling: `setTimeout` and `setInterval`.

`setInterval` is the logical solution to the problem. It is built in to browsers. The problem with `setInterval` however is that given `x` milliseconds, `setInterval` will execute the function passed to it every `x` milliseconds regardless of how long the function took to execute (i.e. `x` milliseconds from the beginning of execution). This can be problematic for requests that take a long time because then the polling might end up fetching twice in a very short period of time.

The other approach which solves this problem is using `setTimeout` recursively. By doing this, we have control over exactly when the function gets executed, and it is not left up to the engine to decide.

For this tutorial, try to get your tweets refreshed every `x` seconds. Feel free to use either methods described above. You are encouraged to experiment with both.