import path from 'node:path';
import fs from 'node:fs/promises';

const rename = async () => {
    const oldName = 'wrongFilename.txt';
    const pathToWrongFile = path.join('src', 'fs', 'files', oldName);
    
    const newName = 'properFilename.md';
    const pathToNewFile = path.join('src', 'fs', 'files', newName);

    try {
        await fs.access(pathToNewFile);
        throw new Error('FS operation failed: has been created');
    } catch (error) {
        if (error.message === 'FS operation failed: has been created') {
            console.error('FS operation failed: has been created');
            return;
        } else {
            try {
                await fs.access(pathToWrongFile);
                await fs.rename(pathToWrongFile, pathToNewFile);
            } catch (error) {
                if (error.code === 'ENOENT') {
                    console.error('FS operation failed: not found');
                    throw new Error('FS operation failed');
                }
            }
        }
    }
};

await rename();
