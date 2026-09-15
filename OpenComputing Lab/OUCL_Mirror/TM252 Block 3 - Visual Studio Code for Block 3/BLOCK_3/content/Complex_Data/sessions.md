# Session Handling

Now that you've learned about handling JSON data and working with GET and POST requests, it’s time to discuss Session Handling, an important concept for maintaining state in web applications. Sessions are essential for tracking user activity, keeping users logged in, and storing temporary data (like shopping carts or user preferences) across multiple requests.

A session allows you to store data that persists across multiple HTTP requests from the same user. Since HTTP is stateless (each request is independent of the others), session management helps keep track of user interactions with the application over time. The most common use of sessions is for user authentication—once a user logs in, their session is used to remember their identity, so they don’t need to log in again on every request.

Flask uses a secure way of handling sessions based on a signed cookie mechanism. When you store session data in Flask, it is stored on the client side (in the browser) inside a cookie. While this data is not encrypted, it is cryptographically signed using the application's secret key. This signature ensures that the client cannot modify the data without invalidating the signature, helping to protect against tampering.


### How Sessions Work in Flask

In Flask, you can use the session object to store and retrieve data across multiple requests. The data stored in the session is automatically sent back and forth between the client and server with each request.

Here’s an example of how to handle sessions in Flask:

:::{code-block} python
from flask import Flask, session, redirect, request

app = Flask(__name__)
app.secret_key = "TM252SECRETKEY"

@app.route("/")
def home():
    if "username" in session:
        username = session["username"]
        return f"Logged in as {username}"

    # User is not logged in
    return "<div>Click <a href='./showform'>here</a> to log in</div>"

@app.route("/showform")
def showform():
    return """
    <form action="./login" method="POST">
        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Log In</button>
    </form>"""

@app.route("/login", methods=["POST"])
def login():
    username = request.form["username"]
    password = request.form["password"]
    # For simplicity, assume a hard-coded check (you would usually check a database)
    if username == "student" and password == "tm252password":
        # Store the username in the session
        session["username"] = username
        return redirect("./")
    return "Invalid login credentials."


if __name__ == "__main__":
    app.run(debug=True)
:::

To use this example in the VCE:

1. Save the Python code in a file and run it.
2. Open your app URL in the browser. The home page (`/`) will show a link to {guilabel}`/showform` if you are not logged in.
3. Open the {guilabel}`/showform` endpoint and submit the form.
4. After logging in, Flask stores {guilabel}`username` in the session and redirects you to the home page.

This demonstrates that session variables are maintained across endpoints, not just within a single route.

You can also limit access to certain routes based on the user's session data. For example, if the user is not logged in, you can redirect them to the login page.

::: {activity} Activity: Working with Sessions

Now that you understand the basics of session handling, extend the example above with the following tasks:

1. In the OCL click on the {guilabel}`26B TM252 Block 3 VCE` link.
2. Create a new Python file and name it {guilabel}`flask-session-example.py`.
3. Add a comment to the file to indicate the filename and the date.
4. Implement a {guilabel}`/logout` endpoint that removes the username from the session using {guilabel}`session.pop('username', None)` and then redirects to the home page.
5. Add a {guilabel}`Remember me` checkbox to your login form and set {guilabel}`session.permanent = True` only when the checkbox is selected.
6. Create a new endpoint (for example, {guilabel}`/set-favourite-colour`) that stores a second session variable called {guilabel}`favourite_colour`.
7. Update the home page to display both the logged-in username and favourite colour (if one has been set).
8. Prevent users who are not logged in from accessing your favourite-colour endpoint, and display a clear message if they try.
9. Save your script for future reference.
:::