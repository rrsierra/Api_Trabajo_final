import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Usuario from "../database/models/Usuario.js";

const SALT_ROUNDS = 10;

// =======================
// REGISTRAR USUARIO
// =======================
export async function crear(datos) {

  const { nombre, email, password, rol } = datos;

  const existe = await Usuario.findOne({
    where: { email }
  });

  if (existe) {
    throw new Error("El correo ya está registrado");
  }

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  const nuevoUsuario = await Usuario.create({
    nombre,
    email,
    password: passwordHash,
    rol
  });

  const { password: _, ...usuarioSinPassword } = nuevoUsuario.toJSON();

  return usuarioSinPassword;
}

// =======================
// LOGIN
// =======================
export async function login(email, password) {

  const usuario = await Usuario.findOne({
    where: { email }
  });

  if (!usuario) {
    throw new Error("Credenciales incorrectas");
  }

  const coincide = await bcrypt.compare(
    password,
    usuario.password
  );

  if (!coincide) {
    throw new Error("Credenciales incorrectas");
  }

  const token = jwt.sign(
    {
      id: usuario.id,
      email: usuario.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h"
    }
  );

  return {
    token,
    usuario: {
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol
    }
  };

}

// =======================
// PERFIL
// =======================
export async function obtenerPerfil(id) {

  const usuario = await Usuario.findByPk(id, {
    attributes: {
      exclude: ["password"]
    }
  });

  if (!usuario) {
    throw new Error("Usuario no encontrado");
  }

  return usuario;

}

// =======================
// ACTUALIZAR
// =======================
export async function actualizar(id, datos) {

  const usuario = await Usuario.findByPk(id);

  if (!usuario) {
    throw new Error("Usuario no encontrado");
  }

  if (datos.password) {
    datos.password = await bcrypt.hash(
      datos.password,
      SALT_ROUNDS
    );
  }

  await usuario.update(datos);

  return await obtenerPerfil(id);

}

// =======================
// ELIMINAR
// =======================
export async function eliminar(id) {

  const usuario = await Usuario.findByPk(id);

  if (!usuario) {
    throw new Error("Usuario no encontrado");
  }

  await usuario.destroy();

  return {
    mensaje: "Usuario eliminado correctamente"
  };

}

// =======================
// BUSCAR POR EMAIL
// =======================
export async function obtenerPorEmail(email) {

  return await Usuario.findOne({
    where: { email }
  });

}