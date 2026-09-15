# Handling Parameters

In the previous section, we explored how Flask allows us to create an endpoint that accepts a single parameter using the request.args.get() method. This enabled us to extract data from the request and return it as a response, creating an echo server. However, real-world applications often require handling multiple pieces of data at the same time.

Flask provides a straightforward way to retrieve multiple parameters from a request, allowing us to pass more than one value within the request URL. By extending our previous example, we can modify our echo server to accept and process multiple parameters at once.

Consider the following example:

:::{code-block} python
from flask import Flask, request

app = Flask(__name__)

@app.route('/extended-echo')
def echo():
    name = request.args.get("name", "Unknown")
    pid = request.args.get("pid", "Unknown")
    return f"Hello {name}, your Pid is {pid}"

if __name__ == '__main__':
    app.run(debug=True)
:::

This new endpoint, '/extended-echo', demonstrates how we can retrieve multiple parameters from a request. We can call a URL with multiple parameters in the following way:

```python
    https://jhub-tm252.ocl.open.ac.uk/user/<your OCL ID>/code-server/proxy/5000/extended-echo?name=yourname&pid=ZZ1111
```

You may notice that we have introduced one further symbol in the URL; the `&` symbol. This symbol is used to separate the parameters given for the request allowing many pieces of information to be sent to the endpoint.

By implementing multiple parameters, we can make our Flask applications more interactive and capable of handling a wider range of requests. This concept is essential when building applications that require users to submit multiple pieces of data at once, such as registration forms, search queries, or API requests

:::{activity} Activity: Handling Multiple Parameters

Now that you have seen how Flask can handle multiple parameters, try the following task in the OpenComputing Lab (OCL):

1. In the OCL click on the {guilabel}`26B TM252 Block 3 VCE` link.

2. Create a new Python file and save it as {guilabel}`flask-extended-echo.py`

3. Add a comment to the file to indicate the name and date for the file

4. Add a new endpoint '/information' that accepts three parameters: first_name, last_name, and course.

5. Modify the response so that it returns a message in the following format:
    {guilabel}`Welcome [first_name] [last_name], you are enrolled in [course].`

6. Save and run the script. Test this using the console or the browser by visiting the appropriate URL.

7. Save the script for future reference.

8. To terminate the Flask application you can select the terminal window, hold Ctrl and press c
:::
