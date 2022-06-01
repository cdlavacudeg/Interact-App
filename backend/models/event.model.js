const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    course_id: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
    },
    status: {
        type: Boolean,
        default: true,
    },
    fecha: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
});
eventSchema.methods.toJSON = function () {
    const { __v, _id, ...event } = this.toObject();
    event.uid = _id;
    return event;
};

module.exports = model('Event', eventSchema);
