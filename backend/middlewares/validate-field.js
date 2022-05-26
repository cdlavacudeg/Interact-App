const { validationResult } = require('express-validator')

//Validate all fields in request
const validateField = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    next()
}


module.exports = validateField;