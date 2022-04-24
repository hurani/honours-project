# Tutorial 2

## Creating a Twitter timeline
In this tutorial we will be looking at how to create a simple Twitter timeline. This tutorial will focus only on the frontend aspect.

1. Start off by creating a text box and a button associated with it.
2. Create a `div` under the text box and button that will represent the tweets timeline. Every time a new tweet is received, it will be appended to this `div`.
3. Create an `onclick` handler for the `button` that appends the tweet that is typed out in the text box to the `div` area.
4. Each tweet should have the following structure:

	```javascript
	{
		name: 'Anonymous',
		tweet: 'Hello World',
		timestamp: 1647208675675
	}
	```

	For now you can hardcode the name as `Anonymous` as we have not implemented functionality to differentiate tweets by user. The timestamp represents the number of milliseconds since epoch time. You can use the `Date` object in Javascript to get this. [Here is the official documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) for the `Date` object and epoch time in Javascript. As a bonus, try displaying the timestamp alongside the tweet in a human readable format (ie. dd/mm/yyyy).

5. Alert the user when the tweet is empty or when they have exceeded 280 characters.
