# Week 19 - Further Exploration

:::{note}
This page is optional enrichment material.

It is not required to complete the core Week 19 activities.
:::

## Variable Scope

When discussing variables, we noted that they were locations where we could store data. We talked about dynamic typing of variables, and how we can use type hints to suggest the data types we intend to store in variables. Type hints are for developers and tools, not for the Python interpreter. We did not, however, discuss the concept of variable scope.

A variable's scope is the context in which a variable is assigned data and accessed within your script. In our previous scripts, we have created variables, assigned data to them, and then used that data later in the script. The vast majority of this creation and assignment has been done in what we would call global scope. The term global scope is used to refer to the fact that a variable is accessible by the whole script.

Sometimes, we only need a variable to be accessible within a limited section of the script. Variables created within a function have local scope. They only exist and can only be referred to within that function, and are destroyed when the function ends.

:::{code-block} python
def add_numbers(a, b):
    result = a + b
    print(result)  # This line works

print(result)  # This line generates an error
:::

This code declares a function called add_numbers using the keyword def. The function has two arguments, a and b. These are pieces of data that will be passed into the function. The function adds these two values together, assigns it to the variable result, and prints this result. This function works correctly and prints the answer to the screen as you'd expect. However, the last line of the example does not work. The variable result is created with local scope inside the function, so any attempt to refer to that variable outside the function will generate an error.

:::{code-block} bash
Traceback (most recent call last):
    File "/home/ou/TM252-26B/block_3/work/week-19/test.py", line 6, in &lt;module&gt;
    print(result)
          ^^^^^^
NameError: name 'result' is not defined
:::

## Advanced Data Structures

Arrays, queues, and stacks are all data structures used to store collections of elements, but they differ in how they manage and access those elements. A queue follows the FIFO (First In, First Out) principle, where elements are processed in the order they are added, making it ideal for managing tasks or requests in the order of arrival. A stack, on the other hand, follows the LIFO (Last In, First Out) principle, where the most recently added element is the first to be processed, commonly used for undo operations or backtracking.

Before moving on to queues and stacks, here is a quick reminder of list deletion approaches:

:::{code-block} python
my_list = ["horse", "iguana", "cat"]
my_list.remove("iguana")  # Removes by value
print(my_list)             # Outputs ["horse", "cat"]

my_list.pop(0)             # Removes by index position
print(my_list)             # Outputs ["cat"]
:::

A queue is a data structure that follows the FIFO (First In, First Out) principle. The first element added to the queue will be the first one to be removed. Queues are often used in situations where tasks need to be processed in the order they arrive (such as handling requests in a web server).

Python's Queue class can be used to implement a queue.

:::{code-block} python
from queue import Queue  # Imports Queue so we can create FIFO queues

q = Queue()
q.put(1)  # Adds 1 to the queue
q.put(2)  # Adds 2 to the queue
print(q.get())  # Outputs 1 (removes 1 from the queue)
print(q.get())  # Outputs 2 (removes 2 from the queue)
:::

Using a queue ensures that elements are processed in the order they were added, making it a useful structure for tasks like managing print jobs, processing orders, or handling concurrency.

A stack is a data structure that follows the LIFO (Last In, First Out) principle. The last element added to the stack will be the first one to be removed. Stacks are typically used in scenarios where you need to "undo" operations or navigate through previous states (e.g., browser history).

Python lists are commonly used to implement stacks with the append() and pop() methods.

:::{code-block} python
stack = []
stack.append(1)  # Pushes 1 onto the stack
stack.append(2)  # Pushes 2 onto the stack
print(stack.pop())  # Outputs 2 (removes 2 from the stack)
print(stack.pop())  # Outputs 1 (removes 1 from the stack)
:::

Stacks are ideal when you need to keep track of elements in reverse order or process items in a last in first out manner.

## Ternary Operator

### What is a Ternary Operator?

We have previously discussed conditionals and their use within our script to direct the flow of execution. In some cases, the use of consecutively nested conditionals can prove to be a little cumbersome and sometimes difficult to read. It is possible to condense some of these conditionals using a ternary operator.
A **ternary operator** is a shorthand conditional expression that allows you to assign a value based on a condition in a single line of code. It’s a compact way to write an {guilabel}`if-else` statement.

### Why Use the Ternary Operator?

Ternary operators are used when you need to choose between two values based on a condition but want to keep the code compact and readable. They can make your code more concise and easier to follow, especially for simple conditional logic. Ternary operators are typically used in situations like assigning values based on conditions, returning results from functions, or in list comprehensions.

In Python, the syntax for a ternary operator is:

```python
value_if_true if condition else value_if_false
```

### Example Usage in Python

Before using a ternary operator, the same logic is often written like this:

:::{code} python
age = 20
if age >= 18:
    status = "Adult"
else:
    status = "Minor"
print(status)
:::

Using a ternary operator, we can write the same logic more compactly:

:::{code} python
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)  # Outputs: "Adult"
:::

### Benefits of Ternary Operators

- Concise syntax. They allow you to express conditional logic in a single line, making code shorter and easier to read for simple conditions.
- Improved readability. When used correctly, they can enhance readability by reducing the verbosity of traditional if-else statements.
- Cleaner code. Ternary operators help avoid unnecessary lines of code, particularly when you are performing simple conditional assignments.

### Drawbacks of Ternary Operators

- Reduced readability for complex conditions. For more complex logic, ternary operators can make code harder to understand, especially for new developers or when nesting multiple operators.
- Limited use cases. Ternary operators are best suited for simple, clear conditional logic. They should be avoided for more complex flows that require multiple actions.
- Potential for overuse. If overused or used inappropriately, ternary operators can make code less readable, defeating their purpose of simplification.

:::{warning}
While it is technically possible to substitute almost all conditional statements to use this approach, it can make the code difficult to read. Using standard approaches to conditionals is far more readable as it is far clearer what condition is being evaluated.
:::

::: {activity} Exploring Variable Scope, Data Structures, and Ternary Operators

Having explored the concepts of variable scope, data structures, and ternary operators, complete the following activity.

1. Go to the Module Website in a separate browser tab or window and access the OpenComputing Lab (OCL). You can find the link to access the OCL in the Resources section or in each week in the planner.
2. In the OCL, click on the {guilabel}`26B TM252 Block 3 VCE` link.
3. Create a document and name it {guilabel}`scope_and_structures.py`.
4. Save the document {guilabel}`scope_and_structures.py` and add a comment indicating your name and the date.
5. Define a function called {guilabel}`calculate_sum` that takes two arguments, adds them together, and prints the result.
6. Call {guilabel}`calculate_sum(5, 7)`, then add {guilabel}`print(result)` outside the function to observe the scope error.
7. Implement a stack using a list: add {guilabel}`"red"`, {guilabel}`"green"`, and {guilabel}`"blue"`; then remove one item with {guilabel}`pop()` and print both the removed item and the remaining stack.
8. Implement a queue using Python's {guilabel}`Queue` class: add {guilabel}`"task1"`, {guilabel}`"task2"`, and {guilabel}`"task3"`; then remove two items with {guilabel}`get()` and print them.
9. Use a ternary operator to print one of two messages, for example: {guilabel}`"Adult"` if {guilabel}`age >= 18`, otherwise {guilabel}`"Minor"`.
10. Extension: after the two-message version works, adapt your logic to print three categories (for example {guilabel}`"Child"`, {guilabel}`"Teen"`, {guilabel}`"Adult"`) using either nested ternary logic or an {guilabel}`if/elif/else` structure.
11. Run the script and verify your output.
12. Save the script for future reference.

:::
