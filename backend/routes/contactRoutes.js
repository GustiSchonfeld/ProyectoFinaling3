const express = require("express");
const router = express.Router();
const { obtenerContactos, agregarContacto, eliminarContacto } = require("../controllers/contactController");

router.get("/", obtenerContactos);
router.post("/", agregarContacto);
router.delete("/:id", eliminarContacto);

module.exports = router;