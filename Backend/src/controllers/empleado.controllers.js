const empleadoCtrl = {};

const Empleado = require('../models/empleado');

empleadoCtrl.getempleados = async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
};

empleadoCtrl.createempleado = async (req, res) => {
    const { cedula, nombre, contraseña, salario, cargo, passaporte,
        pais, experiencia
    } = req.body;
    const newEmpleado = new Empleado({
        cedula,
        nombre,
        contraseña,
        salario,
        cargo,
        passaporte,
        pais,
        experiencia
    });
    await newEmpleado.save();
    res.json({ message: 'Empleado Registrado' })
};

empleadoCtrl.getempleado = async (req, res) => {
    const empleado = await Empleado.findById(req.params.id);
    res.json(empleado)
};

empleadoCtrl.updateempleado = async (req, res) => {
    const { cedula, nombre, contraseña, salario, cargo, passaporte,
        pais, experiencia
    } = req.body;
    await Empleado.findByIdAndUpdate({ _id: req.params.id }, {
        cedula,
        nombre,
        contraseña,
        salario,
        cargo,
        passaporte,
        pais,
        experiencia
    });
    res.json({ message: 'Empleado Actualizado' })
};

empleadoCtrl.deleteempleado = async (req, res) => {
    const empleado = await Empleado.findByIdAndDelete(req.params.id);
    res.json({ message: 'Empleado Eliminado' })
};

module.exports = empleadoCtrl;