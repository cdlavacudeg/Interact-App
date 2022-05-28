const { Schema, model } = require('mongoose')

const lessonSchema = new Schema({
    course_id:{
        type:Schema.Types.ObjectId,
        required:true
    },
    content:{
        type:String,
        require:true
    }
})

lessonSchema.methods.toJSON= function(){
    const{__v,_id,...lesson}=this.toObject()
    lesson.uid=_id
    return lesson
}

module.exports = model('Lesson',lessonSchema)
