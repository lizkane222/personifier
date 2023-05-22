const mongoose = require('mongoose');
const Schema = mongoose.Schema
 
const ProfilePhotoSchema = new mongoose.Schema({
    _id:{
        type: String,
        required: [true, "_id is required"]
    },
    alt_description: {
        type: String,
        required: [false, "alt_description is required"]
    },
    blur_hash: {
        type: String,
        required: [false, "blur_hash Last name is not required"],
    },
    color: {
        type: String,
        required: [false, "color is not required"],
    },
    height: {
        type: Number,
        required: [false, "height is not required"],
    },
    id: {
        type: String,
        required: [false, "id is not required"],
    },
    links: {
        type: [Schema.Types.Mixed],
        required: [false, "links is not required"],
    },
    links_download: {
        type: String,
        required: [false, "links_download is not required"],
    },
    links_download_location: {
        type: String,
        required: [false, "links_download_location is not required"]
    },
    links_html: {
        type: String,
        required: [false, "links_html is not required"]
    },
    links_self : {
        type: String,
        required: [false, "links_self is not required"]
    },
    urls : {
        type: [Schema.Types.Mixed],
        required: [false, "urls is not required"]
    },
    urls_full : {
        type: String,
        required: [false, "urls_full is not required"]
    },
    urls_raw : {
        type: String,
        required: [false, "urls_raw is not required"]
    },
    urls_regular : {
        type: String,
        required: [false, "urls_regular is not required"]
    },
    urls_small : {
        type: String,
        required: [false, "urls_small is not required"]
    },
    urls_small_s3 : {
        type: String,
        required: [false, "urls_small_s3 is not required"]
    },
    urls_thumb : {
        type: String,
        required: [false, "urls_thumb is not required"]
    },
    width : {
        type: Number,
        required: [false, "width is not required"]
    },
    users : {
        type: [String],
        required: [false, 'user is not required']
 }
}, {timestamps:false});
 
const ProfilePhoto = mongoose.model('ProfilePhoto', ProfilePhotoSchema);
 
module.exports = ProfilePhoto;