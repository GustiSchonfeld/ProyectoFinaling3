const request = require('supertest');
const app = require('../server'); // Importa tu servidor Express
const http = require('http');

let server;

beforeAll((done) => {
    server = http.createServer(app);
    server.listen(5001, done); // Inicia el servidor antes de las pruebas
  });
  
  afterAll((done) => {
    server.close(done); // Cierra el servidor después de las pruebas
  });

describe('API de Contactos', () => {
  
  test('GET /contactos debe devolver un array', async () => {
    const response = await request(app).get('/contactos');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });



  test('Crea y elimina un nuevo contacto', async () => {
    const nuevoContacto = { 
      nombre: 'messi', 
      telefono: '54321', 
      email: 'messi@example.com' 
    };
    
    const crear = await request(app)
      .post('/contactos')
      .send(nuevoContacto);

    expect(crear.statusCode).toBe(201);
    expect(crear.body.nombre).toBe(nuevoContacto.nombre);
    expect(crear.body.telefono).toBe(nuevoContacto.telefono);
    expect(crear.body.email).toBe(nuevoContacto.email);

    const contactoId = crear.body.id;

    const eliminar = await request(app)
      .delete(`/contactos/${contactoId}`);

    expect(eliminar.statusCode).toBe(200);
    expect(eliminar.body.message).toBe('Contacto eliminado correctamente');
  });

});
