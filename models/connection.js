const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/smsbackup');
mongoose.connect('mongodb://elcentino:rock.roll@cluster0-shard-00-00-9byhr.mongodb.net:27017,cluster0-shard-00-01-9byhr.mongodb.net:27017,cluster0-shard-00-02-9byhr.mongodb.net:27017/vibe?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true/smsbackup');

mongoose.connection
    .once('open', () => console.log('succeessfully connected to database'))
    .on('error', err => console.log(error));

