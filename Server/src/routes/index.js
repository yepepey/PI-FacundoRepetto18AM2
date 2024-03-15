const express = require('express')
const getCharById = require('../controllers/getCharById')
const { postFavorites, deleteFavorites} = require('../controllers/handleFavorites')
const login = require('../controllers/logins')

//crea las routes desde la functio router de express 
const myRouter = express.Router()

//al poner '/character/:id' le digo que va a estar recibiendo un valor dinamico y tiene el nombre ed variable "ID"
myRouter.get('/character/:id', getCharById)

myRouter.get('/login', login)

myRouter.post('/favorites', postFavorites)

myRouter.delete('/favorites/:id', deleteFavorites)

module.exports = myRouter;