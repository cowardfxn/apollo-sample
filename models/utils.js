const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {}, (err, msg) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Connected to MongoDB");
    }
});

module.exports = {
    mongoose: mongoose
};