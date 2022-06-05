const mongoose = require('mongoose');
const { User } = require('../models');
const bcryptjs = require('bcryptjs');
exports.dbConnect = async () => {
    const userAdmin = {
        fullName: 'admin',
        email: 'admin@test.com',
        password: '123456',
        courses: [],
        role: 'admin',
    };
    const user = new User(userAdmin);
    //Encrypt password
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(userAdmin.password, salt);
    await user.save();
    console.log(user);
};

exports.dbDisconnect = async () => {
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
