const {Router} = require('express');
const router = Router();

const {getcocciones,
    createcoccion,
    getcoccion,
    updatecoccion,
    deletecoccion}= require('../controllers/coccion.controllers');

   router.route('/').get(getcocciones).post(createcoccion);

   router.route('/:id').get(getcoccion)
   .put(updatecoccion)
   .delete(deletecoccion);

module.exports = router;