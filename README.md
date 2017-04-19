# Friend Finder app using Node & Express Servers #
**Overview**

This app takes in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

![picture alt](./preview1.png?raw=true "Preview 1")
- - - -
**Structure**
```
friend_finder
 	- app
 		- data
 			- friends.js
 		- public
 			- home.html
 			- survey.html
 		- routing
 			- apiRoutes.js
 			- htmlRoutes.js
 	- node_modules
 	- package.json
 	- server.js
```
- - - -
* Survey consists of 10 customized questions. Each answer has a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
* **server.js** file requires the basic npm packages: express, and body-parser.
* **htmlRoutes.js** file includes two routes:
    1. GET Route to /survey which displays the survey page.
    2. Default USE route that leads to home.html which displays the home page.
* **apiRoutes.js** file contains two routes:
    1. GET route with the url /api/friends. This is used to display a JSON of all possible friends.
    2. POST route to /api/friends. This is used to handle incoming survey results. It is also be used to handle the compatibility logic.
* Data is saved as an array of objects as shown below:
```
 {
   "name":"Jimmy",
   "photo":"https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/10454965_10152182589818443_7164260930828854629_o.jpg?oh=3deea869f48e187af85c9f0e8be44e72&oe=590D947C",
   "scores":[
        "5",
        "4",
        "4",
        "3",
        "5",
        "4",
        "5",
        "4",
        "4",
        "5"
    ]
 }
 ```
 * User's most compatible friend is determined by the following calculation:
    * Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
    * Example:
        * User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
        * User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
        * Total Difference: 2 + 1 + 2 = 5
    * Use absolute value of the differences. Calculate both 5-3 and 3-5 as 2, and so on.
    * The closest match will be the user with the least amount of difference.
* Once the current user's most compatible match is determined, both name and picture will be displayed as a modal pop-up.

![picture alt](./preview2.png?raw=true "Preview 2")

