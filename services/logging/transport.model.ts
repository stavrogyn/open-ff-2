import { LogFormat } from "./logger.types";
import { ITransport } from "./transport.types";


export class ConsoleTransport implements ITransport {
  public sendLog(log: LogFormat) {
    console.log(log);
  }
}
