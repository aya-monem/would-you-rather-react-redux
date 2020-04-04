# Would You Rather Project

The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules. the application is easy to install and start. It requires only
## installation 

  The project uses Node.js and the Create-React-App starter. If you do not have Node , you can download it here: [Node.js](https://nodejs.org/en/)

  Once Node is installed, navigate to the directory where you want to store the app
    // using terminal
        npm install
        npm start

A new browser window should automatically open displaying the app. If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser

Data
There are two types of objects stored in our database:

( Users & Questions )
 
# Users include:

Attribute	Type	Description
id =>	String :	The user’s unique identifier
name =>	String :	The user’s first name and last name
avatarURL =>	String	: The path to the image file
questions  =>	Array: A list of ids of the polling questions this user created
answers	=> Object :	The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either 'optionOne' or 'optionTwo' since each question has two options.
 # Questions include:

Attribute	Type	Description
id =>	String :	The question’s unique identifier
author => String :	The author’s unique identifier
timestamp => String :	The time when the question was created
optionOne =>	Object :	The first voting option
optionTwo =>	Object :	The second voting option
Voting Options are attached to questions. They include:

Attribute	Type	Description
votes =>	Array :	A list that contains the id of each user who voted for that option
text =>	String:	The text of the option

# how to get the data from data base 
using 4 methods 

_getUsers()
_getQuestions()
_saveQuestion(question)
_saveQuestionAnswer(object)

 # _getUsers() Method
Description: Get all of the existing users from the database.
Return Value: Object where the key is the user’s id and the value is the user object.

#  _getQuestions() Method
Description: Get all of the existing questions from the database.
Return Value: Object where the key is the question’s id and the value is the question object.

#  _saveQuestion(question) Method
Description: Save the polling question in the database.
Parameters: Object that includes the following properties: author, optionOneText, and optionTwoText. More details about these properties:

Attribute	Type	Description
author =>	String :	The id of the user who posted the question
optionOneText =>	String	: The text of the first option
optionTwoText =>	String : The text of the second option

Return Value: An object that has the following properties: id, author, optionOne, optionTwo, timestamp. More details about these properties:

Attribute	Type	Description
id =>	String :	The id of the question that was posted
author =>	String :	The id of the user who posted the question
optionOne =>	Object :	The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option
optionTwo =>	Object :The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option
timestamp =>	String :	The time when the question was created


 #  _saveQuestionAnswer(object) Method
Description: Save the answer to a particular polling question in the database. Parameters: Object that contains the following properties: authedUser, qid, and answer. More details about these properties:

Attribute	Type	Description
authedUser =>	String : The id of the user who answered the question
qid	=> String : 	The id of the question that was answered
answer => 	String : The option the user selected. The value should be either "optionOne" or "optionTwo"
