import express from 'express';
import cors from 'cors';

class Server {
    constructor() {
        this.app = express();
        this.port = 3001;

        //Middleware
        this.middleware();

        //Routes
        this.routes();
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
        this.app.get('/hello', (req, res) => {
            res.send('Hello World');
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port', this.port);
        })
    }
}

export default Server;
