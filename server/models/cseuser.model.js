const mongoose = require('mongoose');
 
const CseUserSchema = new mongoose.Schema({
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
    slackName: {
        type: String,
        required: [true, "Slack name is required"],
        minlength: [4, "Slack name must be at least 4 characters long"]
    },
    segmentEmail: {
        type: String,
        required: [true, "Segment email is required"],
        minlength: [10, "Segment email must be at least 10 characters long"]
    },
    twilioEmail: {
        type: String,
        required: [true, "Twilio email is required"],
        minlength: [10, "Twilio email must be at least 10 characters long"]
    },
    cseTeam: {
        type: String,
        required: [true, "CSE Team is required"],
        minlength: [5, "CSE Team must be at least 5 characters long"]
    },
    workspaceSlug: {
        type: String,
        required: [true, "Workspace Slug is required"],
        minlength: [2, "First name must be at least 2 characters long"]
    },
    workspaceId: {
        type: String,
        required: [false, "WorkspaceId is not required"]
    },
    preferredPronouns: {
        type: String,
        required: [false, "Preferred pronouns is not required"]
    },
    phoneNumber : {
        type: String,
        required: [false, "Phone number is not required"]
    },
    region : {
        type: String,
        required: [false, "region is not required"]
    },
    role : {
        type: String,
        required: [false, "role is not required"]
    },
    myUsers : {
        type: [String],
        required: [false, 'myUsers is not required']
    }
}, {timestamps:true});
 
const CseUser = mongoose.model('CseUser', CseUserSchema);
 
module.exports = CseUser;
