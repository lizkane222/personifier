const mongoose = require('mongoose');
 
// mongoose.connect('mongodb://127.0.0.1:27017/personafier', {
mongoose.connect('mongodb://127.0.0.1:27017/fier', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database fier'))
    .catch(err => console.log('Something went wrong when connecting to the database fier : ', err));

