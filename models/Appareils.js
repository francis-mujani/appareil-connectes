const mongoose = require('mongoose');

const modelAppareils = new mongoose.Schema({
    "name": {type: String, required: true},
    "status": {type: String, required: true},
    //"statusEtteint": {type: String, required: true},
    "types": [
         {
            "type": {type: String, required: false},
            }
    ],
    "color": {type: String, required: true},
    "puissance": {type: Number, required: true},
    "prix": {type: Number, required: true},
    "description": {type: String, required: true},
});

module.exports = mongoose.model('Appareils', modelAppareils);