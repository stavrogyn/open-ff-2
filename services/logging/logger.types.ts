export enum LogLevel {
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

export enum LogProdiver {
  CONSOLE = "console",
  FILE = "file",
  HTTP = "http",
}

export interface ILogger {
  info: (log: any) => void;
  warning: (log: any) => void;
  error: (log: any) => void;
}

export interface TransportConfig {
  prodiver: LogProdiver;
}

export interface ITransport {
  sendLog: (log: any, options: {
    level: LogLevel;
  }) => void;
}
