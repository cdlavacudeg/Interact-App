const {Schema, model} = require('mongoose');

const profesorSchema= new Schema({
    cursos: [Schema.Types.ObjectId],
    nombre: {
        type: String,
        required: true
    }
},{
    timestamps:true
})

module.exports=model('Profesor',profesorSchema);
