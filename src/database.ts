import { Sequelize } from "sequelize";
import { initLogger } from "@src/helper/logger.helper";

namespace Database {
  const logger = initLogger("database-connect");

  const dbHost = process.env.DB_HOST;
  const dbName = process.env.DB_NAME;

  const dbUsername = process.env.DB_USERNAME;
  const dbPassword = process.env.DB_PASSWORD;

  const dbDialect = "postgres";

  export function initConnection() {
    const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
      host: dbHost,
      dialect: dbDialect,
    });

    return sequelize;
  }
}

export default Database;
