const Contacto = require("../models/Contacto");

// Obtener todos los contactos
const obtenerContactos = async (req, res) => {
  const contactos = await Contacto.find();
  res.json(contactos);
};

// Agregar un contacto
const agregarContacto = async (req, res) => {
  const nuevoContacto = new Contacto(req.body);
  await nuevoContacto.save();
  res.json({ mensaje: "Contacto agregado" });
};

// Eliminar un contacto
const eliminarContacto = async (req, res) => {
  await Contacto.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Contacto eliminado" });
};

module.exports = { obtenerContactos, agregarContacto, eliminarContacto };