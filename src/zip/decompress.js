import { createGunzip } from 'zlib';
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

const decompress = async () => {
    const unzip = createGunzip();
    const readStream = createReadStream(PATH_FILE_ZIP);
    const writeStream = createWriteStream(PATH_FILE);

    pipeline(readStream, unzip, writeStream, (error) => {
        if (error) throw new Error('Something went wrong');
    });
};

await decompress();