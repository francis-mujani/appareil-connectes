const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');



const bodyParser = require('body-parser');


app = express()

// Passport Config
require('./config/passport')(passport);

// METHODE OVERRIDE
app.use(methodOverride('_method'))

// DB Config
const db = require('./config/keys').mongoURI;

// CONNECTION A LA BASE DE DONNÉE
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(() => {console.log('connexion reussie !')})
.catch(() => { console.log('connexion échouée !')});

// VIEW ENGINE
app.set('view engine', 'pug');

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }))



// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );
  
  // Passport middleware
app.use(passport.initialize());
app.use(passport.session());
  
  // Connect flash
app.use(flash());
  
  // Global variables
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });
  


// ROUTE INDEX & USERS
const router = require('./router/index');
const users = require('./router/users')



// LES ROUTES
app.use('/', router);
app.use('/users', users);


//app.use('/editer/:id', router);
//app.use('/supprimer/:id', router);

// PATH POUR BOOTSTRAP
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
// PATH POUR DOSSIER PUBLIC
app.use(express.static('public'))


// IMPORTATION DE L'APP
module.exports = app;