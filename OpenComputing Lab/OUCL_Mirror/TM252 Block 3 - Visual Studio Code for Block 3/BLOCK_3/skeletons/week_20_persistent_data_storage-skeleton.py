#This template has been created to accompany the Week-20  Persistent Data Storage work on the VCE
#Note: The code in this template will not run without replacing the values surrounded by chevrons for
#      more appropriate values. You can use the material in the VCE for examples on how to do this.
#  This script can be executed using 'python3 ./skeletons/week_20_persistent_data_storage-skeleton.py' in the console

# NOTE: when you attempt to test this script, you will need to use the appropriate URL
# Examples : 
#           https://jhub-tm252.ocl.open.ac.uk/user/xxxxx/code-server/proxy/5000/register_user
#           https://jhub-tm252.ocl.open.ac.uk/user/xxxxx/code-server/proxy/5000/users



# Remember that register_user will require parameters of username and password

from flask import Flask, request, jsonify, session, redirect
#session import has been added here to allow for flask session functionality, 
#a further import in the form of redirect to handle true redirection to the root page following login
import datetime
import requests # requests imported to perform the redirect below
import sqlite3 #import needed to provide database management functionality

app = Flask(__name__)
app.secret_key = 'TM252SECRETKEY'

DATABASE_NAME = "test.db"


#This function initialises the database if it has not already been created
#if a database with the name given has been created then it would be useful to remove this prior to using this script
def init_db():
    conn = sqlite3.connect(DATABASE_NAME)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    ''')
    conn.close()




#function to permit the registration of a user. This stores the username and password into the database.
#Note that this is for illustration only and would not be sensible on a real server. storage of a password hash would
#be a far more sensible option for this application
@app.route('/register_user', methods=['POST'])
def register_user():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify("Missing username or password", 400)

    conn = sqlite3.connect(DATABASE_NAME)
    cursor = conn.cursor()
    try:
        cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, password))
        conn.commit()
        return jsonify("successful registration")
    except sqlite3.IntegrityError:
        return jsonify("Unsuccessful registration")  # user already exists
    finally:
        conn.close()
        


#Test method included to allow for post on the OCL server
@app.route('/test-register_user', methods=['GET'])
def test_register_user():
    # Make an actual POST request to your own /your-endpoint
    post_url = 'http://localhost:5000/register_user'
    sample_data = {"username" : "student","password":"53cur39455w0rd"}
    try:
        response = requests.post(post_url, json=sample_data)
        return jsonify(response.json())
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500



#this function calls the '/login' endpoint sending it test data contained within sample_data
@app.route('/test-login', methods=['GET'])
def test_login():
     # Make an actual POST request to your own /your-endpoint
    post_url = 'http://localhost:5000/login'
    sample_data = {"username": "student","password":"53cur3"}
    try:
        response = requests.post(post_url, json=sample_data)
        return jsonify(response.json())
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500


#This function performs the retrieval of records from the database
#Note the sql statement being executed below
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    if not username:
        return jsonify("Missing username", 400)

    conn = sqlite3.connect(DATABASE_NAME)
    cursor = conn.cursor()
    cursor.execute("SELECT user_id, username FROM users WHERE username = ?", (username,))
    user = cursor.fetchone()
    conn.close()

    if user:
        user_id, username = user
        return jsonify({'user_id': user_id, 'username': username})
    else:
        return jsonify("User not found", 404)

init_db()

if __name__ == '__main__':
    app.run(debug=True)

