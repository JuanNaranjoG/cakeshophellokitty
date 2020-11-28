const {Router} = require('express');
const router = Router();

const { getempleados,
     createempleado,
     getempleado,
     updateempleado,
     deleteempleado
    }= require('../controllers/empleado.controllers');

router.route('/').get(getempleados).post(createempleado);

router.route('/:id').get(getempleado)
.put(updateempleado)
.delete(deleteempleado);

module.exports = router;