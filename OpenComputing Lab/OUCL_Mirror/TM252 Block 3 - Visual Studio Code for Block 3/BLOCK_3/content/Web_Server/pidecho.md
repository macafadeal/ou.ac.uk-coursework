# Implementing an echo-server

As we have seen, Flask is a lightweight framework with a low code footprint. This means that implementing the foundations of a useful application is far less complex. 

The previous activity demonstrated how we could set up a rudimentary server using Flask and how to extend its functionality with additional endpoints. 

It is possible to build upon this by implementing endpoints that can accept information in the request to that endpoint. By using Flask’s request handling capabilities, we can create a simple echo server that accepts user input and sends it back as a response.

:::{code-block} python
from flask import Flask, request

app = Flask(__name__)

@app.route('/echo')
def echo():
    message = request.args.get("message", "No message received")
    return f"You said: {message}"

if __name__ == '__main__':
    app.run(debug=True)
:::

We can send the information to the endpoint using a standard URL format. When running Flask in the OCL environment, you should be able access your web application through the OCL URL. To include the information, we use the `?` seperator character followed by the name of the data we are expecting; in this case {guilabel}`message` and the value of the data you want to send.

You may have noticed that there is an {guilabel}`f` before the string in this example. This tells Python to interpret any expressions inside curly braces as part of an f-string, which means the values of variables or expressions are automatically inserted into the string at runtime.

```python
    https://jhub-tm252.ocl.open.ac.uk/user/<your OCL ID>/code-server/proxy/5000/echo?message=datatosend
```

If we were to call the above URL, the response would be as follows:

```python
    You said: datatosend
```

This example includes similar endpoints to those discussed in the previous activity in addition to a new endpoint that looks a little more complex. As with other concepts, we have introduced some further instructions here to achieve the task.  

To handle the information being received, we have made use of the request functionality in the flask framework. To use this functionality we have to import the request class. This allows us to extract the information from the request and perform actions using it.
```python 
    from flask import Flask, request
```

We then use the functionality of this class in the echo function
```python
    message = request.args.get("message", "No message received")
```

This line runs when the endpoint is accessed and checks the URL for a "message" parameter after the ?. If found, its value is assigned to the variable message; otherwise, message defaults to "No message received." The code acts as a simple echo server, returning the value of message to the sender.


:::{activity} Activity: Implementing an Echo Server

Go to the Module Website in a separate browser tab or window and from there access the OpenComputing Lab (OCL). You can find the link to access the OCL in the Resources section or in each week in the planner.


Having explored the ways in which flask requests can be employed, complete the following activity.


1. In the OCL click on the {guilabel}`26B TM252 Block 3 VCE` link.

2. Create a new Python file and save it as {guilabel}`flask-echo.py`

3. Add comment to the file to indicate the name and date for the file

4. Using the example above (found in the skeletons folder), add another endpoint to the application that returns the message "You have successfully  implemented an echo server" followed by your OUCU. You will find your OUCU at the top of the page next to your name. The endpoint that you create should reflect the action being taken (for example {guilabel}`/echo`)

   <details>
    <summary>Optional Extra Task</summary>
    Add a further endpoint with the path '/get_time' to your echo server that returns the curent date and time. To do so you will need to determine how to get the current date and time in Python.
    
    {guilabel}`from datetime import datetime`
    
    You can use the import to retrieve the current date and time using the following functions:
    
    {guilabel}`now = datetime.now()`
    
    </details>

    

6.  Save the script for future reference
7.  you can terminate the Flask instance by selecting the terminal window and holding ctrl and pressing c.
:::




