#This template has been created to accompany the Week-20 PHandling Parameters work on the VCE
#Note: The code in this template will not run without replacing the values surrounded by chevrons for
#      more appropriate values. You can use the material in the VCE for examples on how to do this.
#  This script can be executed using 'python3 ./skeletons/week_20_handling_parameters-skeleton.py' in the console
from flask import Flask, request

app = Flask(__name__)

@app.route('/') #provide a suitable endpoint name
def echo():
    <variable_to_hold_parameter1_value>= request.args.get('<parameter_one>', 'Unknown') #parameter one name is the name of the first variable sent in through the URL
    <variable_to_hold_parameter2_value> = request.args.get('<parameter_two>', 'Unknown')#parameter two name is the name of the second ariable sent in through the URL
    return f"{<variable_to_hold_parameter1_value>}, {<variable_to_hold_parameter2_value>}" #you may add suitable text to add meaning to this output

if __name__ == '__main__':
    app.run(debug=True)


# Remember to test this you will need to use your OCL URL followed by ?<parameter_one>=<value_1>&<parameter_two>=<value_2>