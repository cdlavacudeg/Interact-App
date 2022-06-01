const { Event } = require('../models/index.js');

const eventGet = async (req, res) => {
    const event = await Event.find();
    res.json(event);
};

const eventPost = async (req, res) => {
    const { ...rest } = req.body;
    try {
        const eventCalendar = new Event({
            ...rest,
        });
        await eventCalendar.save();
        res.json({ eventCalendar });
    } catch (error) {
        console.error(`Error en EventPost:${error}`);
        res.json({
            messague: error.message,
        });
    }
};

const eventDelete = async (req, res) => {
    const { id } = req.params;

    const eventDelete = await Event.findByIdAndDelete(id);
    res.json({
        msg: 'delete API - Eventdeleted',
        eventDelete,
    });
};

const eventUpdate = async (req, res) => {
    const { id } = req.params;
    const { ...rest } = req.body;

    const EventUpdate = await Event.findByIdAndUpdate(id, rest, { new: true });
    res.json({
        msg: 'put API - Event updated',
        EventUpdate,
    });
};

module.exports = {
    eventGet,
    eventUpdate,
    eventDelete,
    eventPost,
};
