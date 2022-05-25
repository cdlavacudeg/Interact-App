const {Schema,model}= require('mongoose')

const courseSchema=new Schema({
    courseName:{
        type:String,
        unique:true,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    lessons:{
        type:[Schema.Types.ObjectId],
        required:true,
        ref:'Lesson'
    },
    teacher:{
        type:Schema.Types.ObjectId,
        required:true
    },
    events:{
        type:[Schema.Types.ObjectId],
        ref:'Event'
    },
    students:{
        type:[Schema.Types.ObjectId],
        require:true,
        ref:'User'
    },
    grades:{
        type:[Schema.Types.ObjectId],
        ref:'Grade'
    },
    forum:{
       type:Schema.Types.ObjectId,
       ref:'Forum'
    }
}) 

module.exports=model('Course',courseSchema)
