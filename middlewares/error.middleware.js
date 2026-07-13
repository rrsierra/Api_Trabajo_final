export default function errorMiddleware(error, req, res, next) {

  console.error(error);

  res.status(500).json({
    success: false,
    mensaje: error.message || "Error interno del servidor."
  });

}