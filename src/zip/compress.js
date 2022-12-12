import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from "stream";
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.',
    import.meta.url));

const FILE_NAME = 'fileToCompress.txt';
const FILE_ZIP = 'archive.gz';
const PATH_FILE = path.join(__dirname, 'files', FILE_NAME);
const PATH_FILE_ZIP = path.join(__dirname, 'files', FILE_ZIP);


const compress = async () => {
    const gzip = createGzip();
    const readStream = createReadStream(PATH_FILE);
    const writeStream = createWriteStream(PATH_FILE_ZIP);

    pipeline(readStream, gzip, writeStream, (error) => {
        if (error) throw new Error('Something went wrong');
    });
};

await compress();