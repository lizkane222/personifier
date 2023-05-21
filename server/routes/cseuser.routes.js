const CseUserController = require('../controllers/cseuser.controller');
 
module.exports = app => {
    app.get('/api/allcseusers', CseUserController.findAllCseUsers);
    app.get('/api/cseuser/:id', CseUserController.findCseUser);
    app.post('/api/newcseuser', CseUserController.createCseUser);
    app.put('/api/cseuser/:id', CseUserController.updateCseUser);
    app.delete('/api/deletecseuser/:id', CseUserController.deleteCseUser);
}


// LIZ KANE CSE USER 
// {
//     "firstName": "Liz",
//     "lastName": "Kane",
//     "slackName": "lkane",
//     "segmentEmail": "liz.kane@gcp.segment.com",
//     "twilioEmail": "lkane@twilio.com",
//     "cseTeam": "Team-2 : (Connections 2, Cloud Mode, Server-Side, Engage)",
//     "workspaceSlug": "liz-kane",
//     "workspaceId": "1234567890",
//     "preferredPronouns" : "she/her",
//     "phoneNumber": "555-555-5555"
// }



// DELETE RESPONSE : 
// {
//     "result": {
//         "acknowledged": true,
//         "deletedCount": 1
//     }
// }

// VALIDATION REQUEST (empty strings) : 
// {
//     "firstName": "",
//     "lastName": "",
//     "slackName": "",
//     "segmentEmail": "",
//     "twilioEmail": "",
//     "cseTeam": "",
//     "workspaceSlug": "",
//     "workspaceId": "",
//     "preferredName" : "",
//     "phoneNumber": ""
// }

// VALIDATION ERRORS : 
// {
//     "message": "Something went wrong creating cse user : ",
//     "error": {
//         "errors": {
//             "firstName": {
//                 "name": "ValidatorError",
//                 "message": "First name is required",
//                 "properties": {
//                     "message": "First name is required",
//                     "type": "required",
//                     "path": "firstName",
//                     "value": ""
//                 },
//                 "kind": "required",
//                 "path": "firstName",
//                 "value": ""
//             },
//             "lastName": {
//                 "name": "ValidatorError",
//                 "message": "Last name is required",
//                 "properties": {
//                     "message": "Last name is required",
//                     "type": "required",
//                     "path": "lastName",
//                     "value": ""
//                 },
//                 "kind": "required",
//                 "path": "lastName",
//                 "value": ""
//             },
//             "slackName": {
//                 "name": "ValidatorError",
//                 "message": "Slack name is required",
//                 "properties": {
//                     "message": "Slack name is required",
//                     "type": "required",
//                     "path": "slackName",
//                     "value": ""
//                 },
//                 "kind": "required",
//                 "path": "slackName",
//                 "value": ""
//             },
//             "segmentEmail": {
//                 "name": "ValidatorError",
//                 "message": "Segment email is required",
//                 "properties": {
//                     "message": "Segment email is required",
//                     "type": "required",
//                     "path": "segmentEmail",
//                     "value": ""
//                 },
//                 "kind": "required",
//                 "path": "segmentEmail",
//                 "value": ""
//             },
//             "twilioEmail": {
//                 "name": "ValidatorError",
//                 "message": "Twilio email is required",
//                 "properties": {
//                     "message": "Twilio email is required",
//                     "type": "required",
//                     "path": "twilioEmail",
//                     "value": ""
//                 },
//                 "kind": "required",
//                 "path": "twilioEmail",
//                 "value": ""
//             },
//             "cseTeam": {
//                 "name": "ValidatorError",
//                 "message": "CSE Team is required",
//                 "properties": {
//                     "message": "CSE Team is required",
//                     "type": "required",
//                     "path": "cseTeam",
//                     "value": ""
//                 },
//                 "kind": "required",
//                 "path": "cseTeam",
//                 "value": ""
//             },
//             "workspaceSlug": {
//                 "name": "ValidatorError",
//                 "message": "Workspace Slug is required",
//                 "properties": {
//                     "message": "Workspace Slug is required",
//                     "type": "required",
//                     "path": "workspaceSlug",
//                     "value": ""
//                 },
//                 "kind": "required",
//                 "path": "workspaceSlug",
//                 "value": ""
//             },
//             "workspaceId": {
//                 "name": "ValidatorError",
//                 "message": "WorkspaceId must be at least 7 characters long",
//                 "properties": {
//                     "message": "WorkspaceId must be at least 7 characters long",
//                     "type": "minlength",
//                     "minlength": 7,
//                     "path": "workspaceId",
//                     "value": ""
//                 },
//                 "kind": "minlength",
//                 "path": "workspaceId",
//                 "value": ""
//             },
//             "preferredName": {
//                 "name": "ValidatorError",
//                 "message": "Preferred name must be at least 2 characters long",
//                 "properties": {
//                     "message": "Preferred name must be at least 2 characters long",
//                     "type": "minlength",
//                     "minlength": 2,
//                     "path": "preferredName",
//                     "value": ""
//                 },
//                 "kind": "minlength",
//                 "path": "preferredName",
//                 "value": ""
//             },
//             "phoneNumber": {
//                 "name": "ValidatorError",
//                 "message": "Phone number must be at least 10 characters long",
//                 "properties": {
//                     "message": "Phone number must be at least 10 characters long",
//                     "type": "minlength",
//                     "minlength": 10,
//                     "path": "phoneNumber",
//                     "value": ""
//                 },
//                 "kind": "minlength",
//                 "path": "phoneNumber",
//                 "value": ""
//             }
//         },
//         "_message": "CseUser validation failed",
//         "name": "ValidationError",
//         "message": "CseUser validation failed: firstName: First name is required, lastName: Last name is required, slackName: Slack name is required, segmentEmail: Segment email is required, twilioEmail: Twilio email is required, cseTeam: CSE Team is required, workspaceSlug: Workspace Slug is required, workspaceId: WorkspaceId must be at least 7 characters long, preferredName: Preferred name must be at least 2 characters long, phoneNumber: Phone number must be at least 10 characters long"
//     }
// }