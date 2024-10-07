import path from 'node:path';
import fs from 'node:fs';
import zlib from 'node:zlib';

const decompress = async () => {
    const pathToUnCompressedFile = path.join('src', 'zip', 'files', 'fileToCompress.txt');
    const pathToGZfile = path.join('src', 'zip', 'files', 'archive.gz');

    const readableStream = fs.createReadStream(pathToGZfile);
    const writableStream = fs.createWriteStream(pathToUnCompressedFile);
    const gzUnPack = zlib.createGunzip();

    readableStream.pipe(gzUnPack).pipe(writableStream);

    writableStream.on('finish', () => {
        console.log('success!');
    });
};

await decompress();
