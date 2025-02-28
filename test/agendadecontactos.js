Feature('agendadecontactos');

Scenario('Crear nuevo contacto', ({ I }) => {
  I.amOnPage('https://gc-frontend-897250120630.us-central1.run.app/');
    I.saveScreenshot('1-inicio.png');

    I.click('Mostrar Agenda de Contactos');
    I.saveScreenshot('2-ContactosExistentes.png');

    I.fillField('Nombre:', 'PruebaE2E');
    I.fillField('Teléfono:', '1234');
    I.fillField('Email:', 'PruebaE2E@gmail.com');
    I.saveScreenshot('3-contactoagregado.png');
    I.click('Agregar Contacto');

    I.click('Mostrar Agenda de Contactos');
    I.saveScreenshot('4-exitoso.png');

});
