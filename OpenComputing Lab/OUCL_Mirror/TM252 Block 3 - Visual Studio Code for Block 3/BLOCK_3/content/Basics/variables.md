# Python variables

Variables are editable areas of memory to which we can assign a label so that we may use their stored data later within a program. They are a fundamental concept in programming and are used in all languages for data storage and manipulation.

To create a variable in Python we simply need to state the name of the storage location, which creates the variable, and assign it a value.

:::{code-block} python
    task_name = "Update Database"  # String
    priority_level = 5             # Integer
    is_complete = False            # Boolean
:::

Python handles variables **dynamically**, which means we do not need to declare their type explicitly. Dynamic typing means that we do not need to let the computer know that we will store whole numbers, textual or raw byte-data in the specified location. In the following example, we have assigned the numeric value of 5 to the {guilabel}`priority_level` variable and then on the next line assigned the text (string) value of "5" to the {guilabel}`priority_level` variable.

:::{code-block} python
    priority_level = 5
    priority_level = "5"
:::

Whilst Python is dynamically typed it is possible to add "hints" to the interpreter relating to the type of information you may want to store in a variable with **type annotations**. 

An example of this can be seen below with the {guilabel}`priority_level` variable being declared with **integer** data type, the {guilabel}`task_name` variable being declared with a **string** data type and the {guilabel}`is_complete` variable with a **boolean** data type (remember that Booleans can have a value of either **True** or **False**).

:::{code-block} python
    priority_level: int = 5
    task_name: str = "Update Database"
    is_complete: bool = False
:::

There are a number of rules governing the names that may be used for variables. These typically preclude the specific formats and keywords from use as they would interfere with operations in Python.

For conciseness you may declare and assign multiple variables in one line of code. How you declare variables can often be determined by preference and style. Though some people may find this a more elegant solution it can sometimes lead to difficulty in determining where variables are initialised, especially when starting to learn the Python language.

:::{code-block} python
a, b, c = 1, 2, 3
:::

:::{warning} Naming Rules
1. Variable names must start with a letter (a–z, A–Z) or an underscore (_).
2. The rest of the name can include letters, numbers (0–9), and underscores.
3. Variable names are case-sensitive (`myVar` and `myvar` are different).
4. You cannot use Python's reserved keywords (e.g., **if**, **for**, **while**, **class** etc.) as variable names.
:::

To output the value of the data stored in a variable we can use a simple instruction in Python; the {guilabel}`print()` function. The {guilabel}`print()` function allows us to output something to the screen so that we can receive feedback from our script. This function can be used in the following way:

:::{code-block} python
    message="hello"
    messageLetters=5

    print("hello")
    
    print(message)
    print(messageLetters)
:::

Note how the print function may take a literal string and print this to the screen, or it may take the contents of a variable and print this to the screen in the same way.

To make a script more flexible we may need to input data whilst the programming is running. We can achieve this through the use of the {guilabel}`input()` function. The input function blocks the script from executing further instructions while it waits for the user to provide input. This is useful as it allows the input of data that may not be known before the program executes. An example of how this can be achieved is given below whereby we request input and assign this input value to a variable.

:::{code-block} python
    inputData=0    
    inputData = int(input("Please input a number between 0 and 9"))
    print(f"input value is {inputData}")
:::

:::{note} 
The above script introduces quite a number of new concepts including taking input from the user.
On the first line of this script, we see the {guilabel}`inputData` variable being declared and initialised with the number 0.

The second line of the script is a little more complicated. The first thing to note is that we are assigning a value to this variable with the use of the '=' operator.

On the right side of this statement, we have the {guilabel}`input()` function, only we have given it an argument much like we would have for the {guilabel}`print()` function. Providing this text to the function means that Python will print the text to the screen and wait for the input by the user.

The last important point here is that the {guilabel}`input()` function is enclosed within a set of brackets. When we enter data into the console it is done so in a text format. We cannot compare data of two different types and expect the Python to treat them the same. This is one instance where dynamic typing can cause issues. To ensure we can store data in the way we want, we sometimes need to convert the input to that data type; this is the purpose of the {guilabel}`int()` enclosing the input data that is assigned to the variable.
:::

:::{activity} Activity: Variable Practice

Go to the Module Website in a separate browser tab or window and from there access the OpenComputing Lab (OCL). You can find the link to access the OCL in the Resources section or in each week in the planner.


Having explored the ways in which variables may be declared and assigned, complete the following activity.

1. In the OCL click on the {guilabel}`26B TM252 Block 3 VCE` link.

2. Create a new Python file and name it {guilabel}`script_variables.py`

3. Add comment to the file to indicate the name and date

4. Create a variable with the name {guilabel}`oucu`

5. Assign the {guilabel}`oucu` variable the value of your OUCU (Your Open University Computer Username - this can be numeric or string)

6.  Create a variable to store your name as a string.

7.  Create a variable to store the length of time of this activity (30 mins), in hours, as a float.

8. Print the contents of each of the variables to the screen

9.  Save the script for future reference
:::




