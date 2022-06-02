const isAdminRole = (req, res, next) => {
    const { role, fullName } = req.user;

    if (role !== 'admin') {
        return res.status(401).json({
            msg: `Access denied. ${fullName} is not admin`,
        });
    }
    req.user = req.body;

    next();
};

const isTeacherRole = (req, res, next) => {
    const { role, fullName } = req.user;

    if (role !== 'teacher') {
        return res.status(401).json({
            msg: `Access denied. ${fullName} is not admin`,
        });
    }
    next();
};

module.exports = {
    isAdminRole,
    isTeacherRole,
};
