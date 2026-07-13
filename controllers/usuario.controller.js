import * as usuarioService from "../services/usuario.service.js";

// =======================
// REGISTRAR
// =======================
export async function crear(req, res, next) {
  try {
    const nuevoUsuario = await usuarioService.crear(req.body);

    res.status(201).json({
      success: true,
      mensaje: "Usuario creado correctamente.",
      usuario: nuevoUsuario,
    });

  } catch (error) {
    next(error);
  }
}

// =======================
// LOGIN
// =======================
export async function login(req, res, next) {
  try {

    const { email, password } = req.body;

    const resultado = await usuarioService.login(email, password);

    res.json({
      success: true,
      mensaje: "Login exitoso",
      ...resultado
    });

  } catch (error) {
    next(error);
  }
}

// =======================
// VER PERFIL
// =======================
export async function perfil(req, res, next) {
  try {

    const usuario = await usuarioService.obtenerPerfil(req.usuario.id);

    res.json({
      success: true,
      usuario
    });

  } catch (error) {
    next(error);
  }
}

// =======================
// ACTUALIZAR
// =======================
export async function actualizar(req, res, next) {
  try {

    const usuarioActualizado = await usuarioService.actualizar(
      req.usuario.id,
      req.body
    );

    res.json({
      success: true,
      mensaje: "Usuario actualizado correctamente.",
      usuario: usuarioActualizado
    });

  } catch (error) {
    next(error);
  }
}

// =======================
// ELIMINAR
// =======================
export async function eliminar(req, res, next) {
  try {

    const resultado = await usuarioService.eliminar(req.usuario.id);

    res.json({
      success: true,
      ...resultado
    });

  } catch (error) {
    next(error);
  }
}