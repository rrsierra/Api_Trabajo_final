import { body, validationResult } from "express-validator";

// ==========================
// VALIDACIONES PARA REGISTRO
// ==========================
export const validarCrearUsuario = [
  body("nombre")
    .trim()
    .notEmpty()
    .withMessage("El nombre es obligatorio.")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre debe tener entre 2 y 100 caracteres."),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("El email es obligatorio.")
    .isEmail()
    .withMessage("Debe ingresar un email válido.")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria.")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres."),

  body("rol")
    .optional()
    .isIn(["admin", "usuario"])
    .withMessage("El rol debe ser 'admin' o 'usuario'."),
];

// ==========================
// VALIDACIONES PARA LOGIN
// ==========================
export const validarLogin = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("El email es obligatorio.")
    .isEmail()
    .withMessage("Debe ingresar un email válido.")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria."),
];

// ==========================
// VALIDACIONES PARA ACTUALIZAR
// ==========================
export const validarActualizarUsuario = [
  body("nombre")
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre debe tener entre 2 y 100 caracteres."),

  body("email")
    .optional()
    .trim()
    .isEmail()
    .withMessage("Debe ingresar un email válido.")
    .normalizeEmail(),

  body("password")
    .optional()
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres."),

  body("rol")
    .optional()
    .isIn(["admin", "usuario"])
    .withMessage("El rol debe ser 'admin' o 'usuario'."),
];

// ==========================
// MANEJO DE ERRORES
// ==========================
export function manejarErroresValidacion(req, res, next) {
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(422).json({
      success: false,
      mensaje: "Error de validación.",
      errores: errores.array(),
    });
  }

  next();
}