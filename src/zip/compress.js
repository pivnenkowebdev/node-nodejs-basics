import path from 'node:path';
import fs from 'node:fs';
import zlib from 'node:zlib';


const compress = async () => {
    const pathToFileOrigFile = path.join('src', 'zip', 'files', 'fileToCompress.txt');
    const pathToGZfile = path.join('src', 'zip', 'files', 'archive.gz');

    const readableStream = fs.createReadStream(pathToFileOrigFile, 'utf-8');
    const writableStream = fs.createWriteStream(pathToGZfile);
    const gzStream = zlib.createGzip();

    readableStream.pipe(gzStream).pipe(writableStream);
    writableStream.on('finish', () => {
        console.log('success!');
    });
};

await compress();