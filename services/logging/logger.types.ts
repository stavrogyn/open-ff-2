export enum LogType {
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

export interface ILogger {
  info: (log: any) => void;
  warning: (log: any) => void;
  error: (log: any) => void;
}

export interface LogFormat {
  message: string;
  type: LogType;
}
