'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var TeacherSchema = new Schema({
    firstname: {type: String, required: true},
    middlename: {type: String, required: true},
    lastname: {type: String, required: true},
    gender: {type: String, required: true},
    religion: {type: String, required: true},
    bloodgroup: {type: String, required: true},
    state: {type: String, required: true},
    lga: {type: String, required: true},
    date_of_birth: {type: String, required: true},
    photo: {type: String, required: true},
    phone: {type: String, required: true},
    Created_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Teachers', TeacherSchema);