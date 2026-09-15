#This template has been created to accompany the Week-20 Handling Complex Data with JSON work on the VCE
#Note: The code in this template will not run without replacing the values surrounded by chevrons for
#      more appropriate values. You can use the material in the VCE for examples on how to do this.
#  This script can be executed using 'python3 ./skeletons/week_20_handling_complex_data_with_JSON-skeleton.py' in the console


from flask import Flask, request, jsonify #Jsonify import included to handle conversion of data into the JSON format
import datetime
import requests # requests inport included for managing the redirect here


app = Flask(__name__)

@app.route('/<suitable_endpoint>', methods=['POST'])  #provide a suitable endpoint name
def <suitable_endpoint_function_name>(): #provide a suitable function name to handle the endpoint

    data = request.get_json()
    # Extract name and pid from the data
    name = data.get('name', 'Guest') #default to guest if no name is provided
    pid = data.get('pid', 'Unknown')
    return jsonify(f"Profile received for {name}, PID: {pid}")

#function used to call the '/profile' endpoint for testing, placeholder data is included in the post
# The placeholder data is in JSON format and is passed to the request. The response is also converted to 
#JSON using the jsonify() function. This is then displayed in the browser.
@app.route('/test-<suitable_endpoint>', methods=['GET']) #here it would be sensible to replace <suitable_endpoint> with the name of the endpoint above
def test_<suitable_endpoint>(): #here it would be sensible to replace <suitable_endpoint> with the name of the endpoint above
     # Make an actual POST request to endpoint
    post_url = 'http://localhost:5000/<suitable_endpoint>'
    # the use of json format data in this POST request is the key component here
    #This data is that used in the example on the VCE - you may change the data here to something more relevant to your endpoint
    sample_data = {"name": "testuser","pid":"Z1111111"}
    try:
        response = requests.post(post_url, json=sample_data)
        return jsonify(response.json()) #returns the response from the post request
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500 #returns an error if the request fails

if __name__ == '__main__':
    app.run(debug=True)