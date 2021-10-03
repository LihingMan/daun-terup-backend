import { Sequelize } from "sequelize";
import { initLogger } from "@src/helper/logger.helper";

const logger = initLogger("database-connect");

const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const dbDialect = "postgres";

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  dialect: dbDialect,
});

export { Sequelize, sequelize };
