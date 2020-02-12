/* const LocalStrategy = require('passport-local').Strategy;
const Users = require('../model/Users')
const bcrypt = require('bcrypt')

function initialize(passport, getUserByUsername, getUserById){

    const authenticateUser = async (username, password, done) => {
        const user = getUserByUsername(username)
        if (user == null) {
            return done(null, false, {message: "nom d'utilisateur introuvable"})
        }

        try{
            if (await bcrypt.compare(password, user.passport)) {
                return done(null, user)
            }else {
                return done(null, false, {message: "Mot de passe incorrect !"})
            }
        } catch (e) {
            return done(e)

        }
    }

	passport.use(new LocalStrategy(Users.authenticateUser()));
	passport.serializeUser(Users.serializeUser());
	passport.deserializeUser(Users.deserializeUser());
}

module.exports = initialize

*/