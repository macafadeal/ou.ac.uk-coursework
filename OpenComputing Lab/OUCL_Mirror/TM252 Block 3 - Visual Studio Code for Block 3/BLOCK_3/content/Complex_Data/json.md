# Handling Complex Data with JSON

Now that you’ve worked with GET and POST requests, it’s time to explore JSON data handling in more detail, a crucial concept in modern web development. As we discussed in the VLE materials, JSON (JavaScript Object Notation) is a lightweight, text-based format used for storing and exchanging data. It’s widely used for sending and receiving data between clients (like web browsers or mobile apps) and servers in a format that is easy for both humans and machines to read and write.

## What is JSON?

JSON is a data format that represents data as key-value pairs, much like dictionaries in Python. It is easy to work with because it can represent complex data structures, including nested objects and arrays. JSON is not limited to POST requests; it can be used in any HTTP request method (GET, POST, PUT, DELETE, etc.) that needs to send or receive structured data.

Here’s a simple example of JSON data representing a student's details

:::{code-block} json
{
  "name": "John",
  "oucu": "ab12345",
  "enrolled_modules": [
    {
      "module_name": "TM111",
      "presentation": "24J"
    },
    {
      "module_name": "TM112",
      "presentation": "26B"
    }
  ]
}
:::

In this example, the top-level JSON object contains several key-value pairs. The {guilabel}`enrolled_modules` field is a little more complex: it is an array, and each item in that array is an object with its own key-value pairs ({guilabel}`module_name` and {guilabel}`presentation`). In the explanatory text we use the term OUCU, while JSON key names in code examples are written in lowercase (for example, {guilabel}`oucu`) to match common coding conventions.

## JSON in Flask POST Requests

Let’s focus on POST requests first, since they’re commonly used with JSON. 

When sending JSON in a POST request, the data is included in the body of the request rather than the URL, allowing you to send structured data like the example above. Compared with simple form submissions, JSON is often more convenient for representing nested or complex data structures.

:::{code-block} python
from flask import Flask, request
import requests

app = Flask(__name__)

@app.route('/profile', methods=['POST'])
def profile():
  data = request.get_json() or {}
  # Extract name and OUCU from the JSON data
  name = data.get('name', 'Guest')
  oucu = data.get('oucu', 'Unknown')
  # Returning a dictionary makes Flask send a JSON response
  return {"message": f"Profile received for {name}, OUCU: {oucu}"}

@app.route('/test-profile', methods=['GET'])
def test_profile():
  post_url = 'http://localhost:5000/profile'
  sample_data = {"name": "testuser", "oucu": "ab12345"}
  response = requests.post(post_url, json=sample_data)
  return response.json()

if __name__ == '__main__':
  app.run(debug=True)
:::


In this example the {guilabel}`/profile` endpoint is set up to handle POST requests that send JSON data in the body. We use {guilabel}`request.get_json()` to parse the incoming JSON data into a Python dictionary. The name and OUCU are extracted from the data and returned as part of the response. The {guilabel}`/test-profile` endpoint sends a sample POST request so you can quickly test the behaviour.

## Sending JSON POST Requests

To send a JSON POST request, you can use external tools such as Postman or Curl, both of which are beyond the scope of this section. It is also possible to send a post request by using JavaScript. 

Here's an example of how you may send a POST request with JSON in JavaScript:

```js
  fetch('http://localhost:5000/profile', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John',
    oucu: 'ab12345'
  })
})
.then(response => response.json())
.then(data => console.log(data));
```
In this example, the fetch() API sends a POST request with JSON data in the request body and uses the {guilabel}`Content-Type: application/json` header. The response is then parsed as JSON using {guilabel}`response.json()`.

## JSON in Other HTTP Methods

While we’ve focused on POST requests here, JSON can be used with any HTTP method that involves sending or receiving data. Much like the GET requests we have seen already might use JSON to return data from the server to the client.

Here’s an example of using ***JSON*** in a ***GET*** request:

:::{code-block} python
from flask import Flask, request

app = Flask(__name__)
@app.route('/user', methods=['GET'])
def user():
    user_data = {
        "name": "John",
        "oucu": "ab12345"
    }
    # Flask will automatically convert this to JSON
    return user_data  

if __name__ == '__main__':
    app.run(debug=True)
:::

By completing these tasks, you'll gain hands-on experience with JSON requests and responses, which are essential for building APIs and working with modern web applications.

:::{activity} Activity: Working with JSON Requests

Now that you’ve learned a little about the basics of JSON and its use with different HTTP methods, try the following tasks:

1. In the OCL click on the {guilabel}`26B TM252 Block 3 VCE` link.
2. Create a new Python file and name it {guilabel}`flask-json-example.py`.
3. Add a comment to the file to indicate the name and date for the file
4. Set up a POST endpoint {guilabel}`/add-book` that accepts a JSON object containing a {guilabel}`book_name` and a {guilabel}`book_author` key-value pair and returns a message confirming the received data. 
5. To test the endpoint, you can use either JavaScript {guilabel}`fetch` or create a simple testing endpoint such as {guilabel}`/test-add-book` that sends a POST request with sample JSON data to {guilabel}`http://localhost:5000/add-book`.
6. Modify your code to add more than two key-value pairs for the JSON object. For instance, a book will have attributes such as {guilabel}`publication_year` and {guilabel}`price` associated with it.
7. Create a GET endpoint {guilabel}`/get-book` that returns a books information in JSON format.
8. Save and run the script for future reference
