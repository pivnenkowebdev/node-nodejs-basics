import fs from 'node:fs/promises';
import path from 'node:path';

const copy = async () => {
    const fullPathToOriginFilesDir = path.join('src', 'fs', 'files');
    const fullPathToCopyFilesDir = path.join('src', 'fs', 'files_copy');

    try {
        await fs.access(fullPathToOriginFilesDir);
        const originContent = await fs.readdir(fullPathToOriginFilesDir);
        try {
            await fs.access(fullPathToCopyFilesDir);
            throw new Error();
        } catch (error) {
            if (error.code === 'ENOENT') {
                await fs.mkdir(fullPathToCopyFilesDir);
                for (const file of originContent) {
                    const srcFilePath = path.join(fullPathToOriginFilesDir, file);
                    const text = await fs.readFile(srcFilePath, 'utf-8');
                    const newSrcFilePath = path.join(fullPathToCopyFilesDir, file);
                    await fs.writeFile(newSrcFilePath, text);
                }
            } else {
                console.error('FS operation failed');
            }
        }
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('FS operation failed');
        }
    }
};

await copy();
