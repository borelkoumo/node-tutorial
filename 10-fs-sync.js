const path = require('path');
const { readFileSync, writeFileSync } = require("fs");
console.log('start')
const firstPath = path.resolve(__dirname, "content", "first.txt");
const secondPath = path.resolve(__dirname, "content", "second.txt");
const resultsyncPath = path.resolve(__dirname, "content", "result-sync.txt");
const first = readFileSync(firstPath, "utf8");
const second = readFileSync(secondPath, "utf8");

writeFileSync(
  resultsyncPath,
  `Hello. This is the result : ${first}, ${second}`
  );
  
  console.log('done with this task')
  console.log('starting second task')