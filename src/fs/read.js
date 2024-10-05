import fs from 'node:fs/promises';
import path from 'node:path';

const read = async () => {
    const pathToFile = path.join('src', 'fs', 'files', 'fileToRead.txt');

    try {
        await fs.access(pathToFile);
        const content = await fs.readFile(pathToFile, 'utf8');
        console.log(content);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('FS operation failed');
            throw new Error('FS operation failed');
        }
    }
};

await read();