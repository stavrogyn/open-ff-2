import { Logger } from './logger.model';
import { LogProdiver } from './logger.types';
import { Transport } from './transport.model';

const transport = new Transport({
  prodiver: LogProdiver.CONSOLE,
});

export const logger = new Logger(transport);
