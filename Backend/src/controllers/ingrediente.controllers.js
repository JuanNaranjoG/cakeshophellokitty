const ingredienteCtrl = {};

const Ingrediente = require('../models/ingrediente');

ingredienteCtrl.getingredientes = async (req, res) => {
    const ingredientes = await Ingrediente.find();
    res.json(ingredientes);
};

ingredienteCtrl.createingrediente = async (req, res) => {
    const { nombre, medida } = req.body;
    const newIngrediente = new Ingrediente({
        nombre,
        medida
    });
    await newIngrediente.save();
    res.json({ message: 'Ingrediente Registrado' })
};

ingredienteCtrl.getingrediente = async (req, res) => {
    const ingrediente = await Ingrediente.findById(req.params.id);
    res.json(ingrediente)
};

ingredienteCtrl.updateingrediente = async (req, res) => {
    const { nombre, medida } = req.body;
    await Coccion.findByIdAndUpdate({_id: req.params.id},{
        nombre,
        medida
    });
    res.json({ message: 'Ingrediente Actualizado' })
};

ingredienteCtrl.deleteingrediente = async (req, res) => {
    const ingrediente = await Ingrediente.findByIdAndDelete(req.params.id);
    res.json({ message: 'Ingrediente Eliminado' })
};

module.exports = ingredienteCtrl;