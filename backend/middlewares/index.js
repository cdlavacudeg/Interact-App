//Imports optimized

const isAdminRole = require('../middlewares/validate-admin-role');
const validateField = require('../middlewares/validate-field');
const validateJWT = require('../middlewares/validate-jwt');

module.exports = {
    ...isAdminRole,
    ...validateField,
    ...validateJWT
}