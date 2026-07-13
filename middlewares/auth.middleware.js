import jwt from "jsonwebtoken";

export function verificarToken(req, res, next) {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      mensaje: "Debe enviar un token."
    });
  }

  const token = authHeader.split(" ")[1];

  try {

    const usuario = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.usuario = usuario;

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      mensaje: "Token inválido o expirado."
    });

  }

}