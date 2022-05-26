const mongoose = require('mongoose');


//Connect to DB
const dbConection = async () => {
    try {

        await mongoose.connect(process.env.INTERACT_DB)
        console.log('Database connected')

    } catch (error) {

        console.log(error)
        throw new Error('Error starting database')

    }
}




module.exports = {
    dbConection
}