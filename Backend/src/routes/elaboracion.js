const {Router} = require('express');
const router = Router();

const {getelaboraciones,
    createelaboracion,
    getelaboracion,
    updateelaboracion,
    deleteelaboracion}= require('../controllers/elaboracion.controllers');

   router.route('/').get(getelaboraciones).post(createelaboracion);

   router.route('/:id').get(getelaboracion)
   .put(updateelaboracion)
   .delete(deleteelaboracion);

module.exports = router;