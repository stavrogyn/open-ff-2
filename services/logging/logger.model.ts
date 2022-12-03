import { ILogger, ITransport, LogLevel } from "./logger.types";

export class Logger implements ILogger {
  transport: ITransport;

  constructor(transport: ITransport) {
    this.transport = transport;
  }

  info(log: any) {
    this.transport.sendLog(log, {
      level: LogLevel.INFO,
    });
  };

  warning(log: any) {
    this.transport.sendLog(log, {
      level: LogLevel.WARNING,
    });
  };

  error(log: any) {
    this.transport.sendLog(log, {
      level: LogLevel.ERROR,
    });
  };
}
