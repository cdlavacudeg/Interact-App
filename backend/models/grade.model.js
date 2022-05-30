const { Schema, model } = require('mongoose');

const gradeSchema = new Schema({
        course: {
            type: Schema.Types.ObjectId,
            ref: 'Course',
        }, 

        user:  {   
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        
        grade: {
            type: Number,
            required: true
        },
        
        obs: {
            type: String,
        },
        type: {
            type: String,
        },
        date: {
            type: String,
            required: true
        }

  
})
gradeSchema.methods.toJSON = function () {
    const { __v, _id, ...grade } = this.toObject()
    grade.uid = _id
    return grade
}

module.exports = model('Grade', gradeSchema);
