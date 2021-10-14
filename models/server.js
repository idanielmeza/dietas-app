const express = require('express');
const cors = require('cors');
const hbs = require('hbs');
const {dbConnection} = require('../db/config');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 80;

        this.paths = {
            alimentos: '/api/alimentos',
            search: '/api/search',
            login: '/login',
            auth: '/api/auth',
            index: '/',
            usuario: '/api/usuario'
        };

        //Conectar a db
        this.conectarDB();

        //Middleware
        this.middlewares();

        //Rutas de app
        this.router();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){

        //cors
        // this.app.use(cors());
        // this.app.set('view engine', 'hbs');

        //Lectura y parseo del body
        this.app.use(express.json());
        // this.app.use(express.)

        //Directorio Publico
        this.app.use(express.static('public'));

    }

    router(){
        // this.app.use(this.paths.auth,require('../routes/auth'));
        this.app.use(this.paths.alimentos,require('../routes/alimentos'));
        this.app.use(this.paths.search,require('../routes/search'));
        // this.app.use(this.paths.login,require('../routes/login'));
        this.app.use(this.paths.auth,require('../routes/auth'));
        // this.app.use(this.paths.index,require('../routes/principal'));
        this.app.use(this.paths.usuario,require('../routes/usuario'));
        
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`corriendo en el puerto ${this.port}`);
        });
    }

}

module.exports = Server;