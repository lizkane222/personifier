const ProfilePhotoController = require('../controllers/profilephoto.controller');
 
module.exports = app => {
    app.get('/api/allprofilephotos', UserController.findAllUsers);
    app.get('/api/profilephoto/:id', UserController.findUser);
    app.post('/api/newprofilephoto', UserController.createUser);
    app.put('/api/profilephoto/:id', UserController.updateUser);
    app.delete('/api/deleteprofilephoto/:id', UserController.deleteUser);
}
