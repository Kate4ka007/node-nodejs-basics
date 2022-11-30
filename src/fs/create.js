import * as fs from "fs/promises";
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.',
  import.meta.url));

const FILE_NAME = 'fresh.txt';
const PATH = path.join(__dirname, 'files', FILE_NAME);

const MESSAGE = 'I am fresh and young';
const ERROR_MESSAGE = 'FS operation failed';

const create = async () => {
  await fs.writeFile(PATH, MESSAGE, { flag: 'wx' }, (error) => {
    if (error) throw new Error(ERROR_MESSAGE);
  });
};

await create();
