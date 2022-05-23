import express from 'express';
import cors from 'cors';
import profesores from '../routes/profesor.route.js';


class Server {
    constructor(port) {
        this.app = express();
        this.port=port;
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

        this.app.use("/api/v1/profesores",profesores); // Route profesores


        this.app.get('/hello', (req, res) => {
            res.send('Hello World');
        })

        this.app.use("*",(req,res)=>res.status(404).json({error:"not found"}));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port', this.port);
        })
    }
}

export default Server;
