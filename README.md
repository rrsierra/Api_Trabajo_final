# API REST - Gestión de Usuarios

Trabajo Final del Módulo 4 - Desarrollo de una API RESTful con **Node.js**, **Express**, **MySQL** y **Sequelize**.

## 📋 Descripción

Esta API permite gestionar usuarios mediante operaciones CRUD y autenticación con JSON Web Token (JWT).

Las funcionalidades principales son:

- Registro de usuarios.
- Inicio de sesión.
- Consulta del perfil del usuario autenticado.
- Actualización de datos del usuario.
- Eliminación de la cuenta.
- Protección de rutas mediante JWT.
- Hashing de contraseñas con bcrypt.
- Validaciones de datos.
- Middleware de manejo de errores.
- Registro de solicitudes (Logger).

---

# 🚀 Tecnologías utilizadas

- Node.js
- Express
- MySQL
- Sequelize
- JWT (jsonwebtoken)
- bcrypt
- dotenv
- express-validator
- Nodemon

---

# 📁 Estructura del proyecto

```
API-REST-TRABAJO-FINAL
│
├── config/
│
├── controllers/
│   └── usuario.controller.js
│
├── database/
│   └── connection.js
│    models/
│   └── Usuario.js
│
├── middlewares/
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   └── logger.middleware.js
│
├── routes/
│   └── usuario.routes.js
│
├── services/
│   └── usuario.service.js
│
├── validators/
│   └── usuario.validator.js
│
├── .env
├── index.js
└── package.json
```

---

# ⚙️ Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/usuario/API-REST-TRABAJO-FINAL.git
```

## 2. Ingresar al proyecto

```bash
cd API-REST-TRABAJO-FINAL
```

## 3. Instalar dependencias

```bash
npm install
```

## 4. Configurar variables de entorno

Crear un archivo **.env** utilizando el archivo .env.example

```env
PORT=3001

DB_HOST=localhost
DB_PORT=3306
DB_NAME=nombre_base
DB_USER=root
DB_PASSWORD=tu_password
JWT_SECRET=tu_clave_secreta

```

---

## 5. Crear la base de datos

Crear una base MySQL.

Ejemplo:

```sql
CREATE DATABASE Api_Trabajo_Final;
```

La tabla de usuarios será creada automáticamente por Sequelize.

---

## 6. Ejecutar la aplicación

Modo desarrollo

```bash
npm run dev
```

Modo producción

```bash
npm start
```

Servidor

```
http://localhost:3001
```

---

# 🔐 Autenticación

La API utiliza **JSON Web Token (JWT)**.

Después de iniciar sesión, el usuario recibirá un token que deberá enviar en el encabezado de las rutas protegidas.

Ejemplo:

```
Authorization: Bearer TU_TOKEN
```

---

# 📌 Endpoints

## Registro

**POST**

```
http://localhost:3001/api/usuarios/register
```

Body

```json
{
    "nombre":"Roberto",
    "email":"Roberto@gmail.com",
    "password":"123456"
}
```

---

## Login

**POST**

```
http://localhost:3001/api/usuarios/login
```

Body

```json
{
    "email":"Roberto@gmail.com",
    "password":"123456"
}
```

Respuesta

```json
{
    "token":"JWT..."
}
```

---

## Ver perfil

**GET**

```
http://localhost:3001/api/usuarios/perfil
```

Requiere JWT.

---

## Actualizar usuario

**PUT**

```
http://localhost:3001/api/usuarios/perfil
```

Requiere JWT.

Ejemplo

```json
{
    "nombre":"Nuevo Nombre"
}
```

---

## Eliminar usuario

**DELETE**

```
http://localhost:3001/api/usuarios/perfil
```

Requiere JWT.

---

# 🛡 Seguridad

La aplicación implementa:

- Contraseñas cifradas con bcrypt.
- Autenticación mediante JWT.
- Validación de datos de entrada.
- Middleware para proteger rutas privadas.
- Manejo centralizado de errores.

---

# 🧪 Pruebas

La API puede probarse utilizando:

- Postman


Flujo recomendado:

1. Registrar un usuario.
2. Iniciar sesión.
3. Obtener el token.
4. Acceder al perfil.
5. Actualizar datos.
6. Verificar cambios.
7. Eliminar usuario.

---

# 📚 Autor

**Ramon Roberto Sierra Gerez**

Trabajo Final - Desarrollo de una API RESTful con Node.js, Express, Sequelize y MySQL.

---

# 📄 Licencia

Proyecto desarrollado con fines educativos.