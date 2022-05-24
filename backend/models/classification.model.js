const { Schema, model } = require('mongoose');

const classificationSchema = new Schema({
        cursos: [Schema.Types.ObjectId],

        users: [Schema.Types.ObjectId],
        
        note: {
            type: Number,
            required: true
        },
        Obs: {
            type: String,
        }

  
}, {
    timestamps: true
})

module.exports = model('Classification', classificationSchema);
