const hornoCtrl = {};

const Horno = require('../models/horno');

hornoCtrl.gethornos = async (req, res) => {
    const hornos = await Horno.find();
    res.json(hornos);
};

hornoCtrl.createhorno = async (req, res) => {
    const { temperatura, fecha } = req.body;
    const newHorno = new Horno({
        temperatura,
        fecha,
    });
    await newHorno.save();
    res.json({ message: 'Horno Registrado' })
};

hornoCtrl.gethorno = async (req, res) => {
    const horno = await Horno.findById(req.params.id);
    res.json(horno)
};

hornoCtrl.updatehorno = async (req, res) => {
    const { temperatura, fecha } = req.body;
    await Horno.findByIdAndUpdate({ _id: req.params.id }, {
        temperatura,
        fecha,
    });
    res.json({ message: 'Horno Actualizado' })
};

hornoCtrl.deletehorno = async (req, res) => {
    const horno = await Horno.findByIdAndDelete(req.params.id);
    res.json({ message: 'Horno Eliminado' })
};

module.exports = hornoCtrl;