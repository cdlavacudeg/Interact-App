const { Schema, model } = require('mongoose');

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
    date: {
        type: String,
        required: true,
    },
});

notificationSchema.methods.toJSON = function () {
    const { __v, password, _id, ...notification } = this.toObject();
    notification.uid = _id;
    return notification;
};

module.exports = model('Notification', notificationSchema);
