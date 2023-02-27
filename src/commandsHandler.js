// Node Modules
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

// Local Modules
import { __dirname } from './Global.js';

// Function Export
export default function SearchCommands() {
    function getSlashCommands() {
        return readdirSync(join(__dirname, 'commands'))
    }
    function getAppCommands(params) {
        return ['Unavailable']
    }
    return {
        getSlashCommands
    }
}