# Usa una imagen oficial de Node.js
FROM node:18

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el resto del código de la aplicación
COPY ./ ./

# Instalar dependencias
RUN npm install

# Exponer el puerto 5000
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["node", "server.js"]
