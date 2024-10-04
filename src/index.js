const express = require("express");
const cors = require("cors")
const serverRoutes = require('./routes');
const ErrorMiddlewares = require('./utils/middlewares/errorMidlewares');
const path = require("path");
const { config } = require("./config");
const cluster = require("cluster");
const CPUS = require("os").cpus();

class Server {
    constructor(){
        this.app = express();
        this.middlewares();
        this.settings();
        this.views();
        this.routes();
        this.errorMiddlewares();
    }
    
    middlewares(){
        this.app.use(cors());
    }

    settings(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.static(`${__dirname}/public`));
    }

    views(){
        this.app.set('view engine', "ejs");
        this.app.set('views', path.join(__dirname, 'views', 'pages'));
    }

    routes(){
        serverRoutes(this.app);
    }

    errorMiddlewares(){
        this.app.use(ErrorMiddlewares.logErrors);
        this.app.use(ErrorMiddlewares.boomErrorHandler);
        this.app.use(ErrorMiddlewares.errorHandler);
    }

    listen(){
        if(cluster.isMaster){
          console.log(`Master PID -> ${process.pid}`);
          for (let i = 0; i < CPUS.length; i++) {
            cluster.fork();
          }
          cluster.on("exit", (worker, a, b)=> {
            console.log(`Worker out, -> PID: ${worker.process.pid}`);
            cluster.fork();
          });
        } else {
          this.app.listen(config.port, (e) => console.log(`Server on http://localhost:${config.port} , PID: ${process.pid}`));
        }
    }
}

module.exports = new Server();