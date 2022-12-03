import { Worker } from 'worker_threads';
import * as os from 'os';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const PATH_WORKER = path.join(__dirname, 'worker.js');

const workerThreads = async () => {
    function runService(workerData) {
        return new Promise((resolve, reject) => {
            const worker = new Worker(PATH_WORKER, { workerData });
            worker.on('message', result => {
                resolve({
                    'status': 'resolved',
                    'data': result
                });
            });
            worker.on('error', (error) => {
                reject({
                    'status': 'error',
                    'data': null
                });
            });
            worker.on('exit', (code) => {
                if (code !== 0)
                    reject({
                        'status': 'error',
                        'data': null,
                    });
            });
        });
    }

    const runWorkers = async () => {
        const arrWithResults = [];
        const cpuCount = os.cpus().length;
        for (let i = 0; i < cpuCount; i++) {
            arrWithResults[i] = await runService(i + 10);
        }
        const result = (await Promise.allSettled(arrWithResults)).map((elem => {
            return elem.value;
        }));
        console.log(result);
    };
    runWorkers().catch(err => console.error(err));
};

await workerThreads();

