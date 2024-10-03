import fs from 'node:fs/promises';
import path from 'node:path';

const create = async () => {
    const folderPath = path.join('src', 'fs', 'files');
    const fileName = 'fresh.txt';
    const fullPath = path.join(folderPath, fileName);
    const textContent = 'I am fresh and young';

    try {
        await fs.stat(fullPath);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(fullPath, textContent);
        } else {
            console.log(error);
        }
    }
};

await create();
