#This template has been created to accompany the Week-20 Request Handling (GET and POST) work on the VCE
#Note: The code in this template will not run without replacing the values surrounded by chevrons for
#      more appropriate values. You can use the material in the VCE for examples on how to do this.
#  This script can be executed using 'python3 ./skeletons/week_20_request_handling_get_and_post-skeleton.py' in the console

from flask import Flask, request
import requests # This has been used to perform a redirect to the POST URL here


app = Flask(__name__)

###   GET  ###
@app.route('/')  # Use a suitable endpoint name
def responseMessage(): 
    parameter1 = request.args.get('<suitable_input_parameter_name>', 'no message provided')  # Default is 'no message provided' if <suitable_input_parameter_name> is not provided
    print(f"{parameter1}!")  # This prints to the server console
    return f"Received: {parameter1}"  # Return a response to the client


###  POST  ###

#Visit this endpoint to display a form so that information can be entered and submitted. Please note that you will need ass your OCL ID here
@app.route('/test-contact')
def test_contact():
    return '''<html><head>
    <title>Test Post</title>
</head>
<body>
    <form action="https://jhub-tm252.ocl.open.ac.uk/user/<your OCL ID>/code-server/proxy/5000/contact" method="POST">
        <input type="text" name="name" placeholder="Your name">
        <textarea name="message" placeholder="Your message"></textarea>
        <button type="submit">Submit</button>
    </form>

</body></html>

'''

#This is used as another option to deal with CORS on the OCL - in this instance, the form option would be better as this permits 
#input from the user whereas this option is for demonstration only
@app.route('/test-redirect-contact', methods=['GET'])  # or POST, depending on use
def test_redirect_contact():
    post_url = 'http://localhost:5000/contact'
    sample_data = {
        "<suitable_parameter_1_name_taken_from_html_form>": "<suitable_value",
        "<suitable_parameter_2_name_taken_from_html_form>": "<suitable_value>"
    }
    try:
        response = requests.post(post_url, data=sample_data)
        return response.text 
    except requests.exceptions.RequestException as e:
        return f"error{str(e)}", 500



#post requests
@app.route('/contact', methods=['POST'])  #note the use of the POST in the mehods here
def contact(): 
    <parameter1> = request.form.get('<suitable_parameter_1_name_taken_from_html_form>', 'parameter one value') # if no parameter is passed, the default value is shown (you will need to replace <suitable_parameter_1_name_taken_from_html_form> with the name of the parameter used) (name) in the above
    <parameter2> = request.form.get('<suitable_parameter_2_name_taken_from_html_form>', 'parameter two value') #(you will need to replace <suitable_parameter_2_name_taken_from_html_form> with the name of the parameter used) (message) in the above
    return f"Received message from {<parameter1>}: {<parameter2>}"



if __name__ == '__main__':
    app.run(debug=True)




