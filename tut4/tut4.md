# Tutorial 4
## Installing `mongodb`
Install the `mongodb` package using `npm install mongodb` in your backend folder.

## async/await
MongoDB exposes asynchronous methods that interface with the database. To work with these methods, it is important to understand Promises. Promises are asynchronous wrappers for function that either resolve to a value or reject (error) with a value. Javascript provides the `async/await` syntax to use with promises. This allows you to write asynchronous code that looks synchronous, vastly increasing readability.

To use `async/await`, prefix your function with `async`, and place `await` before any call to another asynchronous function. It's that simple

To convert the server into using mongodb instead of an array in-memory, get the mongo instance url, whether it is local or in the cloud.

In your code, connect to the database at `tut4` and the collection `tweets`.

Change your express handlers to use the `insertOne`, `deleteOne`, and `find` methods for the `POST`, `DELETE`, and `GET` handler respectively.

Hint: Running `collection.find()` with no options will return all the documents in the collection.

Make sure to use `await` with any call to a mongodb method.

