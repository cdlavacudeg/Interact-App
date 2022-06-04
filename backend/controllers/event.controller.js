const { Event } = require('../models/index.js');
const response = require('../helpers/response.js');

const eventGet = async (req, res) => {
    const event = await Event.find();
    response.succes(req, res, 'get API - list of events', { events: event });
};

const eventPost = async (req, res) => {
    const { ...rest } = req.body;
    try {
        const eventCalendar = new Event({
            ...rest,
        });
        await eventCalendar.save();
        response.succes(req, res, 'post API - Event created', {
            event: eventCalendar,
        });
    } catch (error) {
        console.error(`Error en EventPost:${error}`);
        response.error(req, res, 'Error creating Event');
    }
};

const eventDelete = async (req, res) => {
    const { id } = req.params;

    const eventDelete = await Event.findByIdAndDelete(id);
    response.succes(req, res, 'delete API - Event deleted', {
        event: eventDelete,
    });
};

const eventUpdate = async (req, res) => {
    const { id } = req.params;
    const { ...rest } = req.body;

    const EventUpdate = await Event.findByIdAndUpdate(id, rest, { new: true });
    response.succes(req, res, 'put API - Event updated', {
        event: eventUpdate,
    });
};

module.exports = {
    eventGet,
    eventUpdate,
    eventDelete,
    eventPost,
};
