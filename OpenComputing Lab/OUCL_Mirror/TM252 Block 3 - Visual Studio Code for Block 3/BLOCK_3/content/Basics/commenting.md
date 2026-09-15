# Commenting in Python

Programming instructions are written in languages that can be understood by a computer when coupled with development tools and the right environment. These same instructions are not always quite so readily understood by software developers, sometimes even the author of the collection of instructions if enough time has passed.

Fortunately, to counter this problem, most programming languages allow for the addition of commentary for the instructions included within a source file. The Python programming language is no exception to this, offering many options when including notes about the intention of the code.

Comments are used to explain what your code is doing, making it easier to understand for both you and others. Comments are not executed by Python—they're just there for humans. They are very helpful for debugging, collaboration, and improving code readability.

## Types of Comments in Python

### Single-Line Comments
These comments are written on a single line and start with the # symbol.
Everything after the # is considered a comment and is ignored by Python.

:::{code-block} python
    # This is a single-line comment
    a = 5 # This is an in-line comment
:::

### Multi-Line Comments

You can use multi-line comments to explain things that take more than one line.

You have two options for multi-line comments:
    Using multiple # symbols, one for each line.
    Using triple quotes (''' or """) for a block of text. While this is technically used for docstrings, it can also serve as a comment.

:::{code-block} python
    # This is a multi-line comment
    # that explains something important
    # over several lines.
:::

:::{code-block} python
    '''
    This is a multi-line comment
    that uses triple quotes.
    It can span across many lines.
    '''
:::

You can comment out parts of the code to test changes without deleting them. This can often help with debugging your code, omitting execution whilst retaining the instructions. This approach can sometimes lead to issues where code is mis-interpreted by the interpreter so should be used carefully.

:::{code-block} python
    '''
    a=5
    print(a)
    '''
:::

::::{activity} Activity: Create a python script file with commentary
Go to the Module Website in a separate browser tab or window and from there access the OpenComputing Lab (OCL). You can find the link to access the OCL in the Resources section or in each week in the planner.

1. In the OCL click on the {guilabel}`26B TM252 Block 3 VCE` link.

2. Create a new Python file and name it {guilabel}`script_comments.py`

3. Add a single-line comment to the script to indicate the file name

4. Add a multi-line comment to show your OUCU and the module name and presentation through a series of single lines

5. Add a multi-line comment to this file using the mult-line syntax that indicates the reason you have chosen to study this module

6. Save this script for later reference
:::