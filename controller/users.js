const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Load User model
const User = require('../models/Users');
const { forwardAuthenticated } = require('../config/auth');

const login = (forwardAuthenticated, (req, res) => {
    res.render('connexion')
})