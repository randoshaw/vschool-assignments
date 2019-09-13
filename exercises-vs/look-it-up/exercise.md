Link to this exercise:
https://coursework.vschool.io/look-it-up/

Look It Up!
04 JUNE 2015 on Warmup, Problem Solving, Programming Principles, Level 2
Using the readline-sync package, write a program that allows a user to create their own dictionary.

When the program starts, a menu should display asking the user which of the following they would like to do:

Insert a word and its definition
Look up an existing word's definition
Quit
The words and definitions will be stored as a single JavaScript dictionary object, where the properties are the words and the values are the definitions.

Completing this will require the use of object square bracket notation, which you can learn more about from the MDN page on Working With Objects

Requirements:
Create a menu system with readline-sync that loops forever until a user chooses the "Quit" option
Create 2 functions to complete the first 2 options from the menu (addWord and lookUpWord).
For unit testing reasons, both of these functions will take the dictionary object as a parameter. Check the repository starter code for the stubbed functions.

Do not allow duplicate words to be saved (not case sensitive).
Keep the user in the main loop (send them back to the menu after each action is complete) until they choose the "Quit" option