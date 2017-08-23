'use strict';

module.exports = function(app) {
    var teacherslist = require('../controllers/staffController');
    
    // setting up the routes
    app.route('/teachers').get(teacherslist.list_all_teachers)
        .post(teacherslist.create_a_teacher);
    
    app.route('/teacher/:teacherId').get(teacherslist.read_a_teacher)
        .put(teacherslist.update_a_teacher)
        .delete(teacherslist.delete_a_teacher);
}