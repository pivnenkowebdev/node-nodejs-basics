import { createHmac } from 'node:crypto';
import path from 'node:path';
import fs from 'node:fs';

const calculateHash  = async () => {
    const pathToFile = path.join('src', 'hash', 'files', 'fileToCalculateHashFor.txt');
    const key = 'yaustal';
    const hash = createHmac('sha256', key);

    return new Promise((resolve, reject) => {
        const fileStream = fs.createReadStream(pathToFile);

        fileStream.on('data', (chunk) => {
            hash.update(chunk);
        });

        fileStream.on('end', () => {
            const digest = hash.digest('hex');
            console.log(digest);
            resolve(digest);
        });

        fileStream.on('error', (error) => {
            console.error('Error:', error);
            reject(error);
        });
    });
};

await calculateHash ();
