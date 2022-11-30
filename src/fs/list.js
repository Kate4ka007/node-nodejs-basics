import * as fs from 'fs/promises';
import process from 'process';

const FOLDER_PATH = './files';
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