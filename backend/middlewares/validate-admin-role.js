


const isAdminRole = (req, res, next) => {

    const { role, name } = req.user

    if (role !== 'admin') {
        return res.status(401).json({
            msg: `Access denied. ${name} is not admin`
        })
    }
    next()
}



module.exports = {
    isAdminRole
}