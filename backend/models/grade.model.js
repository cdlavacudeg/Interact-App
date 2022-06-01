const { Schema, model } = require('mongoose');

const gradeSchema= new Schema({
    grade:{
        type:Number,
        min:0,
        max:10,
        required:true
    },
    obs:{
        type:String,
        default:" "
    },
    date:{
        type:String,
        require:true
    }

})

const studentGradeSchema = new Schema({
    student_id:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true,
        unique:true
    },
    grades:[{
        type:gradeSchema
    }],
})

const gradesSchema = new Schema({
        course_id: {
            type: Schema.Types.ObjectId,
            ref: 'Course',
            unique:true,
            required:true
        }, 

        studentGrades: [{
            type: studentGradeSchema,
        }],
        
})

gradesSchema.methods.toJSON = function () {
    const { __v, _id, ...grade } = this.toObject()
    grade.uid = _id
    return grade
}

module.exports = model('Grade', gradesSchema);
