const User = require('../models/user.model')
const Course = require('../models/course.model.js')
const bcryptjs = require('bcryptjs')
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId

const usersGet = async (req, res) => {
    const { limit, from } = req.query
    const query = { status: true }

    const [total, user] = await Promise.all([
        await User.countDocuments(query),
        await User.find(query)
            .skip(Number(from))
            .limit(Number(limit))
            .populate([
                {
                    path:'courses',
                    model:'Course',
                    select:'courseName teacher',
                    populate:{
                        path:'teacher',
                        model:'User',
                        select:'fullName'
                    }
                },
            ]).exec()
    ])

    res.json({
        total,
        user
    })
}

const userPost = async (req, res) => {
    const { password, courses, fullName, email, role } = req.body
        
    const user = new User({
        password,
        courses,
        fullName,
        email,
        role,
        courses
    })

    if(courses){
        courses.map(async course=>{
            const courseObj=await Course.findById(course)

            if(user.role=='teacher'){
                courseObj.teacher=user._id
            }else if (user.role=='student'){
                courseObj.students.push(user._id)
            }else{
                user.courses=[]
            }

            await courseObj.save()
        })
    }
    //Encrypt password
    const salt = bcryptjs.genSaltSync(10)
    user.password = bcryptjs.hashSync(password, salt)

    //Save user in DB
    await user.save()
    res.json({
        msg: `post API - User created`,
        user
    })
}

const userPut = async (req, res) => {
    const { id } = req.params
    const { password, role, ...rest } = req.body

    if (password) {
        const salt = bcryptjs.genSaltSync(10)
        rest.password = bcryptjs.hashSync(password, salt)
    }

    const user = await User.findByIdAndUpdate(id, rest,{new:true})

    res.json({
        msg: `put API - User updated`,
        user
    })
}

const userDelete = async (req, res) => {
    const { id } = req.params

    const user = await User.findByIdAndUpdate(id, { status: false })
    const userAuthenticated = req.user

    res.json({
        msg: `delete API - User deleted`,
        user,
        userAuthenticated
    })
}

module.exports = {
    usersGet,
    userPost,
    userPut,
    userDelete
}
