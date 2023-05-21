const UserController = require('../controllers/user.controller');
 
module.exports = app => {
    app.get('/api/allusers', UserController.findAllUsers);
    app.get('/api/user/:id', UserController.findUser);
    app.post('/api/newuser', UserController.createUser);
    app.put('/api/user/:id', UserController.updateUser);
    app.delete('/api/deleteuser/:id', UserController.deleteUser);
}
