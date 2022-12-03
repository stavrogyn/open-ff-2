import { Logger } from './logger.model';
import { ConsoleTransport } from './transport.model';

const consoleTransport = new ConsoleTransport();

export const logger = new Logger({ transports: [consoleTransport] });
