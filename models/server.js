const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT

        //CORS

        this.app.use(cors());
        
        // Lectura y parceo del body

        this.app.use(express.json())


        //Middlewares
        this.middleware();

        //Rutas De la Application

        this.routes()
    }

    middleware(){

        //Directorio Publico
        this.app.use(express.static('public'))
    }

    routes(){
        
        this.app.use('/api/usuarios', require('../routes/user'))

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Corriendo en puerto',this.port);
        })
    }

}

module.exports = Server;