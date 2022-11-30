import * as fs from "fs/promises";
import path from "path";

const FILE_OLD_NAME = 'wrongFilename.txt';
const FILE_NEW_NAME = 'properFilename.md';
const new_file_path = path.join("./files", FILE_NEW_NAME);
const old_file_path = path.join("./files", FILE_OLD_NAME);
const ERROR_MESSAGE = "FS operation failed";

const rename = async () => {
    await fs
        .rename(old_file_path, new_file_path)
        .catch((error) => {
            throw new Error(ERROR_MESSAGE);
        });
};

await rename();
