const { Notification } = require('../models');
// const Notification = require('../models/notification.model')

const notificationGet = async (req, res) => {
    const [total, notification] = await Promise.all([
        await Notification.countDocuments(),
        await Notification.find(),
    ]);

    res.json({
        total,
        notification,
    });
};

const notificationPost = async (req, res) => {
    const { title, content, date } = req.body;

    const notification = new Notification({
        title,
        content,
        date,
    });

    await notification.save();

    res.json({
        msg: 'Post API - Notification created',
        notification,
    });
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

    res.json({
        msg: 'put API - Notification updated',
        notification,
    });
};

const notificationDelete = async (req, res) => {
    const { id } = req.params;

    const notification = await Notification.findByIdAndDelete(id);

    res.json({
        msg: 'delete API - Notification deleted',
        notification,
    });
};

module.exports = {
    notificationGet,
    notificationPost,
    notificationPut,
    notificationDelete,
};
