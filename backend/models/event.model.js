const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    status: {
        type: Boolean,
        default: true,
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
});

const eventsSchema = new Schema({
    course_id: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'Course',
    },
    events: [
        {
            type: eventSchema,
        },
    ],
});
eventsSchema.methods.toJSON = function () {
    const { __v, _id, ...event } = this.toObject();
    event.uid = _id;
    return event;
};

module.exports = model('Event', eventsSchema);
