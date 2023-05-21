const CseUsers = require('../models/cseuser.model');
// https://mongoosejs.com/docs/queries.html

// READ : ALL
module.exports.findAllCseUsers = (req, res) => {
    CseUsers.find()
        .then((allcseusers) => {
            res.json({ cseusers: allcseusers })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong finding all CSE USERS : ', error: err })
        });
}
 
// READ : ONE CSE USER
module.exports.findCseUser = (req, res) => {
    // console.log(req.params)
    CseUsers.findOne({ _id: req.params.id })
        .then(findOneCseUser => {
            res.json({ cseuser: findOneCseUser })
        })
        .catch((err) => {
            res.json({ message: `Something went wrong finding one cse user ${req.params.id} : `, error: err })
        });}

// CREATE : ONE CSE USER
module.exports.createCseUser = (req, res) => {
    CseUsers.create(req.body)
        .then(newCseUser => {
            res.json({ newcseuser: newCseUser })
        })
        .catch((err) => {
            res.status(400).json(err)
        });}
 
// UPDATE : ONE CSE USER
module.exports.updateCseUser = (req, res) => {
    // console.log(req.params)
    CseUsers.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => {
            res.json({ cseuser: updatedUser })
        })
        .catch((err) => {
            // res.json({ message: `Something went wrong deleting cse user ${req.params.id} : `, error: err })
            res.status(400).json(err)
        });}
 
// DELETE : ONE CSE USER
module.exports.deleteCseUser = (req, res) => {
    CseUsers.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: `Something went wrong deleting cse user ${req.params.id} : `, error: err })
        });}
