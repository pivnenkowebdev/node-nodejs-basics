import path from 'node:path';
import fs from 'node:fs';

const write = async () => {
    const pathToFile = path.join('src', 'streams', 'files', 'fileToWrite.txt');
    const writableStream = fs.createWriteStream(pathToFile);

    process.stdin.setEncoding('utf-8');
    process.stdin.on('data', (chunk) => {
        writableStream.write(chunk);
    })

    process.stdin.on('end', () => {
        writableStream.end();
    })
};

await write();