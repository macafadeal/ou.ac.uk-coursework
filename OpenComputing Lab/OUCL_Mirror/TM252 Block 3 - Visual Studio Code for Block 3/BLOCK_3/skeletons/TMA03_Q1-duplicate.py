import string
from flask import Flask, render_template_string, request, jsonify

app = Flask(__name__)

# Student Information
STUDENT_ID = "I1403822"
OUCU = "zu431719"

# =====================================================================
# b.i. Default Route (HTML Templating)
# =====================================================================
@app.route('/')
def index():
    html_content = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>TM252 Assignment</title>
    </head>
    <body>
        <h1>TM252 Web Technologies</h1>
        <p><strong>Assessment:</strong> TMA 03</p>
        <p><strong>Student ID:</strong> {STUDENT_ID}</p>
    </body>
    </html>
    """
    return render_template_string(html_content)

# =====================================================================
# b.ii. Student Identifier Route
# =====================================================================
@app.route(f'/{STUDENT_ID}')
def student_route_handler():
    return f"Student {STUDENT_ID} successfully accessed this endpoint."

# =====================================================================
# b.iii. Palindrome Checker Endpoint
# =====================================================================
@app.route('/palindrome_checker')
def palindrome_checker():
    user_input = request.args.get('input')
    
    # Validation: Check if missing or empty
    if not user_input or user_input.strip() == "":
        return jsonify({"error": "input parameter missing"}), 400
        
    # Clean the string: lowcase, remove spaces, remove punctuation
    cleaned = "".join(
        char.lower() for char in user_input 
        if char not in string.whitespace and char not in string.punctuation
    )
    
    # Check if empty after cleaning (e.g., input was just "!!!")
    if not cleaned:
        return jsonify({"error": "invalid input: contains no alphanumeric characters"}), 400

    # Palindrome Logic via string reversing
    is_palindrome = cleaned == cleaned[::-1]
    
    if is_palindrome:
        message = f"Yes, '{user_input}' is a palindrome"
    else:
        message = f"No, '{user_input}' is not a palindrome"
        
    return jsonify({
        "input": user_input,
        "is_palindrome": is_palindrome,
        "message": message
    })

# =====================================================================
# b.iv. Video Game Score Reward System
# =====================================================================
@app.route('/player_reward')
def player_reward():
    name = request.args.get('name')
    score_raw = request.args.get('score')
    
    # 1. Validation
    if not name or name.strip() == "":
        return jsonify({"error": "Player name is missing or empty"}), 400
        
    if score_raw is None:
        return jsonify({"error": "Score parameter is missing"}), 400
        
    try:
        score = int(score_raw)
    except ValueError:
        return jsonify({"error": "Score must be a valid integer"}), 400
        
    if score < 0 or score > 100:
        return jsonify({"error": "Score is outside 0–100 range"}), 400
        
    # 2. Calculate lives & determine tier
    if 90 <= score <= 100:
        lives = 5
        tier = "Expert"
    elif 70 <= score <= 89:
        lives = 4
        tier = "Intermediate"
    elif 50 <= score <= 69:
        lives = 3
        tier = "Average"
    elif 30 <= score <= 49:
        lives = 2
        tier = "Novice"
    elif 20 <= score <= 39:
        lives = 1
        tier = "Beginner"
    else:
        lives = 0
        tier = "Unranked"
        
    # 3. Construct response
    return jsonify({
        "player": name,
        "score": score,
        "lives_awarded": lives,
        "tier": tier,
        "message": f"Congratulations {name}! You scored {score} and earned {lives} lives!"
    })

# =====================================================================
# c.i. POST request with string manipulation
# =====================================================================
@app.route('/punchline', methods=['POST'])
def punchline():
    statement = request.form.get('statement')
    
    if not statement or statement.strip() == "":
        return "<h3>Error: Statement field cannot be empty.</h3>", 400
        
    # Replace both 's' and 'S' with 'a'
    modified_statement = statement.replace('s', 'a').replace('S', 'a')
    
    return f"<p>Because {statement} could become {modified_statement}</p>"

# =====================================================================
# c.ii. HTML form for joke/punchline input
# =====================================================================
@app.route('/joke_form')
def joke_form():
    form_html = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Programmer Joke Form</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 40px; background-color: #f4f4f9; }
            .form-container { max-width: 500px; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            h2 { color: #333; }
            label { font-weight: bold; display: block; margin-bottom: 10px; color: #555; }
            input[type="text"] { width: 100%; padding: 10px; margin-bottom: 20px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
            button { background-color: #0056b3; color: white; border: none; padding: 10px 15px; border-radius: 4px; cursor: pointer; font-size: 16px; }
            button:hover { background-color: #004085; }
        </style>
    </head>
    <body>
        <div class="form-container">
            <h2>Joke Punchline Generator</h2>
            <p>Please fill out the field below to see the punchline transformation.</p>
            <form action="/punchline" method="POST">
                <label for="statement">Why do programmers fear typos?</label>
                <input type="text" id="statement" name="statement" placeholder="e.g., String case sensitivity" required>
                <button type="submit">Submit</button>
            </form>
        </div>
    </body>
    </html>
    """
    return render_template_string(form_html)

# =====================================================================
# c.iii. Submit JSON route
# =====================================================================
@app.route('/submit_json', methods=['POST'])
def submit_json():
    data = request.get_json()
    
    if not data or "names" not in data or not isinstance(data["names"], list):
        return "Error: Invalid JSON payload structure. Must contain a 'names' list.", 400
        
    if len(data["names"]) == 0:
        return "Error: The list of names is empty.", 400
        
    first_name = data["names"][0]
    return f"First name in payload: {first_name}"


if __name__ == '__main__':
    # Running locally on http://127.0.0.1:5000/
    app.run(debug=True)