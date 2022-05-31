const Lesson=require('../models/lesson.model.js')

const lessonsGet=async (req,res)=>{
    const{limit,from} = req.query

    const [total,lessons] = await Promise.all([
        await Lesson.countDocuments(),
        await Lesson.find()
            .skip(Number(from))
            .limit(Number(limit)) 
    ])

    res.json({
        total,
        lessons
    })
}

const lessonPost = async (req,res)=>{

    const {...rest}=req.body

    try {
        const lesson = new Lesson({
            ...rest
        })
        await lesson.save()

        res.json({
            msg: 'Post API - Lesson created',
            lesson
        })
    } catch (error){
        console.error(`Error en lessonPost:${error}`)
        res.json({
            msg:error.message,
            lesson
        })
    }
}

const lessonUpdate = async (req,res)=>{
    const {id} = req.params
    const {...rest} = req.body

    const lesson = await Lesson.findByIdAndUpdate(id,rest,{new:true})

    res.json({
        msg: 'put API - Lesson updated',
        lesson
    })
}

const lessonDelete = async (req,res)=>{
    const {id} = req.params

    const courseDel = await Lesson.findByIdAndDelete(id)
    res.json({
        msg: 'delete API - Lesson deleted',
        courseDel
    })
}

module.exports={
    lessonsGet,
    lessonPost,
    lessonUpdate,
    lessonDelete
}
