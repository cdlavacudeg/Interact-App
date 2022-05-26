const express = require('express');
const cors = require('cors');

const { dbConection } = require('../database/config.db')


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            auth: '/api/v1/auth',
            user: '/api/v1/user',
            classification: '/api/v1/classification',
            course: '/api/v1/course',
        }

        //Connet Database
        this.connectDB();

        //Middleware
        this.middleware();

        //Routes
        this.routes();
    }

    async connectDB() {
        await dbConection()
    }

    middleware() {

        //CORS
        this.app.use(cors())

        // Parse and lecture JSON
        this.app.use(express.json());

        //Public folder
        this.app.use(express.static('public'));

    }


    routes() {

        this.app.use(this.path.auth, require('../routes/auth.route.js'));
        this.app.use(this.path.user, require('../routes/user.route.js'));
        this.app.use(this.path.classification, require('../routes/classifications.route.js'));
        this.app.use(this.path.course,require('../routes/course.route.js'))
        this.app.use("*", (req, res) => res.status(404).json({ error: "not found" }));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port', this.port);
        })
    }
}

module.exports = Server;
