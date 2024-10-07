import { workerData, parentPort } from 'node:worker_threads';

const n = workerData; 
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
    const result = nthFibonacci(n);
    parentPort.postMessage(result);
};

sendResult();