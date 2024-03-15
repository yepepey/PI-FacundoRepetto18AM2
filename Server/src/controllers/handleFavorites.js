//aca se guardan mis favoritos por eso no es una constante
let myFavorites = []

function postFavorites(req, res){
    // req.body va a contener toda la informacion que se sete mandando (son todos los datos del personaje)
    console.log(`Aca esta el postFavorites`)
    let character = req.body;
    if(!myFavorites.find(character)) { myFavorites.push(character) }

    return res.json(myFavorites);
}

function deleteFavorites(req, res){
    console.log(`Aca esta el delteFavorites`)
    let { id } = req.params
    myFavorites = myFavorites.filter(char => char.id !== id);
    return res.json(myFavorites)
}

module.exports = {
    postFavorites,
    deleteFavorites
}