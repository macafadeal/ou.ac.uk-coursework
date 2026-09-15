# Python Conditionals

Computer programs typically execute instructions in the order in which they are written. In some circumstances it is necessary to change the order of execution or not execute instructions at all. To do so we employ the use of conditional or branching statements.

Conditionals in Python are a way for your program to make decisions. They let you execute certain code only if a specific condition is true. This can be considered the same as asking a question which provided a true or false answer; does Python output text to the screen? Are you studying TM252? Is it raining today?

We can implement conditionals with the use of the {guilabel}`if` keyword. The {guilabel}`if` keyword presents Python with an opportunity to determine whether something is true or false. The typical use of this can be seen in the script example below.

:::{code-block}
x=5
if x > 4:
    print("x is greater than 4")
:::

:::{warning}
This is where the Python syntax becomes a little more complex. 

Take another look at the example use of the {guilabel}`if` statement here and you will notice there are a number of differences in this script to what we have previously seen.

The first point of note is the use of `:` at the end of the {guilabel}`if` instruction. This symbol is used to denote a code block in where we tell the interpreter that the next set of instructions should happen only if the condition is true.

The second thing you'll notice is the indentation of the following instructions found on the line after the {guilabel}`if` statement. Statement placement is important in Python as the
interpreter uses this to identify relationships between instructions; in this case, the {guilabel}`print()` statement is executed only if the result of the {guilabel}`if` statement is true.
:::

The use of the {guilabel}`if` statement presents us with a means of conditionally executing instructions but is often used in conjunction with another keyword; the {guilabel}`else` statement. The {guilabel}`else` keyword is an operator in Python that allows for specifying whether your script should execute one collection of instructions or another depending on whether a condition meets one criterion or another.

:::{code-block}
x=3
if x > 4:
    print("x is greater than 4")
else:
    print("x is less than or equal to 4")
:::

In the example script provided above we have changed the value of the variable and are now providing instructions to execute in the event that the condition is satisfied and a provision for if the condition is not met. It is important to note the indentation here with respect to statements that follow keywords as this denotes their relation to this construct.




:::{activity} Activity: Conditionals Practice

Go to the Module Website in a separate browser tab or window and from there access the OpenComputing Lab (OCL). You can find the link to access the OCL in the Resources section or in each week in the planner.


Having explored the ways in which conditionals may be employed, complete the following activity.

1. In the OCL click on the {guilabel}`26B TM252 Block 3 VCE` link.

2. Create a new Python file and name it {guilabel}`script_conditionals.py`

3. Add a comment to the file to indicate the name and date for the file

4. Add a statement to declare a variable called {guilabel}`secret` assigning this the value of {guilabel}`secretMessage`

5. Add a statement that creates another variable called {guilabel}`testValue` and give it an empty string value

6. Add a statement that requests input from the user requesting a password and assign this to the {guilabel}`testValue` variable

7. Add a conditional statement to compare the {guilabel}`testValue` and {guilabel}`secret` variable, if these match output {guilabel}`Access Granted`. If these values don't match provide your own error message and print this to the screen.

8.  Save the script for future reference
:::

