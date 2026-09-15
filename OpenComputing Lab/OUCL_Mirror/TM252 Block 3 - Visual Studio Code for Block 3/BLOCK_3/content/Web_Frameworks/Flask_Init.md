# An introduction to Flask

As we have already seen, Flask is a lightweight web framework for Python that simplifies the process of building web applications. Flask is often used for building APIs, prototypes, and small-scale web applications, making it a great starting point for learning web development.

Flask enables you to define routes (URLs) and specify how the application should respond when those routes are accessed. Flask handles requests using Python’s built-in HTTP handling capabilities, making it easier to create and test web applications locally.

Flask is not an inbuilt component of the Python language but an additional module that needs to be installed whether you are using a personal machine or the Open Computing Lab for the activities here. We can include external modules in our scripts through the {guilabel}`import` and {guilabel}`from` keywords. {guilabel}`import` indicates the specific functionality we would like to include and {guilabel}`from` shows the module where it is located. The following code shows how this can be done.

```bash
pip install flask
```

and then a simple Flask application:

:::{code-block} python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'A TM252 Flask application endpoint has been reached!'

if __name__ == '__main__':
    app.run(debug=True)
:::

This example has one endpoint that can be accessed as the default route when sending a request to the server. This is seen in the following instruction:

```python
@app.route('/')
```

This code associates the function {guilabel}`home()` with the route. To add another endpoint, simply define another route with {guilabel}`@app.route()` and attach a function as seen below:

:::{code-block} python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, World!'

@app.route('/welcome')
def greet():
    return 'Welcome to TM252!'

if __name__ == '__main__':
    app.run(debug=True)
:::

:::{note}

Observing the output of web applications using the VCE is a little different from running your Python script and seeing the output in the console. To see the visual output of your endpoints when using Flask, perform the following steps:

1. Ensure that you have installed the flask module by using the {guilabel}`pip` package manager. This can be achieved by typing the following command into the terminal window of the VCE. This command will install the latest version of the flask module in your environment. Without this package, you will not be able to complete the tasks for this week.

   ```bash
   pip install flask
   ```

2. Ensure you have run the script using the terminal provided. This can be achieved by entering the following code into the terminal, replacing {guilabel}`<name and path to your file>` with the name of your Python script:

   ```bash
   python3 flask --app '/home/ou/TM252-26B/block_3/<name and path to your file>.py' run
   ```

3. Once you have run this command, you may receive a notification at the bottom right of your screen asking if you would like to "Open in browser". Upon clicking this link, another tab will open showing the output of your default endpoint. If this bulletin does not appear, assuming you have completed step one, you can visit your application using the following link:

    ```bash
    https://jhub-tm252.ocl.open.ac.uk/user/<your OCL ID>/code-server/proxy/5000/
    ```

To access specific endpoints of your application, you need to append the endpoint name to the link provided in step 2. For example, for an endpoint named {guilabel}`welcome`:

    https://jhub-tm252.ocl.open.ac.uk/user/<your OCL ID>/code-server/proxy/5000/welcome

:::

:::{note}
The OCL ID can be found from your OCL home page
:::

## Benefits and Disadvantages of Using Flask  

:::{Note} Flask is suitable for small applications but may not be ideal for larger projects.

### Benefits  
- **Lightweight & Easy to Use** – Minimal setup, beginner-friendly.  
- **Quick Development** – Ideal for rapid prototyping.  
- **Built-in Development Server** – No extra configuration needed for local testing.  
- **Customizable** – Provides flexibility compared to larger frameworks like Django.  

### Disadvantages  
- **Not Suitable for Large Applications** – Can become difficult to manage as the project scales.  
- **Development Server is Not Production-Ready** – Flask’s built-in server lacks security and should not be used in production.  
- **Limited Built-in Features** – No built-in authentication, admin panel, or ORM; requires third-party extensions.  
:::

:::{activity} Activity: Conditionals Practice

Go to the Module Website in a separate browser tab or window and from there access the OpenComputing Lab (OCL). You can find the link to access the OCL in the Resources section or in each week in the planner.


Having explored the ways in which web-frameworks can be employed, complete the following activity.

1. In the OCL click on the {guilabel}`26B TM252 Block 3 VCE` link.

2. Create a new Python file and save it as {guilabel}`flask-framework.py`

3. Add comment to the file to indicate the name and date for the file

4. Using the example above (found in the skeletons folder), add another endpoint to the application that returns the message "You have successfully reached the newly implemented endpoint". The route for this should be  {guilabel}`/new-endpoint`

5. Add a further endpoint that returns the evaluation of {guilabel}`5 + 5`. This means that the endpoint should return the value {guilabel}`10`. You should use an appropriate endpoint name

6.  Save the script for future reference
:::


