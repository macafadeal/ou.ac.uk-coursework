# flask-register-user-example.py
# Starter file for the register_user persistence example.

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


@app.route("/register_user", methods=["POST"])
def register_user():
    data = request.get_json() or {}
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify("Missing username or password"), 400

    conn = sqlite3.connect(DATABASE_NAME)
    cursor = conn.cursor()
    try:
        cursor.execute(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            (username, password),
        )
        conn.commit()
        return jsonify("successful registration")
    except sqlite3.IntegrityError:
        return jsonify("Unsuccessful registration")
    finally:
        conn.close()


@app.route("/test-register_user", methods=["GET"])
def test_register_user():
    post_url = "http://localhost:5000/register_user"
    sample_data = {"username": "student", "password": "53cur39455w0rd"}
    try:
        response = requests.post(post_url, json=sample_data)
        return jsonify(response.json())
    except requests.exceptions.RequestException as exc:
        return jsonify({"error": str(exc)}), 500


init_db()

if __name__ == "__main__":
    app.run(debug=True)
