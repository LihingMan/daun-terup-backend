import _ from "lodash";

export enum NodeEnvironments {
  PROD = "prod",
  DEVELOPMENT = "development",
  LOCAL = "local",
}

namespace ServerConfig {
  const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "local";
  const DATABASE_URL = process.env.DATABASE_URL;

  // * Check is production
  export function isProduction(): Readonly<boolean> {
    return NODE_ENV === "prod";
  }

  export function isDevelopment(): Readonly<boolean> {
    return NODE_ENV === "development";
  }

  // * Check is local
  export function isLocal(): Readonly<boolean> {
    return NODE_ENV === "local";
  }

  export function nodeEnvironment() {
    return NODE_ENV;
  }
}

export default ServerConfig;
