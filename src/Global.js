// Node NModules
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';

// Commands
import Ping from './commands/pingSlash.js';
import Hello from './commands/helloSlash.js';

// Definitions
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const commands = [new Ping(), new Hello()]

console.log(commands);

export {
    __dirname,
    commands
}