const {Router} = require('express');
const router = Router();

const {getempresas,
    createempresa,
    getempresa,
    updateempresa,
    deleteempresa}= require('../controllers/empresa.controllers');

   router.route('/').get(getempresas).post(createempresa);

   router.route('/:id').get(getempresa)
   .put(updateempresa)
   .delete(deleteempresa);

module.exports = router;