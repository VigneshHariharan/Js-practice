import fs from 'fs';

const logs = fs.readFileSync('./Mac_2k.log');

console.log(logs)