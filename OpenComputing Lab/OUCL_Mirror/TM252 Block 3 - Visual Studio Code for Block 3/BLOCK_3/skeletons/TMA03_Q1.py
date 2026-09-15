"""
    TM252 TMA03 – Question 1 Parts b and c (26B)

    This file contains a minimal working example of a web application 
    using the Flask framework in Python.

    You are required to extend this example to demonstrate concepts 
    covered in Weeks 19–20 of the module.

    If you have completed the activities of Weeks 19-20, you should have included all necessary imports
    If you have not you will need to perform the following in the terminal

    pip install flask
    pip install requests

    To run this file you must copy the following file to a work folder in your VSCode terminal:

    BLOCK_3/skeletons/TMA03_Q1.py

"""

#Imports from flask here provide functionality for the Flask framework itself,request handling and JSON
#data handling
from flask import Flask, request, jsonify
#The datetime import here has been included to provide functionality for getting the current date and time (not required but optional)
import datetime
#The requests import has been included to provide functionality to perform requests inside functions
import requests 



#In this part you will implement some of the functionalities of a web application using the Flask framework. 
#This will incorporate some of the components outlined within (a)(i).  
#Information for this can be found in Week 20, Section 2 ‘A more flexible server’.  
#You have been provided with a minimal working Flask application in Python in the Open Computing Lab entitled TMA03_Q1.py.  



#Assign Flask instance to the app variable
app = Flask(__name__)


'''Q1_b(i): Modify the Flask application to render an HTML page instead of returning
   plain text on the default route; /. this page should contain the standard HTML structure and 
   a <h1> element with your student PI.
   You should include the OCL URL you use to test this endpoint in your solution document.
'''
#This creates the default route for the application and should be adjust as part of the question
@app.route('/')
def default():
    return ""

'''
    Q1_b(i): HTML templating and Module Information:
    Modify the Flask application to render an HTML page instead of returning plain text on the default route /. This page should include a standard HTML5 structure displays:
    a.	The module name: "TM252 Web Technologies" as heading level 1 <H1>
    b.	The current assessment: "TMA 03"
    c.	Your oucu (Open University Computer Username) 
    You should include the URL used for testing this endpoint in your solution document.
'''

'''
    Q1_b(ii): Student Identifier Route:
    Task: Add a Flask route with path /<your_student_id> where <your_student_id> is replaced with your actual student ID (e.g., /A12345678).

    Your implementation must:
    a.	 Define a clearly named function handler that matches the route endpoint
    b.	Return a response confirming the route was successfully handled
    c.	Include a personalised message that incorporates your student ID in the response. Example response: "Student A12345678 successfully accessed this endpoint."

    Testing: You should include the URL used for testing this endpoint in your solution document.

'''

'''
    Q1_b(iii): Palindrome Checker Endpoint
    Background: A palindrome is a word, phrase, or sequence that reads the same forwards and backwards (e.g., “racecar”, “level”, “noon”).
    Task: Create a new /palindrome_checker endpoint that:
    a.	Accepts a query parameter named input containing a text string
    b.	Implements palindrome logic using String manipulation (reversing the input) and Conditional statements (checking if input equals its reverse)
    c.	Iteration (if your approach requires it)
    d.	Returns a JSON text response with the following structure:

    {
    "input": "racecar",
    "is_palindrome": true,
    "message": "Yes, 'racecar' is a palindrome"
    }

    Requirements: 
    a.	Handle case-insensitivity (treat “Racecar” and “racecar” as the same) 
    b.	Remove spaces and punctuation before checking
    c.	Return appropriate error messages for empty or invalid input (e.g., “Error: input parameter missing”)

    Testing: Test with at least three different inputs (one true palindrome, one false, one edge case) 

    Submit all URLs used for testing in your solution document and include the JSON responses you received

'''


'''
    Q1_b(iv): Create a new endpoint /player_reward that accepts two query parameters:
    name (string) – The player’s name
    score (integer) – The player’s score

    Your endpoint must:
    1.	Validate input (handle errors gracefully):
        Return error if name is missing or empty
        Return error if score is not a valid integer
        Return error if score is outside 0-100 range
    2.	Calculate lives based on the score thresholds above
    3.	Return JSON with this structure:
        {
            "player": "Alice",
            "score": 85,
            "lives_awarded": 4,
            "tier": "Intermediate",
            "message": "Congratulations Alice! You scored 85 and earned 4 lives!"
        }

'''

'''
    Q1_c(i): Create a /punchline endpoint that accepts a POST request containing form data with a field named statement.
    You should include the OCL URL you use to test this endpoint in your solution document.
'''

'''
    Q1_c(ii): HTML form for joke/ punchline input
    Task: Create a /joke_form route that renders an HTML form with:

    1.	Form element that:

        Uses POST method
        An Action that points to the  /punchline endpoint
        Has a text input field with:
            name attribute = “statement”
            A descriptive label asking: “Why do programmers fear typos?”
        Has a Submit button labeled “Submit”
    2.	HTML structure:
    Use semantic HTML (<form>, <label>, <input>, <button>)
    Apply basic CSS styling for readability
    Include a page title and brief instruction

    You should include the OCL URL you use to test this endpoint in your solution document.
'''

'''
    Q1_c(iii).	Add a /submit_json route that receives a POST request containing JSON data with a list of names. The JSON for this is as follows: 
    {
    "names": [
    "Liam",
    "Emma",
    "Noah",
    "Ava"
    ]
    }
    Display the first name in the list of submitted names in the browser in response to the POST request.

    You should include the URL used for testing this endpoint in your solution document. 
'''



if __name__ == '__main__':
    app.run(debug=True)

