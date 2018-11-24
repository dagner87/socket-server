import Server from './classes/server';
import  router from './routes/routes';
import  bodyParser from 'body-parser';
import  cors from 'cors';


const server =  new Server();
//BodyParser  genero un objeto de javascript
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//CORS
server.app.use(cors({origin:true,credentials:true}));

server.start( () => {
    console.log(`Servidor corriendo en el puerto ${server.port }`);

});

server.app.use('/',router);

