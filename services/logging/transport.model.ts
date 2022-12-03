import { ITransport, TransportConfig, LogProdiver } from "./logger.types";


export class Transport implements ITransport {
  config: TransportConfig;

  constructor(config: TransportConfig) {
    this.config = config;
  }

  sendLog(log: any, options: any) {
    if (this.config.prodiver === LogProdiver.CONSOLE) {
      console.log(log, options);
    }

    console.log('Log didnt send because of invalid provider');
  }
}
