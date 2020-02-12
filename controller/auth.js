const Users = require('../models/Users')
//const auth = require('../router/auth')
const bcrypt = require('bcrypt')

// fonction get login
const login = (req, res) => {
    res.render('login')
}

// fonction post login
const postLogin = (req, res) => {
    res.render('login')
}
// fonction get register
const register = (req, res) => {
    res.render('register')
}

// fonction post register
const postRegister = async (req, res) => {
    const { username, name, genre, password } = req.body;
    const hachedPassWord = await bcrypt.hash(password, 10);
    const newUsers = new Users({
        "username" : username,
        "name" : name,
        "genre" : genre,
        "password" : hachedPassWord
    });
    newUsers.save((err, success) => {
        if(err){
            console.log(`Impossible d'enregistre un nouvel utilisateur ${err}`)
        }else if(success){
            console.log(`Nouvel utilisateur a bien été ajouté a la base de donnée`)
            res.redirect('login');
        };
    });

}

module.exports = {
    login: login,
    register: register,
    postLogin: postLogin,
    postRegister: postRegister
}