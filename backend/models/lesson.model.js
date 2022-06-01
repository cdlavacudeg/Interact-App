const { Schema, model } = require('mongoose')

const lectureSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
})


const lessonSchema = new Schema({
    course_id:{
        type:Schema.Types.ObjectId,
        required:true,
        unique: true,
        ref:'Course'
    },
    lectures:[{
        type:lectureSchema
    }],
})

lessonSchema.methods.toJSON= function(){
    const{__v,_id,...lesson}=this.toObject()
    lesson.uid=_id
    return lesson
}

module.exports = model('Lesson',lessonSchema)
