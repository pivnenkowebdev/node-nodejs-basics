import fs from 'node:fs/promises';
import path from 'node:path';

const create = async () => {
    const fullPathToFile = path.join('src', 'fs', 'files', 'fresh.txt');
    const textContent = 'I am fresh and young';

    try {
        await fs.writeFile(fullPathToFile, textContent, {flag: 'wx'});
    } catch (error) {
        if (error.code === 'EEXIST') {
            console.error('FS operation failed');
            throw new Error('FS operation failed');
        } else {
            console.error('FS operation failed');
            throw new Error(error);
        }
    }
};

create();
