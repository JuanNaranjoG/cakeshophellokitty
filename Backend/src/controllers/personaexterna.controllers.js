const personaexternaCtrl = {};

const Personaexterna = require('../models/personaexterna');

personaexternaCtrl.getpersonaexternas = async (req, res) => {
    const personaexternas = await Personaexterna.find();
    res.json(personaexternas);
};

personaexternaCtrl.createpersonaexterna = async (req, res) => {
    const { cedula, nombre, direccion, fecha } = req.body;
    const newPersonaexterna = new Personaexterna({
        cedula,
        nombre,
        direccion,
        fecha
    });
    await newPersonaexterna.save();
    res.json({ message: 'Persona externa Registrada' })
};

personaexternaCtrl.getpersonaexterna = async (req, res) => {
    const personaexterna = await Personaexterna.findById(req.params.id);
    res.json(personaexterna)
};

personaexternaCtrl.updatepersonaexterna = async (req, res) => {
    const { cedula, nombre, direccion, fecha } = req.body;
    await Personaexterna.findByIdAndUpdate({_id: req.params.id},{
        cedula,
        nombre,
        direccion,
        fecha
    });
    res.json({ message: 'Persona externa Registrada' })
};

personaexternaCtrl.deletepersonaexterna = async (req, res) => {
    const personaexterna = await Personaexterna.findByIdAndDelete(req.params.id);
    res.json({ message: 'Persona externa Eliminada' })
};

module.exports = personaexternaCtrl;