import process from 'process';

const parseArgs = () => {

    const args = process.argv.slice(2);
    let result = '';
    for (let arg of args) {
        if (arg.includes('--')) {
            result += `${arg.slice(2)} is `;
        } else {
            result += `${arg}, `;
        }
    }
    process.stdout.write(result.slice(0, result.length - 2));
};

parseArgs();
