const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    courses: {
        type: [Schema.Types.ObjectId],
        ref: 'Course',
    },
    status: {
        type: Boolean,
        default: true,
    },
    role: {
        type: String,
        enum: ['admin', 'teacher','student'],
    }
})

module.exports = model('User', userSchema)
