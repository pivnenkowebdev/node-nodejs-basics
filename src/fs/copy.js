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

//  implement function that copies folder files, with all its content into folder files_copy at the same level (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
// 1. check exists files folder +
// 2. if the files folder don`t created - throw error +
// 2.1 if files folder created - need copy content +
// 3. check exists files_copy folder +
// 3.1 if folder has been created - throw error +
// 3. else need to create folder and paste content from files folder +