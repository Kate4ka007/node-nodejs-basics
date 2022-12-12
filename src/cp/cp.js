import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const args = process.argv.slice(2);

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PATH_FILE = path.join(__dirname, 'files', 'script.js');
const command = 'node';

export const spawnChildProcess = async (args) => {
  const childProcess = spawn(command, [PATH_FILE, args]);
  childProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  childProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  childProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
};
spawnChildProcess(args);