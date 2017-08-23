'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var TeacherSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    phone: {type: String, required: true},
    Created_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Teachers', TeacherSchema);