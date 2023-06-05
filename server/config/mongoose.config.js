const mongoose = require('mongoose');
 
// mongoose.connect('mongodb://127.0.0.1:27017/personfier', {
mongoose.connect('mongodb://127.0.0.1:27017/fier', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    replication:{
        replSetName: rs0
    }
})
    // .then(() => console.log('Established a connection to the database personfier'))
    // .catch(err => console.log('Something went wrong when connecting to the database personfier : ', err));
    .then(() => console.log('Established a connection to the database fier'))
    .catch(err => console.log('Something went wrong when connecting to the database fier : ', err));

    // mongoose.connect('mongodb://127.0.0.1:27017/fier', {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
        // appName:'fier'
        // .then(() => {
        //     console.log('Connected to primary MongoDB instance');
        
        //     // 2. Define replica set configuration
        //     const replicaSetConfig = {
        //       _id: 'rs0',
        //       members: [
        //         { _id: 0, host: 'localhost:27017' },
        //         { _id: 1, host: 'localhost:27018' },
        //         { _id: 2, host: 'localhost:27019' },
        //       ]
        // };
        // // 3. Initialize the replica set
        // return mongoose.connection.db.admin().command({ replSetInitiate: replicaSetConfig });
        // })
        // .then((result) => {
        //     console.log('Replica set initialized');
    
        //     // 4. Check the status of the replica set
        //     return mongoose.connection.db.admin().command({ replSetGetStatus: 1 });
        // })
        // .then((status) => {
        //     console.log('Established a connection to the database fier')
        //     console.log(status);
      
        //     // 5. Disconnect from the primary MongoDB instance
        //     return mongoose.disconnect();
        // })
        // .then(() => {
        //     console.log('Disconnected from primary MongoDB instance');
        // })
        // .catch((err) => {
        //     console.error(err);
        //     process.exit(1);
        // })
    
    
    
    
    // })