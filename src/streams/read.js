import path from 'node:path';
import fs from 'node:fs';

const read = async () => {
    const pathToFile = path.join('src', 'streams', 'files', 'fileToRead.txt');
    const readableStream = fs.createReadStream(pathToFile, 'utf-8');

    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
    
    readableStream.on('end', () => {
        console.log('\nFile reading completed.');
    });
};

await read();
