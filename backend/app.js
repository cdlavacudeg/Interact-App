import Server from './models/server.model.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MongoClient = mongodb.MongoClient;

const port=process.env.PORT || 8000;

const server = new Server(port);

MongoClient.connect(
    process.env.INTERACT_DB,
    {
        maxPoolSize:50,
        wtimeoutMS:2500,
        useNewUrlParser:true
    }
)
.catch(err=>{
    console.error(err.stack);
    process.exit(1);
})
.then(async client=>{
    console.log('Conexión a Mongo exitosa');
    server.listen();
}); 

