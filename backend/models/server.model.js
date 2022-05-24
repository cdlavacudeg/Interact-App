const express = require('express');
const cors = require('cors');
const profesores = require('../routes/profesor.route.js');

const { dbConection } = require('../database/config.db')


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

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

        this.app.use('api/v1/auth', require('../routes/auth.route.js'));

        this.app.use("/api/v1/profesores", profesores); // Route profesores


        this.app.get('/hello', (req, res) => {
            res.send('Hello World');
        })

        this.app.use("*", (req, res) => res.status(404).json({ error: "not found" }));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port', this.port);
        })
    }
}

module.exports = Server;
