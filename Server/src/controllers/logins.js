
const users = require ('../utils/users')

function login(req, res) {

    //express pertmite que req.query traiga los datos
    let { email, password } = req.query;


    //guardo el usuario si existe (boolean) si existe en mi DB uno que coinicida
    let foundUser = users.find(user => user.email === email);

    if (foundUser) {
        if(foundUser.password === password){
            return res.send({access: true})
        } else {
            return res.send({access: false, message: 'Password wrong'})
        }
    } else {
        return res.send({access: false, message: 'User wrong'})
    }

}

module.exports = login
