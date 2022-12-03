import { ILogger, LogType } from "./logger.types";
import { ITransport } from "./transport.types";

export class Logger implements ILogger {
  private transports: ITransport[];

  constructor(options: { transports: ITransport[] }) {
    this.transports = options.transports;
  }

  public info(log: string) {
    this.transports.forEach((transport => transport.sendLog({
      message: log,
      type: LogType.INFO,
    })));
  };

  public warning(log: string) {
    this.transports.forEach((transport => transport.sendLog({
      message: log,
      type: LogType.WARNING,
    })));
  };

  public error(log: string) {
    this.transports.forEach((transport => transport.sendLog({
      message: log,
      type: LogType.ERROR,
    })));
  };
}
