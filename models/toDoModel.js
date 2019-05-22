var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: String,
    todo:String,
    isDone: Boolean,
    hasAttachment: Boolean
});

module.exports = mongoose.model('Todos', todoSchema);