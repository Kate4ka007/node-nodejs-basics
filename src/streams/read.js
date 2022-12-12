import * as process from 'process';
import * as fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.',
  import.meta.url));

const FILE_NAME = 'fileToRead.txt';

const PATH = path.join(__dirname, 'files', FILE_NAME);


const read = async () => {
  const readStream = fs.createReadStream(PATH, 'utf-8');
  let data = '';

  readStream.on('data', (chunk) => {
    data += chunk;
  });
  readStream.on('end', () => {
    process.stdout.write(data);
  });
  readStream.on('error', (error) => {
    throw new Error('Something going wrong');
  });

};

await read();