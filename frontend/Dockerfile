# Etapa 1: Construcción de React
FROM node:18-alpine as build
WORKDIR /app/frontend
COPY ./ ./
RUN npm install
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/templates/nginx.conf.template

# Exponer puerto (Cloud Run lo asigna dinámicamente)
EXPOSE 8080

# Reemplazar ${PORT} en nginx.conf.template antes de iniciar Nginx
CMD ["sh", "-c", "envsubst '$$PORT' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]


