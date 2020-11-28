const { Router } = require('express');
const router = Router();

const { getingredientes,
    createingrediente,
    getingrediente,
    updateingrediente,
    deleteingrediente } = require('../controllers/ingrediente.controllers');

router.route('/').get(getingredientes).post(createingrediente);

router.route('/:id').get(getingrediente)
    .put(updateingrediente)
    .delete(deleteingrediente);

module.exports = router;