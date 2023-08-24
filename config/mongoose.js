const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://mounirongali99:evtEtVnJnrvDszZX@cluster0.40ueryk.mongodb.net/`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;