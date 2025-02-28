# Etapa 1: Construir la aplicación con Node.js
FROM node:18-alpine as build

WORKDIR /app/frontend

# Copiar el resto de los archivos
COPY ./ ./

# Instalar las dependencias
RUN npm install

# Construir la aplicación React
RUN npm run build

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto correcto
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

