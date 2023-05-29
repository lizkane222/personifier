const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "First name must be at least 2 characters long"],
        maxlength: [30, "First name must be at less than 30 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [2, "Last name must be at least 2 characters long"],
        maxlength: [30, "Last name must be at less than 30 characters long"]
    },
    email: {
        type: String,
        required: [true, "Email name is required"],
        minlength: [10, "Email name must be at least 10 characters long"]
    },
    username: {
        type: String,
        required: [false, "Username is required"],
        minlength: [5, "Username must be at least 10 characters long"]
    },
    phoneNumber : {
        type: String,
        required: [false, "Phone number is not required"]
    },
    profilePhoto : {
        type: String,
        required: [false, "Profile Photo is not required"]
    },
    anonymousId: {
        type: [Schema.Types.Mixed],
        required: [false, 'anonymousId is not required']
    },
    userId: {
        type: String,
        required: [false, 'userId is not required']
    },
    profilePhoto : {
        type: String,
        required: [false, 'profilePhoto is not required']
    },
    traits: {
        type: [Schema.Types.Mixed],
        required: [false, 'traits is not required']
    },
    segmenters : {
        type: [String],
        required: [false, 'segmenters is not required']
    }
}, {timestamps:true});
 
const User = mongoose.model('User', UserSchema);
 
module.exports = User;