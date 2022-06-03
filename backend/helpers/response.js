const success = function (req,res,message,object={},status=200) {
    res.status(status).send({
        error:'',
        msg:message,
        obj:object
    })
}
const error = function (req,res,message,status=500) {
    res.status(status).send({
        error:message,
        msg:'',
        obj:{}
    })
}
module.exports={
    success,
    error
}
