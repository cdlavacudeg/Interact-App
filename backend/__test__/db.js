const mongoose = require('mongoose');
const { User } = require('../models');
const bcryptjs = require('bcryptjs');
const { userAdmin } = require('./user.data.js');

const dbConnect = async () => {
    const user = new User(userAdmin);
    //Encrypt password
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(userAdmin.password, salt);
    await user.save();
    console.log(user);
};

const dbDisconnect = async () => {
    const names = [
        'users',
        'courses',
        'lessons',
        'events',
        'grades',
        'lessons',
        'notifications',
    ];
    Promise.all(
        names.map(async (name) => {
            await mongoose.connection.dropCollection(name);
            return true;
        })
    ).then(async () => await mongoose.disconnect());
};

module.exports = {
    dbConnect,
    dbDisconnect,
};
