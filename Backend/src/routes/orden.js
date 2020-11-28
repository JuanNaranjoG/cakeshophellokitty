const {Router} = require('express');
const router = Router();

const {getordenes,
    createorden,
    getorden,
    updateorden,
    deleteorden}= require('../controllers/orden.controllers');

   router.route('/').get(getordenes).post(createorden);

   router.route('/:id').get(getorden)
   .put(updateorden)
   .delete(deleteorden);

module.exports = router;