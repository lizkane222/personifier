const ProfilePhoto = require('../models/profilephoto.model');
// https://mongoosejs.com/docs/queries.html

// READ : ALL PROFILE PHOTOS
module.exports.findAllProfilePhotos = (req, res) => {
    ProfilePhoto.find()
        .then((allProfilePhotos) => {
            res.json({ profilephotos: allProfilePhotos })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong finding all profile photos : ', error: err })
        });
}
 
// READ : ONE PROFILE PHOTO
module.exports.findProfilePhoto = (req, res) => {
    // console.log(req.params)
    ProfilePhoto.findOne({ _id: req.params.id })
        .then(findOneProfilePhoto => {
            res.json({ profilephoto: findOneProfilePhoto })
        })
        .catch((err) => {
            res.json({ message: `Something went wrong finding one profile photos ${req.params.id} : `, error: err })
        });}

// CREATE : ONE PROFILE PHOTO
module.exports.createProfilePhoto = (req, res) => {
    ProfilePhoto.create(req.body)
        .then(newProfilePhoto => {
            res.json({ profilephoto: newProfilePhoto })
        })
        .catch((err) => {
            res.status(400).json(err)
        });}
 
// UPDATE : ONE PROFILE PHOTO
module.exports.updateProfilePhoto = (req, res) => {
    // console.log(req.params)
    ProfilePhoto.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProfilePhoto => {
            res.json({ profilephoto: updatedProfilePhoto })
        })
        .catch((err) => {
            // res.json({ message: `Something went wrong deleting profile photo ${req.params.id} : `, error: err })
            res.status(400).json(err)
        });}
 
// DELETE : ONE PROFILE PHOTO
module.exports.deleteProfilePhoto = (req, res) => {
    ProfilePhoto.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: `Something went wrong deleting profile photo ${req.params.id} : `, error: err })
        });}
