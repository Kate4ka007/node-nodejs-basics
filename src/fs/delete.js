import * as fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.',
    import.meta.url));

const FILE_NAME = 'fileToRemove.txt';
const PATH = path.join(__dirname, 'files', FILE_NAME);
const ERROR_MESSAGE = 'FS operation failed';

const remove = async () => {
    await fs.unlink(PATH, (error) => {
        if (error) throw new Error(ERROR_MESSAGE);
    });

};

await remove();