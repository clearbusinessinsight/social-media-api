// This is for the user routes

const { User, Thought } = require("../models");
const userController = {
    // Get all users
    getUsers(req, res) {
        User.find()
            .select("-__v")
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    
    // Get Single user by id
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select("-__v")
            .populate("friends")
            .populate("thoughts")
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: "No user with this id!" });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    

    // Post a new user

    // Put (Update) a user

    //  Delete a user  Then as a bosus delete anything associated with that user

    // Post (add) a friend to a friend list

    // Delete a friend from the friend list

};