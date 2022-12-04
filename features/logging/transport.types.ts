import { LogFormat } from "./logger.types";

export interface ITransport {
  sendLog: (log: LogFormat) => void;
}
