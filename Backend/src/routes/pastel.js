const {Router} = require('express');
const router = Router();

const {getpasteles,
    createpastel,
    getpastel,
    updatepastel,
    deletepastel}= require('../controllers/pastel.controllers');

   router.route('/').get(getpasteles).post(createpastel);

   router.route('/:id').get(getpastel)
   .put(updatepastel)
   .delete(deletepastel);

module.exports = router;