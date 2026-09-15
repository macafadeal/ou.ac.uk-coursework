# Request handling (GET and POST)

Now that you’ve seen how to handle parameters in Flask, let’s take the next step and look at two of the most common types of HTTP requests that a Flask application might handle: GET and POST. These two methods are the foundation of web interactions.

## The GET Request

In a GET request, data sent in this request is done so as part of the query string. This is similar to what we've already done when passing parameters using {guilabel}`request.args.get()`. GET requests are often used to get information from a server without modifying anything.

:::{code-block} python 
from flask import Flask, request

app = Flask(__name__)

@app.route('/welcome') 
def responseMessage(): 
    name = request.args.get('name', 'Guest') 
    return f"Welcome, {name}!"

if __name__ == '__main__':
    app.run(debug=True)
:::


## The POST Request

In contrast to a GET request, a POST request is used when you need to store or change information on the server. Unlike GET requests, POST requests do not append the data to the URL in a query string. POST data is included in the body of the request, making it more suitable for sensitive data and is often used for the transport of large amounts of information. 

For instance, let’s consider a form where a user submits their email and a message to a server through a contact form. Here’s an example of how you could set this up in Flask using a POST request:

:::{code-block} python
from flask import Flask, request

import requests #a further import is included here for redirection (this is used to automate the testing of the POST request), the form option, however, is the correct approach

app = Flask(__name__)
@app.route('/contact', methods=['POST'])  #note the use of the POST in the methods here
def contact(): 
  email = request.form.get('email', 'no email supplied')
  message = request.form.get('message', 'no message supplied')
  return f"Received message from {email}: {message}"



@app.route('/test-contact', methods=['GET'])  # or POST, depending on use
def test_redirect_contact():
    post_url = 'http://localhost:5000/contact'
    sample_data = {
        "name": "Tenzing Norgay",
        "message": "Greetings Traveller...."
    }
    try:
        response = requests.post(post_url, data=sample_data)
        return response.text 
    except requests.exceptions.RequestException as e:
        return f"error{str(e)}", 500

if __name__ == '__main__':
    app.run(debug=True)
:::

In this example, the {guilabel}`/contact` endpoint expects a POST request where the data is sent in the body of the request. The email and message are extracted from the form data using {guilabel}`request.form.get()`.

When testing from Python using {guilabel}`requests.post()` inside the same Flask app, using {guilabel}`http://localhost:5000/...` is usually fine because the request is made from the server process itself. When submitting a form from a browser on your own machine, you must use your OCL proxy URL instead of {guilabel}`localhost`.

Sending requests using the POST method is a little more complicated than using a GET method here as we cannot just send the data using the URL. We can use HTML to implement a form that allows us to send a POST request to the application. Fortunately, you have already looked at HTML forms in previous weeks of block 2. An example form that can be used is demonstrated in the following extract:

:::{code-block} html
<form action="https://jhub-tm252.ocl.open.ac.uk/user/<your OCL ID>/code-server/proxy/5000/contact" method="POST">
  <input type="text" name="email" placeholder="Your email">
  <textarea name="message" placeholder="Your message"></textarea>
  <button type="submit">Submit</button>
</form>
:::

If you place this HTML directly in a {guilabel}`.html` file, do not wrap it in triple quotes. Triple quotes are only required when HTML is embedded inside a Python string (for example, {guilabel}`return '''...'''` in a Flask route).


:::{warn}
Due to cross-site post security in place, it will not be possible for you to test this example solely using the OCL. You will need to create a HTML file on your local machine and copy and paste the above form into it.
:::


## Limiting Connections to Endpoints

You can control which HTTP methods are allowed for specific endpoints by using the methods parameter in the {guilabel}`@app.route` decorator. By default, Flask routes respond only to GET requests. However, if you want an endpoint to accept only certain methods—such as POST for sending data—you can explicitly specify them. If a user tries to access this endpoint with a different method (like GET), Flask will return a “Method Not Allowed” error. This ensures that your endpoint only handles the types of requests you intend.

By completing these tasks, you’ll gain more experience in handling both GET and POST requests, which are essential for building dynamic web applications.

:::{activity} Activity: Understanding GET and POST Requests

Now that you’ve learned about GET and POST requests, try the following tasks:
1. In the OCL click on the {guilabel}`26B TM252 Block 3 VCE` link.

2. Create a new Python file and name it {guilabel}`flask-post-example.py`.

3. Set up a POST endpoint that accepts a user's username and password as parameters. You should name this endpoint {guilabel}`/userinfo`. This endpoint should return text in the following format:  
   {guilabel}`f"Hello {username}, Welcome back!"`.  
   Instructions on how to test this are given from step 5.

4. Create a GET endpoint that accepts a {guilabel}`name` and {guilabel}`pid` and responds with a greeting that includes these pieces of information. The endpoint should be called {guilabel}`/greet`.

5. Run your Flask application using the terminal commands outlined previously.

6. To test the POST endpoint from step 3, follow these substeps:

    a. On your own computer, open a text editor and create a blank HTML file.

    b. In this HTML file, add the basic HTML structure:

      :::{code} 
        <!DOCTYPE html>
        <html>
          <head>
            <title>POST Form</title>
          </head>
          <body>
              <form action="https://jhub-tm252.ocl.open.ac.uk/user/<your OCL ID>/code-server/proxy/5000/userinfo" method="POST">
              <label for="username">Username:</label>
              <input type="text" id="username" name="username"><br><br>
              <label for="password">Password:</label>
              <input type="password" id="password" name="password"><br><br>
              <input type="submit" value="Submit">
            </form>
          </body>
        </html>
      :::

    c. Make sure the {guilabel}`name` attributes of the form elements match the parameter names used in your Flask route.

    d. Update the {guilabel}`action` attribute so it points to your full OCL proxy URL for the {guilabel}`/userinfo` endpoint.

    e. Save the HTML file.

7. Open the HTML file using your favourite web browser.

8. When the page loads, enter information into both textboxes and click "Submit". You should then see the greeting message from the Flask server.

9. Ensure you save your Python script for future reference.
:::




