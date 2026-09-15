#This template has been created to accompany the Week-20 Implementing an Echo Server work on the VCE
#Note: The code in this template will not run without replacing the values surrounded by chevrons for
#      more appropriate values. You can use the material in the VCE for examples on how to do this.
#  This script can be executed using 'python3 ./skeletons/week_20_implementing_an_echo_server-skeleton.py' in the console


from flask import Flask, request #import the extra functionality from request to handle requests

app = Flask(__name__)


@app.route('/') # add reachable endpoint
def echo():
    <suitable_variable_name> = request.args.get('<suitable_parameter_name>', '<error message if not found>') #you will need to change these values <parameter name should be the parameter sent through URL
    return f"You said: {<suitable_variable_name>}" #here {<suitable_variable_name>} is the variable value assigned from the sent in data
    #Note the use of the 'f' in the above string, this allows us to use the variable <suitable_variable_name> in the string without having to concatenate multiple parts
    

if __name__ == '__main__':
    app.run(debug=True)