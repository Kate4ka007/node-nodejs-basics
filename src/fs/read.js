import * as fs from 'fs/promises';
import process from 'process';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.',
  import.meta.url));

const FILE_NAME = 'fileToRead.txt';
const PATH = path.join(__dirname, 'files', FILE_NAME);

const ERROR_MESSAGE = 'FS operation failed';

const read = async () => {
  const file = await fs.readFile(PATH, "utf8", (error) => {
    if (error) throw new Error(ERROR_MESSAGE);
  });
  process.stdout.write(file);
};

await read();

