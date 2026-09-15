#This template has been created to accompany the Week-20 Introduction to Flask work on the VCE
#Note: The code in this template will not run without replacing the values surrounded by chevrons for
#      more appropriate values. You can use the material in the VCE for examples on how to do this.
#  This script can be executed using 'python3 ./skeletons/week_20_introduction_to_flask-skeleton.py' in the console

from flask import Flask #import the Flask module

app = Flask(__name__)

@app.route('/') #add a reachable endpint ('/' is the default endpoint)
def home():
    return <return_a_suitable_string_response>    #this will be the content returned when visiting this endpoint

if __name__ == '__main__':
    app.run(debug=True)