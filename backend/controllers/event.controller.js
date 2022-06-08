const { Event } = require('../models/index.js');
const response = require('../helpers/response.js');

const eventGet = async (req, res) => {
    try {
        const [total, event] = await Promise.all([
            await Event.countDocuments(),
            await Event.find(),
        ]);

        response.success(req, res, 'get API - list of events', {
            total,
            event,
        });
    } catch (error) {
        console.error(`Error in eventGet:${error}`);
        response.error(req, res, 'Error getting list of events');
    }
};

const eventPost = async (req, res) => {
    const { course_id } = req.params;
    const { date, description } = req.body;
    try {
        const event = await Event.findOne({ course_id });
        event.events.push({
            date,
            description,
        });
        await event.save();
        response.success(req, res, 'post API - Event created', {
            event,
        });
    } catch (error) {
        console.error(`Error in EventPost:${error}`);
        response.error(req, res, 'Error creating Event');
    }
};

const eventDelete = async (req, res) => {
    try {
        const { course_id } = req.params;
        let { index } = req.body;
        index = parseInt(index);

        const event = await Event.findOne({ course_id });
        let newEvent;
        if (event.events[index]) {
            event.events.splice(index, 1);
            newEvent = await event.save();
        } else {
            throw new Error('Wrong index');
        }
        response.success(req, res, 'delete API - Event deleted', {
            event: newEvent,
        });
    } catch (error) {
        console.error(`Error in eventDelete:${error}`);
        response.error(req, res, 'Error deleting a Event');
    }
};

const eventUpdate = async (req, res) => {
    try {
        const { course_id } = req.params;
        let { index, date, description } = req.body;
        index = parseInt(index);

        const event = await Event.findOne({ course_id });
        let updatedEvent;
        if (event.events[index]) {
            if (date) event.events[index].date = date;
            if (description) event.events[index].description = description;
            updatedEvent = await event.save();
        } else {
            throw new Error('Wrong index');
        }
        response.success(req, res, 'put API - Event updated', {
            event: updatedEvent,
        });
    } catch (error) {
        console.error(`Error in EventUpdate: ${error}`);
        response.error(req, res, 'Error updating a Event');
    }
};

module.exports = {
    eventGet,
    eventUpdate,
    eventDelete,
    eventPost,
};
