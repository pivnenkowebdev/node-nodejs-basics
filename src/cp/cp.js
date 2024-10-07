import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const scriptPath = join(__dirname, 'files', 'script.js');

    try {
        const child = fork(scriptPath, args);

        child.stdout.on('data', (data) => process.stdout.write(`Child: ${data}`));
        child.stderr.on('data', (data) => process.stderr.write(`Child Error: ${data}`));

        process.stdin.on('data', (chunk) => child.stdin.write(chunk));
        process.stdin.on('end', () => {
            child.stdin.write('CLOSE\n');
            child.stdin.end();
        });

        child.on('exit', (code) => {
            console.log(`Child process exited with code: ${code}`);
        });

    } catch (error) {
        console.error('Error spawning child process:', error);
    }
};

spawnChildProcess(['arg1', 'arg2']);
