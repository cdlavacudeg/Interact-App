const { Notification } = require('../models');
const response = require('../helpers/response.js')

const notificationGet = async (req, res) => {
    const [total, notifications] = await Promise.all([
        await Notification.countDocuments(),
        await Notification.find(),
    ]);

    response.success(req,res,'get API - notification list',{ total,notifications})
};

const notificationPost = async (req, res) => {
    const { title, content, date } = req.body;

    const notification = new Notification({
        title,
        content,
        date,
    });

    await notification.save();

    response.success(req,res,'post API - Notification created',{notification});
};

const notificationPut = async (req, res) => {
    const { id } = req.params;
    const { title, content, date } = req.body;

    const notification = await Notification.findByIdAndUpdate(
        id,
        {
            title,
            content,
            date,
        },
        { new: true }
    );

    await notification.save();

    response.success(req,res,'put API - Notification updated',{notification});
};

const notificationDelete = async (req, res) => {
    const { id } = req.params;

    const notification = await Notification.findByIdAndDelete(id);

    response.success(req,res,'delete API - Notification deleted',{notification})
};

module.exports = {
    notificationGet,
    notificationPost,
    notificationPut,
    notificationDelete,
};
