const mongoose = require('mongoose');
 
const ProfilePhotoSchema = new mongoose.Schema({
    alt_description: {
        type: String,
        required: [false, "alt_description is required"]
    },
    blur_hash: {
        type: String,
        required: [false, "Last name is required"],
        minlength: [2, "Last name must be at least 2 characters long"],
        maxlength: [30, "Last name must be at less than 30 characters long"]
    },
    color: {
        type: Number,
        required: [false, "Slack name is required"],
        minlength: [4, "Slack name must be at least 4 characters long"]
    },
    height: {
        type: Number,
        required: [false, "Segment email is required"],
        minlength: [10, "Segment email must be at least 10 characters long"]
    },
    id: {
        type: String,
        required: [false, "Twilio email is required"],
        minlength: [10, "Twilio email must be at least 10 characters long"]
    },
    links: {
        type: String,
        required: [false, "CSE Team is required"],
        minlength: [5, "CSE Team must be at least 5 characters long"]
    },
    links_download: {
        type: String,
        required: [false, "Workspace Slug is required"],
        minlength: [2, "First name must be at least 2 characters long"]
    },
    links_download_location: {
        type: String,
        required: [false, "WorkspaceId is not required"]
    },
    links_html: {
        type: String,
        required: [false, "Preferred pronouns is not required"]
    },
    links_self : {
        type: String,
        required: [false, "Phone number is not required"]
    },
    urls : {
        type: Object,
        required: [false, "Phone number is not required"]
    },
    urls_full : {
        type: String,
        required: [false, "Phone number is not required"]
    },
    urls_raw : {
        type: String,
        required: [false, "Phone number is not required"]
    },
    urls_regular : {
        type: String,
        required: [false, "Phone number is not required"]
    },
    urls_small : {
        type: String,
        required: [false, "Phone number is not required"]
    },
    urls_small_s3 : {
        type: String,
        required: [false, "Phone number is not required"]
    },
    urls_thumb : {
        type: String,
        required: [false, "Phone number is not required"]
    },
    width : {
        type: Number,
        required: [false, "Phone number is not required"]
    },
    users : {
        type: Object,
        required: [false]
    }
}, {timestamps:false});
 
const ProfilePhoto = mongoose.model('ProfilePhoto', ProfilePhotoSchema);
 
module.exports = ProfilePhoto;