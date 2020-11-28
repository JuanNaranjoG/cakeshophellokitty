const empresaCtrl = {};

const Empresa = require('../models/empresa');

empresaCtrl.getempresas = async (req, res) => {
    const empresas = await Empresa.find();
    res.json(empresas);
};

empresaCtrl.createempresa = async (req, res) => {
    const { nit, nombre, direccion} = req.body;
    const newEmpresa = new Empresa({
        nit,
        nombre,
        direccion
    });
    await newEmpresa.save();
    res.json({ message: 'Empresa Registrada' })
};

empresaCtrl.getempresa = async (req, res) => {
    const empresa = await Empresa.findById(req.params.id);
    res.json(empresa)
};

empresaCtrl.updateempresa = async (req, res) => {
    const { nit, nombre, direccion} = req.body;
    await Empresa.findByIdAndUpdate({ _id: req.params.id }, {
        nit,
        nombre,
        direccion
    });
    res.json({ message: 'Empresa Actualizada' })
};

empresaCtrl.deleteempresa = async (req, res) => {
    const empresa = await Empresa.findByIdAndDelete(req.params.id);
    res.json({ message: 'Empresa Eliminada' })
};

module.exports = empresaCtrl;