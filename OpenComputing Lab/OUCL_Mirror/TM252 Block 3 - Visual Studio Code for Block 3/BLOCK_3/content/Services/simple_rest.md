# Building a RESTful Service

In Flask, we can create a RESTful web service using routes that return data in JSON format. This is the same as putting all of the skills we have discussed into a single script. Below is a simple example of a rudimentary web service that provides user data from an SQLite database.

:::{code-block}
from flask import Flask, jsonify, request  
import sqlite3  

app = Flask(__name__)  

DATABASE_NAME = 'test.db'  # Use this database name consistently


def init_db():
    """
    Initialise the database and create the users table if it doesn't exist.
    """
    conn = sqlite3.connect(DATABASE_NAME)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    ''')
    conn.commit()  # Commit changes after table creation
    #This will add a record to the database to ensure there is a user to retrieve
    #Used for illustration only - the use of the UNIQUE identifier for the field will prevent entry of the same username in this instance
    cursor.execute('INSERT INTO users (username,password) VALUES ("tony","53cr3t9455w0rd")')
    conn.commit()
    conn.close()




def get_users():
    """
    Retrieve all users from the database.
    """
    conn = sqlite3.connect(DATABASE_NAME)
    cursor = conn.cursor()
    cursor.execute("SELECT user_id, username FROM users")
    users = cursor.fetchall()
    conn.close()
    # Return list of dicts without passwords
    return [{"user_id": user[0], "username": user[1]} for user in users]


@app.route('/users', methods=['GET'])  
def users():  
    """
    API endpoint to get all users.
    """
    return jsonify(get_users())  


@app.route('/users/<int:user_id>', methods=['GET'])  
def get_user(user_id):  
    """
    API endpoint to get a specific user by ID.
    """
    conn = sqlite3.connect(DATABASE_NAME)  # Use the consistent database name here
    cursor = conn.cursor()
    cursor.execute("SELECT user_id, username FROM users WHERE user_id = ?", (user_id,))  # Use correct column names
    user = cursor.fetchone()
    conn.close()

    if user:  
        return jsonify({"user_id": user[0], "username": user[1]})  # Return user info without password
    return jsonify({"error": "User not found"}), 404


init_db()  # Ensure the database and table are created before the app runs

if __name__ == '__main__':  
    app.run(debug=True)
:::


A simple API like this can be extended by adding more HTTP methods through the same endpoint format used in previous sections of this weeks activities. Implementing web applications in this way allows us to use the functionality provided by the application in devices that may not use a traditionl web-browser interface.

- POST requests to allow users to be added via the API.
- PUT requests to update user details.
- DELETE requests to remove users.


:::{activity} Activity: Building a Web Service in Flask
Go to the Module Website in a separate browser tab or window and from there access the OpenComputing Lab (OCL). You can find the link to access the OCL in the Resources section or in each week in the planner.

Now that you’ve seen how to create a basic web service, try the following tasks:


By completing these tasks, you'll gain hands-on experience in building RESTful web services, an essential skill in modern web development.

1. In the OCL click on the {guilabel}`26B TM252 Block 3 VCE` link.
2. Create a new Python file and name it {guilabel}`restful_service.py`
3. Add a comment to the file to indicate the name and date for the file
4. Modify the {guilabel}`/users` endpoint to return only two users.  
   use the {guilabel}`LIMIT` keyword to restrict the number of rows returned.

    :::{code} sql
        SELECT user_id, username FROM users LIMIT 2;
    :::

5. Add a {guilabel}`/delete_user` endpoint that removes a user from the database that takes the id as a parameter.  
   Use the SQL {guilabel}`DELETE` keyword to remove the user by {guilabel}`user_id`.

    :::{code} sql
        DELETE FROM users WHERE user_id = ?;
    :::

6. Test each endpoint by starting the Flask application in the OCL and visiting the appropriate endpoints.
7. Save your script for future reference.
:::

