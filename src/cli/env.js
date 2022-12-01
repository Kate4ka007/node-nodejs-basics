import process from "process";
const parseEnv = () => {
  const data = process.env;

  for (let key in data) {
    let value = data[key];
    process.stdout.write(`RSS_${key} = ${value}; `);
  }
};

parseEnv();
