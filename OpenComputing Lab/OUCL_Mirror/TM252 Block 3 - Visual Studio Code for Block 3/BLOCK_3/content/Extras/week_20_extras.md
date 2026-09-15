# Week 20 - Further Exploration (Optional)

:::{note}
This page is optional enrichment material.

It is not required to complete the core Week 20 activities. It provides a brief preview of API security topics that are usually explored in more detail later in the module.
:::

## Security Preview for REST APIs

So far in Week 20, you have focused on building Flask endpoints and exchanging JSON data. A natural next step is securing those endpoints so only authenticated users can access sensitive routes.

One common approach is to use **JSON Web Tokens (JWTs)**.

### JWT in one minute

1. A user logs in with credentials.
2. The server returns a signed token.
3. The client sends that token with later requests.
4. The server verifies the token before returning protected data.

### Minimal Flask JWT example

    from flask import Flask, request, jsonify
    import datetime
    import jwt

    app = Flask(__name__)
    app.config["SECRET_KEY"] = "change-this-secret"

    @app.route("/login", methods=["POST"])
    def login():
        data = request.get_json() or {}
        username = data.get("username")
        password = data.get("password")

        if username == "admin" and password == "53cur3":
            token = jwt.encode(
                {
                    "user": username,
                    "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1),
                },
                app.config["SECRET_KEY"],
                algorithm="HS256",
            )
            return jsonify({"token": token})

        return jsonify({"message": "Invalid credentials"}), 401

    @app.route("/protected", methods=["GET"])
    def protected():
        token = request.headers.get("Authorization")
        if not token:
            return jsonify({"message": "Token missing"}), 403

        try:
            payload = jwt.decode(token, app.config["SECRET_KEY"], algorithms=["HS256"])
            return jsonify({"message": f"Welcome {payload['user']}"})
        except jwt.InvalidTokenError:
            return jsonify({"message": "Invalid token"}), 403

:::{note}
If you want to run this example, install PyJWT first using {guilabel}`pip install PyJWT`.
:::

## Why this is only a preview

Real API security includes more than JWT:

- HTTPS everywhere
- input validation and output encoding
- secure password storage (hashing + salting)
- token expiry, refresh, and revocation strategy
- monitoring and rate limiting

JWTs also have a practical limitation: they are not easily revoked. Once issued, a token is usually valid until it expires unless you implement additional controls, such as a token revocation list.

These topics are introduced progressively later, so this page is intentionally a high-level extension rather than a required Week 20 task.

:::{activity} Optional Activity: Security Extension

If you would like extra practice, try this extension activity:

1. In the OCL click on the {guilabel}`26B TM252 Block 3 VCE` link.
2. Create a new Python file {guilabel}`secure_api.py`.
3. Add your name and date at the top as a comment.
4. Add a {guilabel}`/login` route that returns a JWT for a valid test user.
5. Add a {guilabel}`/get-account-details` route that requires a valid token.
6. Add clear error messages for missing and invalid tokens.
7. Test with short token expiry and observe what happens when a token expires.
8. Save your script for future reference.


:::
