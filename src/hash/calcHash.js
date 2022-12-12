import { createHash } from 'crypto';
import path from 'path';
import url from 'url';
import process from 'process';
import * as fs from 'fs';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const FILE_NAME = 'fileToCalculateHashFor.txt';
const PATH_TO_FILE = path.join(__dirname, 'files', FILE_NAME);

const calculateHash = async () => {
  const sha256 = createHash('sha256');
  const readStream = fs.createReadStream(PATH_TO_FILE, 'utf-8');
  readStream.pipe(sha256).setEncoding('hex').pipe(process.stdout);
};

await calculateHash();
