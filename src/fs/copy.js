import * as fs from "fs/promises";
import path from "path";
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.',
  import.meta.url));

const FOLDER_PATH = path.join(__dirname, 'files');
const FOLDER_PATH_COPY = path.join(__dirname, 'files_copy');
const ERROR_MESSAGE = "FS operation failed";

const copy = async () => {
  const filesList = await fs.readdir(FOLDER_PATH);

  await fs.mkdir(FOLDER_PATH_COPY).catch((error) => {
    throw new Error(ERROR_MESSAGE);
  });

  for (let file of filesList) {
    const path_old_file = path.join(FOLDER_PATH, file);
    const path_copy_file = path.join(FOLDER_PATH_COPY, file);

    const files = await fs.readFile(path_old_file, "utf8", (error) => {
      if (error) throw new Error(ERROR_MESSAGE);
    });

    await fs.writeFile(path_copy_file, files, { flag: 'wx' }, (error) => {
      if (error) throw new Error(ERROR_MESSAGE);
    });
  }
};

copy();