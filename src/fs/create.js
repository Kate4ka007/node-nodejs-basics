import * as fs from "fs";

const PATH = "./files/fresh.txt";
const MESSAGE = 'I am fresh and young';
const ERROR_MESSAGE = 'FS operation failed';

const create = async () => {
    fs.writeFile(PATH, MESSAGE, { flag: 'wx' }, (error) => {
        if (error) throw new Error(ERROR_MESSAGE);
    });
};

await create();
