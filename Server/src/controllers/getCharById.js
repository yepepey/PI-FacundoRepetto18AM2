const axios = require ('axios');
const { response } = require('express');
const URL = 'http://rickandmortyapi.com/api/character'

function getCharById(req, res) {

    //req.params nos devuelve toda la url
    const { id } = req.params;

    axios.get(`${URL}/${id}`)
    .then(response => {
        let { name, gender, species, origin, image, status } = response.data
        if (name) {
            let char = {
                id,
                name,
                gender,
                species,
                origin: origin.name,
                image,
                status
            }
            return res.send(char)
        } else return res.status(404).send({message:'Not found'});
    })
    .catch (error => {
        return res.status(500).send({message: error.message})
    })

}

module.exports = getCharById;

/* contenido viejo 

const axios = require ('axios');

const URL = 'http://rickandmortyapi.com/api/character/'


function getCharById (req, res) {
    
    const id = parseInt(req.url.split('/').pop())

    axios.get(`${URL}/${id}`)
    //cuando este cumplida la promesa hace esto->
    .then((response) => {     
        let { name, gender, species, origin, image, status } = response.data
        
        let char = {
            id,
            name,
            gender,
            species,
            origin: origin.name,
            image,
            status
        }

        res.writeHead(200, { 'Content-Type':  'application/json' })
        // uso la funcion JSON y lo convierto a string para poder enviarlo el json al FE
        return res.end(JSON.stringify(char))

    })

    .catch((error)=> {

        res.writeHead(500, { 'Content-Type':  'text/plain' })
        return res.end(error.message)

    });
   


}


module.exports = getCharById; */ 