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
      
    createUser(req, res) {
        User.findOne({
            $or: [{
                email: req.body.email
            }, {
                username: req.body.username
                }]
        }).then(user => {
            if (user) {
                let errors = {};
                if (user.username === req.body.username) {
                    errors.username = "User Name already exists!";
                }
                else {
                    if (user.email === req.body.email) {
                        errors.email = "Email already exist!";
                    }
                    return res.status(400).json(errors);
                }
                return res.status(400).json(errors);
            } else {
                User.create(req.body)
                                        
                        .then((dbUserData) => {
                            res.json(dbUserData);
                        })
                        .catch((err) => {
                            console.log(err);
                            res.status(600).json(err);
                        });
                }
            })
            .catch(err => {
                return res.status(500).json({
                    error: err
                });
            });
        
    },


    // Put (Update) a user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            {
                $set: req.body,
            },
            {
                runValidators: true,
                new: true,
            }
        )
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
    
    //  Delete a user  Then as a bosus delete anything associated with that user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: "No user with this id!" });
                }
                
        // Get ids of user's thoughts and delete them as well
                return Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
            })
            .then(() => {
                res.json({ message: "User and associated thoughts deleted!" });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    
    // Post (add) a friend to a friend list
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        )
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
    
    // Delete a friend from the friend list
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        )
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
};
    

module.exports = userController;
