# A Simple Python Web Server

This simple web server demonstrates the core principles of how web applications work. It listens for incoming requests, processes them, and sends back responses—just like any real web server. By using only Python’s built-in modules, it avoids unnecessary complexity, making it easier to understand the fundamentals.

At its core, this implementation highlights key web server concepts: it continuously listens for requests, processes GET requests and responds with a message. It also demonstrates important ideas like port binding, HTTP’s stateless nature, and the client-server model. These are the same principles that power real websites and APIs, just on a much larger scale.

By learning how a basic server functions, you build a strong foundation for more advanced web development. Whether you move on to frameworks like Flask or Django, or dive deeper into networking, this understanding will help you develop and troubleshoot web applications more effectively.

:::{code-block} python
from http.server import HTTPServer, BaseHTTPRequestHandler #imports the functionality required to run the http server class

#creates a function to handle a request to the default address
def handle_request(self):
    self.send_response(200) # provides an OK http response
    self.send_header("Content-type", "text/plain") # determines the content type to return
    self.end_headers() #concludes header sending
    self.wfile.write(b'Hello, World!') # writes the content to send

#creates a function to handle a request to a second address endpoint
def handle_new_message(self):
    self.send_response(200)
    self.send_header("Content-type", "text/plain")
    self.end_headers()
    self.wfile.write(b'This is a new message!')

#defines and extension class to manage http functionality
class SimpleHandler(BaseHTTPRequestHandler):
    def do_GET(self): # function called whenever a request is received
        if self.path == '/': #this is the default path to the server, calls the default response function as noted above
            handle_request(self)
        elif self.path == '/new_message': # handles a second endpoint and calls the handle_new_message() function to respond to this
            handle_new_message(self)
        else:
            self.send_response(404) # in the event this server doesnt know the address added, a not found response will be provied
            self.end_headers()
            self.wfile.write(b'Not Found')

#function to perform set up the server and allow incoming connections
def serve():
    server = HTTPServer(('localhost', 8000), SimpleHandler)
    print("Serving on port 8000...")
    server.serve_forever()

if __name__ == '__main__':
    serve()

:::

There are a number of different concepts introduced within this script that we have not seen before. The following provides an overview of the instructions within the script to give you an idea of what each component does.

**Imports**:

    HTTPServer from http.server: Used to create the web server.
    BaseHTTPRequestHandler from http.server: Typically used for handling HTTP requests, but here it's used in a workaround to process the request.

**Functions**:

    handle_request(request, response)
        Sends a 200 OK response with the content type text/plain.
        Writes "Hello, World!" as the response body.

    serve()
        Defines a request handler function (handler) that initializes a BaseHTTPRequestHandler instance.
        Overrides do_GET with handle_request.
        Starts an HTTPServer on localhost:8000 using this handler.
        Runs indefinitely, serving requests.


:::{note}
Observing the output of web applications using the VCE is a little different from running your Python script and seeing the output in the console. To see the visual output of your endpoints, perform the following steps:

1. Ensure that you have saved your script file in an appropriate directory; make note of this as this will be used to run the script.

2. Ensure that you have the terminal open in the VCE

3. Enter the following command in the terminal replacing {guilabel}`<path to your file>` with the actual path noted in step 1 here. If you are comfortable with directory navigation in bash you may wish to navigate to the appropriate directory to work with shorted paths.

```bash
python3 ./<path to your file>
```
4. Once you have executed this command, the terminal should respond with the string: 

```bash
Serving on port 8000...
```



5. The VCE will also notify you that the server has started with a notification box in the bottom right of the screen. An option to view the output of this in the browser is provided. Clicking {guilabel}`open browser` will navigate to the served content

6. you can also access the endpoint using the following:

```bash
https://jhub-tm252.ocl.open.ac.uk/user/<your OCL ID>/code-server/proxy/8000/
```

Troubleshooting: if you see `code 501, message Unsupported method ('GET')`, your handler is running but no valid `do_GET` method is being used. Check that the method name is **exactly** `do_GET` (`GET` in UPPERCASE) and that your `HTTPServer(..., SimpleHandler)` is using the class where `do_GET` is defined.

:::


:::{activity} Activity: Build a Basic HTTP Server

Go to the Module Website in a separate browser tab or window and access the OpenComputing Lab (OCL). You can find the link to access the OCL in the Resources section or in each week in the planner.

Having explored the basics of Python's HTTP server and request handling, complete the following activity.

1. In the OCL, click on the {guilabel}`26B TM252 Block 3 VCE` link.

1. Create a new Python file and name it {guilabel}`http_server.py`.

2. Add a comment to the file indicating your name and the date.

3. Modify the handle_request function shown in the example above to return a custom message (e.g., "Welcome to My Server!").

4. Change the response type to {guilabel}`text/html` and return an HTML message.

5. Add functionality to handle a custom endpoint (e.g. {guilabel}`/greeting`) that returns a different message in the form of “A message from Python”. You should include both HTML and CSS to change the foreground and background colour of this message. Remember that you will need to change the content-type to {guilabel}`text/html` if you have not already done so.

6. Save the script for future reference.
:::


