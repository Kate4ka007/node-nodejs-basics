import * as process from 'process';
import * as fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.',
    import.meta.url));

const FILE_NAME = 'fileToWrite.txt';

const PATH = path.join(__dirname, 'files', FILE_NAME);


const write = async () => {
    const writeStream = fs.createWriteStream(PATH);
    process.stdin.on('data', (data) => {
        writeStream.write(data);
    });
};

await write();