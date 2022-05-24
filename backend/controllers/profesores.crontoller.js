const profesorCtrl={}
const mongodb= require('mongodb')
const ObjectId=mongodb.ObjectId

const profesorModel= require('../models/profesores.model.js')

profesorCtrl.getProfesores= async (req,res) => {
    const profesores= await profesorModel.find()
    res.json(profesores)
}

profesorCtrl.createProfesor=async (req,res)=>{
    console.log(req.body)
    const {cursos, nombre}=req.body;
    const newProfesor= new profesorModel({
        cursos: [...cursos].map(e=>ObjectId(e)),
        nombre:nombre
    })
    const profesor = await newProfesor.save()

    res.json({
        "message":"Profesor Creado",
        "data": profesor
    })
}



module.exports=profesorCtrl
