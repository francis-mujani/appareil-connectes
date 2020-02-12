const Appareils = require('../models/Appareils');
Users = require('../models/Users');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const getEdit = (forwardAuthenticated, (req, res) => {
    const { id } = req.params;
    Appareils.findById(id, (err, appareil) => {
        if(err){
            console.log(`Id appareil introuvable : ${err}`)
        }
        else if(appareil){
            res.render('edit', {appareil: appareil});
        }
})
});

const putEdit = (forwardAuthenticated, (req, res) => {
    const { id } = req.params;
    Appareils.findByIdAndUpdate(id, {
        name: req.body.name,
        status: req.body.status,
        types: [{
                type: req.body.type
        }],
        color: req.body.color,
        puissance: req.body.puissance,
        prix: req.body.prix,
        description: req.body.description,
        },
        (err) => {
            if(err) console.log(err);
            res.redirect('/');
        });
});

const aboutMe = (req, res) => {
    res.render('about', {
        user: req.user
    })
}

module.exports = {
    getEdit: getEdit,
    putEdit: putEdit,
    aboutMe: aboutMe
}