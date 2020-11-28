const { Router } = require('express');
const passport = require('passport');
const router = Router();


router.post('/', passport.authenticate('local-signin',{
    successRedirect:'/app/dashboard',
    failureRedirect: 'localhost:3000/app/dashboard',
    passReqToCallback:true

}));


module.exports = router;