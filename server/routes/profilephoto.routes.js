const ProfilePhotoController = require('../controllers/profilephoto.controller');
 
module.exports = app => {
    app.get('/api/allprofilephotos', ProfilePhotoController.findAllProfilePhotos);
    app.get('/api/profilephoto/:id', ProfilePhotoController.findProfilePhoto);
    app.post('/api/newprofilephoto', ProfilePhotoController.createProfilePhoto);
    app.put('/api/profilephoto/:id', ProfilePhotoController.updateProfilePhoto);
    app.delete('/api/deleteprofilephoto/:id', ProfilePhotoController.deleteProfilePhoto);
}
