# flask-login-example.py
# Starter file for the login persistence example.

from flask import Flask, request, jsonify
import sqlite3
import requests

app = Flask(__name__)
app.secret_key = "TM252SECRETKEY"
DATABASE_NAME = "test.db"


def init_db():
    conn = sqlite3.connect(DATABASE_NAME)
    cursor = conn.cursor()
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS users (
            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
        """
    )
    conn.commit()
    conn.close()


@app.route("/login", methods=["POST"])
def login():
    data = request.get_json() or {}
    username = data.get("username")

    if not username:
        return jsonify("Missing username"), 400

    conn = sqlite3.connect(DATABASE_NAME)
    cursor = conn.cursor()
    cursor.execute(
        "SELECT user_id, username FROM users WHERE username = ?",
        (username,),
    )
    user = cursor.fetchone()
    conn.close()

    if user:
        user_id, username = user
        return jsonify({"user_id": user_id, "username": username})

    return jsonify("User not found"), 404


@app.route("/test-login", methods=["GET"])
def test_login():
    post_url = "http://localhost:5000/login"
    sample_data = {"username": "student", "password": "53cur3"}
    try:
        response = requests.post(post_url, json=sample_data)
        return jsonify(response.json())
    except requests.exceptions.RequestException as exc:
        return jsonify({"error": str(exc)}), 500


init_db()

if __name__ == "__main__":
    app.run(debug=True)
