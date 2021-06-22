const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "Author name required" ],
        minLength: [ 3, "Must be at least 3 characters"],
    },
}, { timestamps: true });

module.exports = mongoose.model("Author", AuthorSchema);