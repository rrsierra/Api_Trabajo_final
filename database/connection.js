import { Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(
  process.env.DB_NAME, // nombre de la BD
  process.env.DB_USER, // usuario
  process.env.DB_PASSWORD, // contraseña
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    dialect: "mysql", // utilizamos MySQL

    // logging: false silencia los logs SQL en consola.
    
    logging: false,
  },
);

export default sequelize;
