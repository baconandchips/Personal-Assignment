const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    messageID: {
        type: Number,
        required: true,
        unique: true,
    },
    content: {
        type: String,
        required: true,
    },
    contentHidden: {
        type: String,
        required: true,
    },
    showHidden: {
        type: Boolean,
        required: true,
    }
}, {
    timestamps: true
})

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;