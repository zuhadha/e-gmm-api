const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {
    versionKey: false // Disable the version key (__v)
})

module.exports = mongoose.model('User', tasksSchema)