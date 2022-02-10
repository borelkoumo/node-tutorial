const path = require("path");
const { readFile, writeFile } = require("fs");

const firstPath = path.resolve(__dirname, "content", "first.txt");
const secondPath = path.resolve(__dirname, "content", "second.txt");
const resultPath = path.resolve(__dirname, "content", "result-async.txt");
console.log('start')
readFile(firstPath, "utf8", (error, firstData) => {
  if (error) {
    console.log(error);
    return null;
  }
  readFile(secondPath, "utf8", (error, secondData) => {
    if (error) {
      console.log(error);
      return null;
    }
    writeFile(
      resultPath,
      `Hello. This is the result : ${firstData}, ${secondData}`,
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log('done with this task');
      }
    );
  });
  console.log(firstData);
});

console.log('starting next task');
