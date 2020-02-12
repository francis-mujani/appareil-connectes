const express = require('express');
const router = express.Router();
const indexController = require('../controller/index');
const editController = require('../controller/edit');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
//const authController = require('../controller/auth')
 
// parse application/json
//app.use(bodyParser.json())

// route pour la page d'accueil
router.get('/', indexController.getIndex);

// route appareils
router.get('/admin', indexController.getAppareils);

// route pour naviguer vers le formulaire
app.get('/ajouter', indexController.getForm)

// route pour ajouter appareils dans la base de donnée
app.post('/ajouter', ensureAuthenticated, indexController.postForm)

// route pour la page login
//app.get('/login', authController.login)
//app.post('/login', authController.postLogin)

// route pour la page register
//app.get('/register', authController.register)
//app.post('/register', authController.postRegister)

// route pour la page about me
app.get('/about', editController.aboutMe)

// route pour modifier un appareil
app.get('/editer/:id', editController.getEdit)

// route pour sauvegarder un appareil modifier
app.put('/editer/:id', ensureAuthenticated,  editController.putEdit)

// route pour supprimer un appareil
app.delete('/supprimer/:id',  ensureAuthenticated, indexController.getDelete)

// route pour voir plus des details de l'appareil
app.get('/:id', indexController.getappreilByID);

module.exports = router