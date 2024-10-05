import path from 'node:path';
import fs from 'node:fs/promises';

const list = async () => {
    const pathToFolder = path.join('src', 'fs', 'files');

    try {
        await fs.access(pathToFolder);
        const textArr = await fs.readdir(pathToFolder);
        console.log(textArr);

        // // or this
        // textArr.forEach(element => {
        //     console.log(element);
        // });
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('FS operation failed');
        }
    }
};

await list();