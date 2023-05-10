const mongoose = require('mongoose');

async function connect_to_database() {
    try {
        await mongoose.connect(process.env.MONGODB_STRING, {useNewUrlParser : true});
        console.log("Connected to MongoDB");
        
    } catch (error) {
        console.log("Connection failed with mongodb", error);
    }
}

module.exports = connect_to_database;