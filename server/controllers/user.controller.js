const User = require('../models/user.model');
// https://mongoosejs.com/docs/queries.html

// READ : ALL
module.exports.findAllUsers = (req, res) => {
    User.find()
        .then((allusers) => {
            res.json({ users: allusers })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong finding all USERS : ', error: err })
        });
}
 
// READ : ONE USER
module.exports.findUser = (req, res) => {
    console.log(req.params)
    User.findOne({ _id: req.params.id })
        .then(findOneUser => {
            res.json({ user: findOneUser })
        })
        .catch((err) => {
            res.json({ message: `Something went wrong finding one user ${req.params.id} : `, error: err })
        });}

// CREATE : ONE USER
module.exports.createUser = (req, res) => {
    User.create(req.body)
        .then(newUser => {
            res.json({ newuser: newUser })
        })
        .catch((err) => {
            res.status(400).json(err)
        });}
 
// UPDATE : ONE USER
module.exports.updateUser = (req, res) => {
    console.log(req.params)
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => {
            res.json({ user: updatedUser })
        })
        .catch((err) => {
            // res.json({ message: `Something went wrong deleting user ${req.params.id} : `, error: err })
            res.status(400).json(err)
        });}
 
// DELETE : ONE USER
module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: `Something went wrong deleting user ${req.params.id} : `, error: err })
        });}