import path from 'node:path';
import fs from 'node:fs/promises';

const remove = async () => {
    const pathToFile = path.join('src', 'fs', 'files', 'fileToRemove.txt');
    try {
        await fs.access(pathToFile);
        await fs.unlink(pathToFile);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('FS operation failed');
        }
    }
};

await remove();
