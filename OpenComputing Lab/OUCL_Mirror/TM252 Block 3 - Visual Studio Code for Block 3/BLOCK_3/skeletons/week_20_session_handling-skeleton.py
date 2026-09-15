#This template has been created to accompany the Week-20 Request Handling (GET and POST) work on the VCE
#Note: The code in this template will not run without replacing the values surrounded by chevrons for
#      more appropriate values. You can use the material in the VCE for examples on how to do this.
#  This script can be executed using 'python3 ./skeletons/week_20_request_handling_get_and_post-skeleton.py' in the console


from flask import Flask, session, redirect, url_for, request  # note the use of 'session','redirect','url_for' here

# NOTE: you will need to provide sensible variable names where appropriate below
#  The html form given in 'Request handling (GET and POST)' would be helpful in testing this code (you will need to ensure that the post values match the ones used here)

app = Flask(__name__)
#must set a secret key for server to use session variables
app.secret_key = 'TM252SECRETKEY'

@app.route('/')
def home():
    if 'username' in session:  # <session variable> should be replaced with the name of the value you wish to store (like a variable name)
        value = session['<suitable__variable_name>']  # as above for session variable.  change <suitable__variable_name>' to suit
        return f'Logged in as: {value}' # return the value obtained from the session
    return '''<!DOCTYPE html>
<html>
<head>
    <title>Login Form</title>
</head>
<body>
    <form action="./login" method="GET">
        <fieldset>
            <input type="text" id="username" name="username" placeholder="Your username" required>
            <input type="password" id="password" name="password" placeholder="Your password" required>
            <button type="submit">Submit</button>
        </fieldset>
    </form>
</body>
</html>'''


#Note the above form was taken from Request handling (GET and POST)

# login is only an example and should be changed to suit your needs
#Note that the GET method would not be the most secure approach and is not standard for login functions
#GET has been used for illustration purposes and to reduce complexity with respect to security measures of the OCL
@app.route('/login', methods=['GET'])
def login():
    username = request.args.get('username')
    password = request.args.get('password')
    # For simplicity, assume a hard-coded check (you’d usually check a database)
    if username == '<suitable_username_value>' and password == '<suitable_password_value>':  # use suitable values for checking login here (would usually be checked against a hash in a database)
        # Store the username in the session
        session['<suitable__variable_name>'] = username
        # Ensure the session lasts for the specified time
        session.permanent = True  
        return redirect(url_for('/'))  # redirect back to home or another endpoint
    return 'Invalid login credentials.'


if __name__ == '__main__':
    app.run(debug=True)
