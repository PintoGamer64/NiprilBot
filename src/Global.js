// Node NModules
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';

// Definitions
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export {
    __dirname
}