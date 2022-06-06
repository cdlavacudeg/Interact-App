const response = require('../helpers/response.js');

const isAdminRole = (req, res, next) => {
    const { role, fullName } = req.user;

    if (role !== 'admin') {
        return response.error(
            req,
            res,
            `Access denied. ${fullName} is not admin`,
            401
        );
    }
    req.user = req.body;

    next();
};

const isTeacherRole = (req, res, next) => {
    const { role, fullName } = req.user;

    if (role !== 'teacher') {
        return response.error(
            req,
            res,
            `Access denied. ${fullName} is not teacher`,
            401
        );
    }
    next();
};

module.exports = {
    isAdminRole,
    isTeacherRole,
};
