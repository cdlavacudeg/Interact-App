const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
    courseName: {
        type: String,
        unique: true,
        required: true,
    },
    image: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        required: true,
    },
    lessons: {
        type: Schema.Types.ObjectId,
        ref: 'Lesson',
    },
    teacher: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    events: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
    },
    students: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    grades: {
        type: Schema.Types.ObjectId,
        default: 'male',
        ref: 'Grade',
    },
    forum: {
        type: Schema.Types.ObjectId,
        ref: 'Forum',
    },
});

courseSchema.methods.toJSON = function () {
    const { __v, _id, ...course } = this.toObject();
    course.uid = _id;
    return course;
};

module.exports = model('Course', courseSchema);
