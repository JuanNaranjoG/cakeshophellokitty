const {Router} = require('express');
const router = Router();

const {gethornos,
    createhorno,
    gethorno,
    updatehorno,
    deletehorno}= require('../controllers/horno.controllers');

   router.route('/').get(gethornos).post(createhorno);

   router.route('/:id').get(gethorno)
   .put(updatehorno)
   .delete(deletehorno);

module.exports = router;