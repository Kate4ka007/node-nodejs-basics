import * as fs from 'fs/promises';
import process from 'process';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.',
  import.meta.url));

const FOLDER_PATH = path.join(__dirname, 'files');
const ERROR_MESSAGE = "FS operation failed";

const list = async () => {
  const filesList = await fs.readdir(FOLDER_PATH).catch((error) => {
    throw new Error(ERROR_MESSAGE);
  });

  filesList.forEach(
    (file) => {
      process.stdout.write(file + '\n');
    }
  );
};

await list();