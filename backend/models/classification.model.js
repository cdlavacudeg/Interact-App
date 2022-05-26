const { Schema, model } = require('mongoose');

const classificationSchema = new Schema({
        courses: {
            type: [Schema.Types.ObjectId],
            ref: 'Course',
        }, 

        user:  {   
            type: [Schema.Types.ObjectId],
            ref: 'User',
        },
        
        note: {
            type: Number,
            required: true
        },
        
        obs: {
            type: String,
        }

  
}, {
    timestamps: true
})

module.exports = model('Classification', classificationSchema);
