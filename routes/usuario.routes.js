import { Router } from "express";

import {
  manejarErroresValidacion,
  validarCrearUsuario,
  validarLogin,
} from "../validators/usuario.validator.js";

import * as usuarioController from "../controllers/usuario.controller.js";

import { logPeticion } from "../middlewares/logger.middleware.js";
import { verificarToken } from "../middlewares/auth.middleware.js";

const router = Router();

// ==========================
// REGISTRO
// ==========================
router.post(
  "/usuarios/register",
  logPeticion,
  validarCrearUsuario,
  manejarErroresValidacion,
  usuarioController.crear
);

// ==========================
// LOGIN
// ==========================
router.post(
  "/usuarios/login",
  logPeticion,
  validarLogin,
  manejarErroresValidacion,
  usuarioController.login
);

// ==========================
// PERFIL
// ==========================
router.get(
  "/usuarios/perfil",
  verificarToken,
  usuarioController.perfil
);

// ==========================
// ACTUALIZAR
// ==========================
router.put(
  "/usuarios/perfil",
  verificarToken,
  usuarioController.actualizar
);

// ==========================
// ELIMINAR
// ==========================
router.delete(
  "/usuarios/perfil",
  verificarToken,
  usuarioController.eliminar
);

export default router;