const { Notification } = require('../models');
const response = require('../helpers/response.js');

const notificationGet = async (req, res) => {
    try {
        const [total, notification] = await Promise.all([
            await Notification.countDocuments(),
            await Notification.find(),
        ]);

        response.success(req, res, 'get API - notification list', {
            total,
            notification,
        });
    } catch (error) {
        console.error(`Error in notificationGet:${error}`);
        response.error(req, res, 'Error getting list of notifications');
    }
};

const notificationPost = async (req, res) => {
    const { title, content, date } = req.body;

    try {
        const notification = new Notification({
            title,
            content,
            date,
        });

        await notification.save();

        response.success(req, res, 'post API - Notification created', {
            notification,
        });
    } catch (error) {
        console.error(`Error in notificationPost${error}`);
        response.error(req, res, 'Error creating a notification');
    }
};

const notificationPut = async (req, res) => {
    const { id } = req.params;
    const { title, content, date } = req.body;

    try {
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

        response.success(req, res, 'put API - Notification updated', {
            notification,
        });
    } catch (error) {
        console.error(`Error in notificationPut:${error}`);
        response.error(req, res, 'Error updating a notification');
    }
};

const notificationDelete = async (req, res) => {
    try {
        const { id } = req.params;

        const notification = await Notification.findByIdAndDelete(id);

        response.success(req, res, 'delete API - Notification deleted', {
            notification,
        });
    } catch (error) {
        console.error(`Error in notificationDelete:${error}`);
        response.error(req, res, 'Error deleting a notification');
    }
};

module.exports = {
    notificationGet,
    notificationPost,
    notificationPut,
    notificationDelete,
};
