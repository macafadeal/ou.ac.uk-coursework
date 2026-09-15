# Python Data Structures

Sometimes it is necessary to store data elements in addition to the relationship it has with other components of data. Whilst the use of variables is beneficial to store individual values, it is also possible to store values in a way that denotes relationships between them through the use of simple data structures like arrays.

An array can be considered a contiguous block of memory that we declare and assign values to in a similar way to that seen with variables.

In Python, arrays are commonly represented using lists or the array module. Arrays are used to store multiple values in a single variable, making it easier to organize and work with large amounts of data.

:::{note} 
Key Features of Arrays:
1. **Ordered** - Items in an array have a specific order.
2. **Indexing** - Each item can be accessed using its position, starting from index 0.
3. **Mutable** - The values in an array can be changed.
:::

To use a list as an array in python, we can declare this by first providing the label name we wish to give to this storage location, much like we did with variables, followed by the values we want to store there. This is slightly different to variable assignment as we now have the concept of indexes within the storage location.

:::{code-block}
animals = ["horse", "iguana", "cat"]
:::

This statement creates a large storage location that we have placed the values {guilabel}`horse`, {guilabel}`iguana` and {guilabel}`cat` into. When we want to retrieve this data we need to tell the script what part of the memory location to get a value from. This is achieved by providing the index within the location we wish to fetch data from. 

:::{code-block} python
animals = ["horse", "iguana", "cat"]
print(animals[1])
:::

Using the same {guilabel}`print()` function as we used in out variable examples, we can output the value stored in a particular part of the array by providing the index number of the item. The output to the above code would be {guilabel}`iguana` as a result of providing the index 1.

In most contexts, computers store information using a 0-based numbering system, meaning that the first number in a sequence will be 0, therefore the first location of the array will be element 0. If we wanted to output the second element in the array, we would use the number 1 and increment this for consecutive values.

We can also change the values stored in any index of the array by treating it like an individual variable where we also provide the index. This means that in the same way as we have changed the value of variables, we can use a very similar syntax to perform the same function on an array value; this is shown in the below code.

:::{code-block} python
animals = ["horse", "iguana", "cat"]
print(animals[1])
animals[1] = "lemur"
print(animals[1])
:::

The first {guilabel}`print` statement for this script will output the word {guilabel}`iguana` whereas the second print statement will output the word {guilabel}`lemur` following the amendment. 

we can add items to the array using an inbuilt function of the Python programming language; {guilabel}`append()`. The {guilabel}`append()` function allows for the addition of an item to the array and is placed immediately after the last item already contained within the list. The usage of this function can be seen below where {guilabel}`fish` is added to the list.

:::{code-block} python
animals = ["horse", "iguana", "cat"]
animals.append("fish")
:::

Note that the {guilabel}`append()` function is a function of the array itself. This means that the movement is handled by the storage location and not something that needs to be managed by yourself. This is a beneficial abstraction of Python that makes many operations far more accessible than other languages. We can now access the array at the new index to output the new value we have added.

A similar operation to the {guilabel}`append()` function may be used to remove an element from the array in the form of the {guilabel}`remove` function. There is one caveat here in that when using this function, we do so by specifying the value of the item we wish to remove and not the index. To remove items by index we would use the {guilabel}`del` function; both of which can be observed below.

:::{code-block} python
animals = ["horse", "iguana", "cat"]
animals.append("fish")
animals.remove("horse")
del animals[1]
:::

To determine the output of this script we need to consider the operations being executed here. The first instruction declares and initialises the array with 3 values. The second instruction adds the element {guilabel}`fish` to the array. The third instruction removes the element {guilabel}`horse` from the array leaving {guilabel}`iguana`,{guilabel}`cat` and {guilabel}`fish`. When we attempt to remove the element at index of 1 with the {guilabel}`del` function, this means we then lose the {guilabel}`cat` element, leaving us with two remaining data elements; {guilabel}`iguana` and {guilabel}`fish`.

:::{activity} Activity: Array Practice

Go to the Module Website in a separate browser tab or window and from there access the OpenComputing Lab (OCL). You can find the link to access the OCL in the Resources section or in each week in the planner.


Having explored the ways in which common data structures may be declared and assigned, complete the following activity.

1. In the OCL click on the {guilabel}`26B TM252 Block 3 VCE` link.

2. Create a new Python file and name it {guilabel}`script_data_structures.py`

3. Add a comment to the file to indicate the name and date for the file

4. Create an Array with a list of fruits for its initial value (["apple", "banana", "cherry", "date"]).

5. Add "orange" to the basket using the ‘append()’ method.

6. Print the name of the second fruit in the list.

7. Replace "banana" with "blueberry".

8. Print the contents of each of the variables to the screen

9.  Save the script for future reference
:::

