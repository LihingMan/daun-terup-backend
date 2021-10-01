import ServerConfig from "@src/config/server.config";
import winston, { format } from "winston";
import _ from "lodash";
import expressWinston, { ExpressWinstonRequest } from "express-winston";

export function initLogger(tag: string, extraTags?: Object): winston.Logger {
  if (!ServerConfig.isLocal()) {
    return winston.createLogger({
      level: "info", // For non-local env, debug level log will not be store
      defaultMeta: { tag: tag, ...extraTags },
      // format below for deployment (dev/prod) depending on which hosting service used
      // format: format.combine(
      //   format((info, opts) => {
      //     // Google cloud take severity as level and uppercase format
      //     info["severity"] = info.level.toUpperCase();
      //     delete info.level;
      //     return info;
      //   })(),
      //   format.json()
      // ),
      transports: [new winston.transports.Console()],
      exitOnError: false,
    });
  }

  return winston.createLogger({
    level: "debug",
    defaultMeta: { tag: tag, ...extraTags },
    transports: [
      new winston.transports.Console({
        format: format.combine(
          format.colorize(),
          format.splat(),
          format.simple(),
          format.printf(consoleLogFormat)
        ),
      }),
    ],
    exitOnError: false,
  });
}

function consoleLogFormat({
  message,
  level,
  tag,
  subTag,
  ...optionArgs
}: winston.Logform.TransformableInfo) {
  if (_.isObject(message)) {
    message = JSON.stringify(message, null, 2);
  }

  let logString = `${level} [${tag}] ${
    subTag ? `(${subTag})` : ""
  }: ${message} `;

  if (!_.isEmpty(optionArgs)) {
    logString += `${JSON.stringify(optionArgs, null, 2)}`;
    return logString;
  }

  return logString;
}
