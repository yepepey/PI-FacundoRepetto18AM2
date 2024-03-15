
const express = require ('express');
const myRouter = require('./routes');
const server = express();
const PORT = 3001;

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});

//cada vez que se quiera hacer algo, se va a usar esta logica
//esto va a permitir los metodos, el accesso al servidor
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow.Headers', 'Origin, X-Requested-With, COntent-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    //una vez que este todo listo, podes continuar para eso esta el next()
    next();
});


// middleware -> aca le digo que todo lo que pase lo haga ser JSON
server.use(express.json())

// middleware ->  todas las peticiones que tengan un "rickandmorty" antes las mandas para myRouter (si tuvieramos un carrito el router tendria que ser otro)
server.use('/rickandmorty', myRouter)

/*   TODO EL CODIGO ANTES DEL EXPRESS
const http = require('http');
const getCharById = require('./controllers/getCharById');

// solo vario el puerto modificando aca  
const port = 3001;
// "npm init" para iniciar el server

// seteo la DB Falsa
// const mockDB = require('./utils/data')

//esto crea el servidor desde la prop http -> req lo que piden lo guardfo aca | res guarda lo que les envio o modifico (respuesta)
const server = http.createServer( (req, res) => {
    //aca va logica del servidor

    //para que no haya log in al server (por ahora)
    res.setHeader('Access-Control-Allow-Origin', '*')

    //RUTAS HTTP (es con condicionales) (buscar char)
    if (req.url.includes('/rickandmorty/character')) {

        
        return getCharById(req, res);

        /* logica vieja de http
         let urlArrLast = req.url.split('/') // urlArrLast[urlArrLast.length -1];
        let id = parseInt(urlArrLast[urlArrLast.length -1]);
        let foundChar = mockDB.find((char) => char.id === id);

        if (foundChar) {
            res.writeHead(200, { 'Content-Type':  'application/json' })

            // uso la funcion JSON y lo convierto a string para poder enviarlo el json al FE
            return res.end(JSON.stringify(foundChar))
        }
        console.log(foundChar)
        
        res.writeHead(200, { 'Content-Type':  'text/plain' })
        return res.end(`Char no encontrado: ${id}`) 
    }

    res.writeHead(200, { 'Content-Type':  'text/plain' })
    return res.end('Code: 200')

});

// donde escucha el servidor (puerto) y que haga esto (inside)
server.listen(port, () => {

}) */ 