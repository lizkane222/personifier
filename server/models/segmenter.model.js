const mongoose = require('mongoose');
 
const SegmenterSchema = new mongoose.Schema({
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
    internalTeam: {
        type: String,
        required: [false, "Internal Team is not required"],
        minlength: [5, "Internal Team must be at least 5 characters long"]
    },
    team: {
        type: String,
        required: [false, "Team is not required"],
        minlength: [5, "Team must be at least 5 characters long"]
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
    pronouns: {
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
    jobRole : {
        type: String,
        required: [false, "jobRole is not required"]
    },
    myUsers : {
        type: [String],
        required: [false, 'myUsers is not required']
    }
}, {timestamps:true});
 
const Segmenter = mongoose.model('Segmenter', SegmenterSchema);
 
module.exports = Segmenter;
