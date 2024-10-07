import { Worker } from 'node:worker_threads';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToWorker = path.join(__dirname , 'worker.js');

const performCalculations = async (n) => {
    return new Promise((resolve, reject) => {

        const worker = new Worker(pathToWorker, {
            workerData: n
        });

        worker.on('message', (result) => {
            resolve(result);
        });

        worker.on('error', (error) => {
            reject(error);
        });
    });
};

const result = await performCalculations(10);
console.log('The 10th Fibonacci number is:', result);
