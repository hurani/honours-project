# Tutorial 9
## HTTP Codes

### Server
HTTP Codes are status codes sent alongside requests to signal something to the client. The following are the most common HTTP codes:

    200 OK
    201 Created
    301 Moved Permanently
    400 Bad Request
    401 Unauthorized
    403 Forbidden
    404 Not Found
    500 Internal Server Error

Using the most appropriate HTTP code is crucial for the client to know what to do with the response. For example, if the client requests a resource that does not exist, the server should return a 404 error.

In our server, we will treat a successful creation of a tweet as a 201 Created response. We will treat a successful reading and deletion of a tweet as a 200 OK response.

Update the express server routes to return the appropriate HTTP code for each route.

### Client

The client will be responsible for handling the HTTP codes. For example, if the client requests a resource that does not exist, the client should display an error message.

Set up the client to display an appropriate error message for each HTTP code. To get the HTTP code for a response, use the fetch API to make a request to the server. If you store the response in a variable, you can use the `status` property to get the HTTP code.

If the expected code is not returned, display an error message. Use the alert function to display the error message. As a bonus, display the error as a disappearing toast.