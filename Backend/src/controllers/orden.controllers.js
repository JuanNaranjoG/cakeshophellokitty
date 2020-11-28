const ordenCtrl = {};

const Orden = require('../models/orden');

ordenCtrl.getordenes = async (req, res) => {
    const ordenes = await Orden.find();
    res.json(ordenes);
};

ordenCtrl.createorden = async (req, res) => {
    const { pastel, tipo, fsolicitud, fentrega, descripcion,
        empleado, elaboracion, estado } = req.body;
    const newOrden = new Orden({
        pastel,
        tipo,
        fsolicitud,
        fentrega,
        descripcion,
        empleado,
        elaboracion,
        estado
    });
    await newOrden.save();
    res.json({ message: 'Orden Registrada' })
};

ordenCtrl.getorden = async (req, res) => {
    const orden = await Orden.findById(req.params.id);
    res.json(orden)
};

ordenCtrl.updateorden = async (req, res) => {
    const { pastel, tipo, fsolicitud, fentrega, descripcion,
        empleado, elaboracion, estado } = req.body;
    await Orden.findByIdAndUpdate({ _id: req.params.id }, {
        pastel,
        tipo,
        fsolicitud,
        fentrega,
        descripcion,
        empleado,
        elaboracion,
        estado
    });
    res.json({ message: 'Orden Actualizada' })
};

ordenCtrl.deleteorden = async (req, res) => {
    const orden = await Orden.findByIdAndDelete(req.params.id);
    res.json({ message: 'Orden Eliminada' })
};

module.exports = ordenCtrl;