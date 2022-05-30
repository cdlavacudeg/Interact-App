const { Schema, model } = require('mongoose')


const notificationSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = model('Notification', notificationSchema)
