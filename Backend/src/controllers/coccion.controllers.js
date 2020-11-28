const coccionCtrl = {};

const Coccion = require('../models/coccion');

coccionCtrl.getcocciones = async (req, res) => {
    const cocciones = await Coccion.find();
    res.json(cocciones);
};
coccionCtrl.createcoccion = async (req, res) => {
    const { estado, horno, finicio, ffin } = req.body;
    const newCoccion = new Coccion({
        estado,
        horno,
        finicio,
        ffin
    });
    await newCoccion.save();
    res.json({ message: 'Coccion Registrada' })
};

coccionCtrl.getcoccion = async (req, res) => {
    const coccion = await Coccion.findById(req.params.id);
    res.json(coccion)
};
coccionCtrl.updatecoccion = async (req, res) => {
    const { estado, horno, finicio, ffin } = req.body;
    await Coccion.findByIdAndUpdate({_id: req.params.id}, {
        estado,
        horno,
        finicio,
        ffin
    });
    res.json({ message: 'Coccion Actualizada' })
};

coccionCtrl.deletecoccion = async (req, res) => {
    const coccion = await Coccion.findByIdAndDelete(req.params.id);
    res.json({ message: 'Coccion Eliminada' })
};

module.exports = coccionCtrl;