require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(
    process.env.DB_CONN,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
).then(()=>{
    console.log('Sucessfully connected to the DB')
}).catch((err) =>{
    console.log('Error while connecting to DB: ' + err);
});

mongoose.Promise = global.Promise;

module.exports = mongoose;