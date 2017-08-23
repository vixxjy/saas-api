'use strict';

var mongoose = require('mongoose'),
  Teacher = mongoose.model('Teachers');

exports.list_all_teachers = function(req, res) {
  Teacher.find({}, function(err, teacher) {
    if (err){
      res.send(err);
    }else{
    res.json(teacher);
    }
  });
};




exports.create_a_teacher = function(req, res) {
  var new_teacher = new Teacher(req.body);
  new_teacher.save(function(err, teacher) {
    if (err){
      res.send(err);
    }else{
    res.json(teacher);
    }
  });
};


exports.read_a_teacher = function(req, res) {
  Teacher.findById(req.params.taskId, function(err, teacher) {
    if (err){
      res.send(err);
    }else{
    res.json(teacher);
    }
  });
};


exports.update_a_teacher = function(req, res) {
  Teacher.findOneAndUpdate({_id: req.params.teacherId}, req.body, {new: true}, function(err, teacher) {
    if (err){
      res.send(err);
    }else{
    res.json(teacher);
    }
  });
};


exports.delete_a_teacher = function(req, res) {


  Teacher.remove({
    _id: req.params.teacherId
  }, function(err, teacher) {
    if (err){
      res.send(err);
    }else{
    res.json({ message: 'Teacher successfully deleted' });
    }
  });
};