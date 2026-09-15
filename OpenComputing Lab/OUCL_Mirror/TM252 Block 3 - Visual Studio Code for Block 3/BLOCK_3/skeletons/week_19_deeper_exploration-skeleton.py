
#This template has been created to accompany the Week-19 Deeper Exploration work on the VCE
#Note: The code in this template will not run without replacing the values surrounded by chevrons for
#      more appropriate values. You can use the material in the VCE for examples on how to do this.
#  This script can be executed using 'python3 ./skeletons/week_19_deeper_exploration-skeleton.py' in the console


import queue # import includes functionality for using queues


###   Variable Scope   ###

#Define a function which takes two arguments 'a' and 'b'
def addnumbers(a,b):
    <use_suitable_variable_name>=0 #assign the value of 0 to a variable called '<use_suitable_variable_name>' This is a local scope variable
    <use_suitable_variable_name>=a+b
    print(<use_suitable_variable_name>)


#Attempt to print the value of this variable in the global scope
print(<use_suitable_variable_name>)  #This will fail even if the name is corrected. once you have tested this component, you will need to comment out or remove this line to continue



###  Lists  ###

<suitable_list_name> = [<value_1>, <value_2>, <value_3>]
<suitable_list_name>.append(<new_value>) # Adds 'new_value' to the list
print(<suitable_list_name>) # Outputs [<value_1>, <value_2>, <value_3>, <value_4>] 
print(<suitable_list_name>) # Outputs all the items in the list that have not been removed 
<suitable_list_name>.remove(<index_or_value_of_item_in_list>) # removes a value from the list


###   Queues  ###
<suitable_queue_name> = queue.Queue() #Assign an empty queue structure to the variable q
<suitable_queue_name>.put(<suitable_value_1>) # Adds 'suitable_value' to the queue 
print(<suitable_queue_name>.get()) # Outputs 'suitable_value_1' (removes suitable_value_1 from the queue) 
<suitable_queue_name>.put(<suitable_value_1>) # Adds 'suitable_value_2' to the queue 
print(<suitable_queue_name>.get()) # Outputs 'suitable_value_2' (removes suitable_value_1 from the queue) 

### Stacks  ###
suitable_stack_name = [] 
suitable_stack_name.append(<suitable_value_1>) # Pushes <suitable_value_1> onto the stack 
suitable_stack_name.append(<suitable_value_2>) # Pushes <<suitable_value_2>> onto the stack 
print(suitable_stack_name.pop()) # Outputs <suitable_value_1> (removes <suitable_value_1> from the stack) 
print(suitable_stack_name.pop()) # Outputs <suitable_value_2> (removes <suitable_value_2> from the stack) 

###   Ternary Operator   ###
<suitable_variable_name> = <suitable_value>
<suitable_output_variable_name> = <suitable_output_if_condition_met> if <suitable_variable_name> >= <suitable_threshold_value> else <suitable_output_if_condition_not_met>
print(<suitable_output_variable_name> )  # Outputs: <suitable_output_variable_name>'s value