const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/session');

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true

}, async (req, email, password, done) => {

    const user = await User.findOne({ email: email });
    if (!user) {
        console.log('Usuario No registrado')
    }
    if (!user.comparePassword(password)) {
        console.log('Contraseña incorrecta')
    }
  
}));