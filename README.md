# Frontend E-commerce con React y Vite

Este proyecto es una aplicación de e-commerce desarrollada con React y Vite, que utiliza json-server para simular una API REST.

## Requisitos previos

- Node.js (versión recomendada: 18.x o superior)
- npm (incluido con Node.js)

## Guía de instalación

1. Clona este repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd frontend-ecommerce
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecutar el proyecto

Para ejecutar el proyecto necesitarás iniciar tanto el servidor de desarrollo de Vite como json-server (base de datos simulada).

1. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Esto iniciará la aplicación en modo desarrollo, generalmente en `http://localhost:5173`.

2. En otra terminal, inicia json-server para simular la API:
   ```bash
   npm run json-server
   ```
   Esto iniciará json-server en `http://localhost:3000`.

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run json-server` - Inicia json-server para simular la API

## Sistema de Roles

La aplicación cuenta con un sistema de roles que permite diferentes niveles de acceso:

### Administrador

- **Email**: admin@email.com
- **Contraseña**: 123456
