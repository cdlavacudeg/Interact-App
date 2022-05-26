const Course= require('../models/course.model.js')
const ObjectId=require('mongodb').ObjectId

const coursesGet = async (req, res) => {
    const{limit,from} = req.query


    const [total,courses] = await Promise.all([
        await Course.countDocuments(),
        await Course.find()
            .skip(Number(from))
            .limit(Number(limit))
            //poupulate -> classifications, events, forum ... 
    ])

    res.json({
        total,
        courses
    })
}

const coursePost = async (req, res) => {
    let {...rest} = req.body
    try {
        const course = new Course({
            ...rest
        })
        await course.save()
        res.json({
            msg:'post API - Course created',
            course
        })
    } catch (error) {
        console.error(`Error en coursePost:${error}`)
        res.json({
            msg:error.message,
        })
    }    
}

const courseUpdate = async (req,res) =>{
    const {id} =req.params
    const {...rest}=req.body 

    const course = await Course.findByIdAndUpdate(id,rest,{new:true})
    res.json({
        msg: 'put API - Course updated',
        course
    })
}


const courseDelete= async (req,res)=>{
    const {id} =req.params
    
    const courseDel=await Course.findByIdAndDelete(id)
    res.json({
        msg: 'delet API - Course deleted',
        courseDel
    })
}


module.exports = {
    coursesGet,
    coursePost,
    courseUpdate,
    courseDelete
}
