# Persistent data storage

Now that you’ve learned how to manage user sessions, let’s take the next step and introduce persistent data storage. So far, we’ve been storing user data in sessions, which are suitable for temporary storage. However, session data is typically lost when the session expires or the server restarts (unless a server-side session store is used). In most real-world applications, user data, preferences, and records need to be stored persistently, which is where databases come in.

A database allows applications to efficiently store, retrieve, and manipulate data. For this section, we will use SQLite, a lightweight, file-based database system accessible via Python’s built-in sqlite3 module. SQLite is an excellent choice for small to medium applications because it requires no separate server setup and stores data in a simple file on disk.

## Setting Up SQLite in Flask

Flask does not provide built-in database support but works well with SQLite through Python’s standard library. When connecting to an SQLite database, the database file is created automatically if it doesn’t exist. The crucial step is defining the database schema (tables) to store your data.

The following code extract demonstrates how you can create a table for data storage in Python using SQLite:

:::{code-block} python
import sqlite3


def init_db():
    conn = sqlite3.connect('test.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()


init_db()
:::

## Storing User Data in Flask

Now that we have a database set up, let's integrate it with Flask to allow user registration and login using stored credentials.

:::{code-block} python
from flask import Flask, request, jsonify
import sqlite3
import requests

app = Flask(__name__)

app.secret_key = 'TM252SECRETKEY'
DATABASE_NAME = 'test.db'


def init_db():
    db_conn = sqlite3.connect(DATABASE_NAME)
    db_cursor = db_conn.cursor()
    db_cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    ''')
    db_conn.commit()
    db_conn.close()

#function to permit the registration of a user. This stores the username and password into the database.
#Note that this is for illustration only and would not be sensible on a real server. storage of a password hash would
#be a far more sensible option for this application
@app.route('/register_user', methods=['POST'])
def register_user():
    json_data = request.get_json()
    username = json_data.get('username')
    password = json_data.get('password')

    if not username or not password:
        return jsonify('Missing username or password')

    db_conn = sqlite3.connect(DATABASE_NAME)
    db_cursor = db_conn.cursor()
    db_cursor.execute('SELECT 1 FROM users WHERE username = ?', (username,))
    existing_user = db_cursor.fetchone()

    if existing_user:
        db_conn.close()
        return jsonify('Unsuccessful registration')

    db_cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, password))
    db_conn.commit()
    db_conn.close()
    return jsonify('successful registration')
        


#Test method included to allow for post on the OCL server
@app.route('/test-register_user', methods=['GET'])
def test_register_user():
    post_url = 'http://localhost:5000/register_user'
    sample_data = {'username': 'student', 'password': '53cur39455w0rd'}
    response = requests.post(post_url, json=sample_data)
    return jsonify(response.json())


if __name__ == '__main__':
    init_db()
    app.run(debug=True)
:::

For simplicity, these examples store plain-text passwords so that the database flow is easier to see. This is not suitable for real applications, where passwords should be hashed and salted.



### Retrieve a user's details on login

:::{code-block} python
from flask import Flask, request, jsonify
import sqlite3
import requests

app = Flask(__name__)

app.secret_key = 'TM252SECRETKEY'
DATABASE_NAME = 'test.db'


@app.route('/test-login', methods=['GET'])
def test_login():
    post_url = 'http://localhost:5000/login'
    sample_data = {'username': 'student', 'password': '53cur3'}
    response = requests.post(post_url, json=sample_data)
    return jsonify(response.json())


def init_db():
    db_conn = sqlite3.connect(DATABASE_NAME)
    db_cursor = db_conn.cursor()
    db_cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    ''')
    db_conn.commit()
    db_conn.close()


@app.route('/login', methods=['POST'])
def login():
    json_data = request.get_json()
    username = json_data.get('username')
    password = json_data.get('password')
    
    if not username:
        return jsonify("Missing username", 400)

    db_conn = sqlite3.connect(DATABASE_NAME)
    db_cursor = db_conn.cursor()
    db_cursor.execute(
        'SELECT user_id, username FROM users WHERE username = ? AND password = ?',
        (username, password),
    )
    user = db_cursor.fetchone()
    db_conn.close()

    if user:
        user_id, username = user
        return jsonify({'user_id': user_id, 'username': username})
    else:
        return jsonify('Invalid username or password'), 401

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
:::

### Testing the Application

Use two separate files for the two examples above, because each one creates its own Flask app.

Use these starter files in the {guilabel}`skeletons` folder:

1. {guilabel}`skeletons/flask-register-user-example.py` for the {guilabel}`/register_user` example.
2. {guilabel}`skeletons/flask-login-example.py` for the {guilabel}`/login` example.

Test process:

1. Copy {guilabel}`skeletons/flask-register-user-example.py` to your working directory.
2. Rename the copy to {guilabel}`flask-register-user-example.py` (or another clear name) and run it.
3. Open {guilabel}`http://localhost:5000/test-register_user` to create a sample user in {guilabel}`test.db`.
4. Stop the first app.
5. Copy {guilabel}`skeletons/flask-login-example.py` to your working directory.
6. Rename the copy to {guilabel}`flask-login-example.py` (or another clear name) and run it.
7. Open {guilabel}`http://localhost:5000/test-login` to test retrieving user details from the same {guilabel}`test.db` file.

If you do not have the optional HTML form files in your environment, you can still complete this section by using the built-in test endpoints ({guilabel}`/test-register_user` and {guilabel}`/test-login`) as described above.

:::{activity} Activity: Storing and Retrieving User Data

Now that you have covered the basics of using SQLite in Flask, try these tasks:

By completing these tasks, you'll get hands-on experience in integrating databases with Flask, making your applications more functional and data-driven.

1. In the OCL click on the {guilabel}`26B TM252 Block 3 VCE` link.
2. Copy {guilabel}`skeletons/flask-register-user-example.py` into your working directory and save it as {guilabel}`flask-database-example.py`.
3. Add a comment to indicate the filename and date.
4. In {guilabel}`flask-database-example.py`, add a basic check for insecure passwords and return an "insufficient complexity" message if the password resembles {guilabel}`"password1"`.
5. Implement a GET endpoint {guilabel}`/get_users` that returns a list of registered users in JSON format.
6. Copy {guilabel}`skeletons/flask-login-example.py` into your working directory and use it as a reference to add or adapt a {guilabel}`/login` endpoint, then modify the login system to store the login timestamp in the database. You will need to add another field to the table for this. To do this, either:

    * Delete the existing database and update the {guilabel}`init_db` function to include an additional field in the {guilabel}`CREATE TABLE` command:

      ```sql
      last_login TEXT
      ```

   * or update the table using the {guilabel}`ALTER TABLE` command for sqlite3:

      ```sql
      ALTER TABLE users ADD COLUMN last_login TEXT;
      ```

    Then, after a successful login:

    * Record the current timestamp in Python (for example, using {guilabel}`datetime.now().isoformat()`).
    * Execute an SQL {guilabel}`UPDATE` statement to save the timestamp in the new {guilabel}`last_login` field for that user.

7. Run the script to test user registration and authentication endpoints.
8. Save the script for future reference.

:::


