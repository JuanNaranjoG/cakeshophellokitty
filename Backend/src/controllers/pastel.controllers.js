const pastelCtrl = {};

const Pastel = require('../models/pastel');

pastelCtrl.getpasteles = async (req, res) => {
    const pasteles = await Pastel.find();
    res.json(pasteles);
};
pastelCtrl.createpastel = async (req, res) => {
    const { nombre } = req.body;
    const newPastel = new Pastel({
        nombre
    });
    await newPastel.save();
    res.json({ message: 'Pastel Registrado' })
};

pastelCtrl.getpastel = async (req, res) => {
    const pastel = await Pastel.findById(req.params.id);
    res.json(pastel)
};

pastelCtrl.updatepastel = async (req, res) => {
    const { nombre } = req.body;
    await Pastel.findByIdAndUpdate({_id: req.params.id},{
        nombre
    });
    res.json({ message: 'Pastel Actualizado' })
};

pastelCtrl.deletepastel = async (req, res) => {
    const pastel = await Pastel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pastel Eliminado' })
};

module.exports = pastelCtrl;