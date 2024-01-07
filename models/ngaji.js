const { Int32 } = require("mongodb")
const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
    studentsName: {
        type: String,
        required: true
    },
    teachersName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true

    },
    surahRead: {
        type: String, 
        required: false
    },
    ayahRead: {
        type: Number,
        required: true
    },
    surahMemorize: {
        type: String,
        required: false
    },
    ayahMemorize: {
        type: Number,
        required: false
    },
 
},{
    versionKey: false // Disable the version key (__v)
})

module.exports = mongoose.model('Ngaji', tasksSchema)