const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Message = new Schema({
    sender: String,
    content: String,
    recipient: String,
    dateReceived: {
        type: Date,
        default: Date.now
    }
});

module.exports.Message = mongoose.model('message', Message);