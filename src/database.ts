import { Sequelize } from "sequelize";
import { initLogger } from "@src/helper/logger.helper";

namespace Database {
  const logger = initLogger("database-connect");

  const dbHost = process.env.DB_HOST;
  const dbName = process.env.DB_NAME;

  const dbUsername = process.env.DB_USERNAME;
  const dbPassword = process.env.DB_PASSWORD;

  const dbDialect = "postgres";

  export function init() {
    const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
      host: dbHost,
      dialect: dbDialect,
    });

    sequelize
      .authenticate()
      .then(() => {
        logger.info("Connection has been established successfully.");
      })
      .catch((err) => {
        logger.error("Unable to connect to the database:", err);
      });
  }
}

export default Database;
