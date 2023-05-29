const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors())

require("./config/mongoose.config"); // calling the mongoose.config file and running the connect function
    
// Middleware to handle POST requests
app.use(express.json(), express.urlencoded({ extended: true }));
    

const SegmenterRoutes = require("./routes/segmenter.routes");
SegmenterRoutes(app);

const UserRoutes = require("./routes/user.routes");
UserRoutes(app);

const ProfilePhotoRoutes = require("./routes/profilephoto.routes");
ProfilePhotoRoutes(app);

app.listen(8000, () => console.log("The server live and running on PORT 8000 :  http://localhost:8000/"));



// START
// https://youtu.be/fpBYj55-zd8
// BETTER VIDEO : https://youtu.be/Vux_aB8yYEY
