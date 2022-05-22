const express = require('express');


class Server {
    constructor() {
    this.app = express();
    this.port = 3000;
   }

   listen() {
       this.app.listen(this.port, () => {
           console.log('Server on port', this.port);
       })
   }
}

module.exports = Server;