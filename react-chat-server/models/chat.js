var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Chat = new Schema({
    id: String,
    name: String,
    message: String
})

module.exports = mongoose.model('Chat', Chat);