import { pipeline, Transform } from "stream";
import process from "process";

export const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, _encoding, callback) {
      callback(null, String(chunk).split("").reverse().join("").trim() + "\n");
    },
  });
  pipeline(process.stdin, transformStream, process.stdout, (error) => {
    throw new Error();
  });
};
transform();
