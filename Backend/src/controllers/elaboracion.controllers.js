const elaboracionCtrl = {};

const Elaboracion = require('../models/elaboracion');

elaboracionCtrl.getelaboraciones = async (req, res) => {
    const elaboraciones = await Elaboracion.find();
    res.json(elaboraciones);
};

elaboracionCtrl.createelaboracion = async (req, res) => {
    const { decorador, finicio, ffin, peso } = req.body;
    const newElaboracion = new Elaboracion({
        decorador,
        finicio,
        ffin,
        peso
    });
    await newElaboracion.save();
    res.json({ message: 'Elaboracion Registrada' })
};

elaboracionCtrl.getelaboracion = async (req, res) => {
    const elaboracion = await Elaboracion.findById(req.params.id);
    res.json(elaboracion)
};

elaboracionCtrl.updateelaboracion = async (req, res) => {
    const { decorador, finicio, ffin, peso } = req.body;
    await Elaboracion.findByIdAndUpdate({ _id: req.params.id }, {
        decorador,
        finicio,
        ffin,
        peso
    });
    res.json({ message: 'Elaboracion Actualizada' })
};


elaboracionCtrl.deleteelaboracion = async (req, res) => {
    const elaboracion = await Elaboracion.findByIdAndDelete(req.params.id);
    res.json({ message: 'Elaboracion Eliminada' })
};

module.exports = elaboracionCtrl;