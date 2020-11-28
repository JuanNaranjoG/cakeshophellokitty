const {Router} = require('express');
const router = Router();

const {getpersonaexternas,
    createpersonaexterna,
    getpersonaexterna,
    updatepersonaexterna,
    deletepersonaexterna}= require('../controllers/personaexterna.controllers');

   router.route('/').get(getpersonaexternas).post(createpersonaexterna);

   router.route('/:id').get(getpersonaexterna)
   .put(updatepersonaexterna)
   .delete(deletepersonaexterna);

module.exports = router;