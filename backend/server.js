const express = require('express');
const db = require('./database'); // Importa la base de datos
const cors = require('cors');
const app = express();
app.use(cors()); // Habilita CORS
app.use(express.json()); // Middleware para manejar JSON


// Ruta principal
app.get('/', (req, res) => {
  res.send('API de Agenda de Contactos');
});

// Ruta para agregar un contacto
app.post('/contactos', (req, res) => {
  const { nombre, telefono, email } = req.body;

  if (!nombre || !telefono || !email) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  // Consulta para insertar el nuevo contacto
  const query = `INSERT INTO contactos (nombre, telefono, email) VALUES (?, ?, ?)`;
  db.run(query, [nombre, telefono, email], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, nombre, telefono, email });
  });
});

// Ruta para obtener los contactos
app.get('/contactos', (req, res) => {
  db.all(`SELECT * FROM contactos`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Ruta para eliminar un contacto
app.delete('/contactos/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM contactos WHERE id = ?', [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: "Contacto eliminado correctamente" });
    }
  });
});

// Exporta la aplicación para las pruebas
module.exports = app;

// Iniciar el servidor
app.listen(5000, () => {
  console.log("🚀 Servidor corriendo en http://localhost:5000");
});