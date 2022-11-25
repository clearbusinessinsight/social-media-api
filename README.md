# Social Media API 👋

![badge](https://img.shields.io/badge/license-Open-brightgreen)
<br />
This application is covered by the Open license. 

## Table of Contents
- [Description](#project-description)
- [Installation](#installation-instructions)
- [Videos](#videos)
- [Functionality](#functionality)
- [Technologies](#technologies)
- [License](#license)
- [Credits](#credits)
- [Author](#author)
- [Questions](#questions)


## Project Description
This is an API for a Social Network application for users to share their thoughts, react to their friends thoughts and create a friends list.  
The app uses MongoDB for the database.

![MongoDB](./assets/MongoDB%20Database.png )

Express.js for routing, Mongoose ODM, and Javascript.  
Insomnia is used to create the seed data and test the functionality of the code.  

![Insomnia](./assets/Get%20All%20Users.png)

The application files can be access at https://github.com/clearbusinessinsight/social-media-api

## Installation Instructions
* 💾 npm i to install the Node Modules
* Start Insomnia
* Start Mongo Compass
* npm start

## Videos
![Social Media API Explained](https://youtu.be/QnutlxEFARI)

## Functionality
API Routes
The following API routes have been created and used to add, update, or remove users, friends, thoughts, and reactions in the user's database.

📁 USER
* Create a new user: POST /api/users
![Create User](./assets/Create%20a%20User.png)

* Get all users: GET /api/users
![Get all users](./assets/Get%20All%20Users.png)

* Get a single user by its id: GET /api/users/:userId
![Get Single User by id](./assets/Get%20User%20by%20id.png)

* Update a user by its id: PUT /api/users/:userId
![Update User by id](./assets/Update%20User%20by%20id.png)

* Delete a user by its id: DEL /api/user/:userId
![Delete User by id](./assets/Delete%20user%20by%20id.png)


📁 FRIEND
* Add a new friend to a user's friend list: POST /api/users/:userid/friends/:friendId
![Add Friend](./assets/Add%20a%20Friend.png)

* Delete a friend from a user's friend list: DEL /api/users/:userid/friends/:friendId
![Delete Friend](./assets/Delete%20a%20Friend.png)


📁 THOUGHT
* Create a new thought: POST /api/thoughts/
![Create a thought](./assets/Create%20a%20New%20Thought.png)

* Get all thoughts by user id: GET /api/thoughts/
![Get all Thoughts by user id](./assets/Get%20all%20Thoughts%20by%20id.png)

* Update a thought by its id: PUT /api/thoughts/:thoughtId
![Update thought by its id](./assets/Update%20Thought%20by%20id.png)

* Delete a thought by its id: DEL /api/thoughts/:thoughtId
![Delete a thought by its id](./assets/Update%20Thought%20by%20id.png)


📁 REACTION
* Create a reaction: POST /api/thoughts/:thoughtId/reactions
![Create a Reaction](./assets/Create%20a%20Reaction%20to%20a%20Thought.png)

* Delete a reaction by the reactionId: DEL /api/thoughts/:thoughtId/reactions/:reactionId
![Delete a Reaction](./assets/Delete%20Reaction%20by%20id.png)

## Technologies
* JavaScript
* Node.js
* Express.js
* MongoDB
* Mongoose
* Insomnia

## License
![badge](https://img.shields.io/badge/license-Open-brightgreen)

This application is covered by the Open license. 

## Credits
The following resources were used in the developement of this application.
* OSU Boot Camp study materials and resources.
* Google search and 10 dozen search result
* GitHub 
* Insomnia

## Author
Chris Holtz
Email choltz@cacbydesign.com to suggest an edit.

## Questions

* Chris Holtz
* ✉️ Email: choltz@cacbydesign.com
* GitHub Username: choltz@cacbydesign.com
* GitHub Proafile: https://github.com/cholts@cacbydesign.com


