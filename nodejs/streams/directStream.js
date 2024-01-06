import { Readable } from 'stream';
import fs from 'fs';

const helloText = fs.readFileSync("./hello.txt");
const readableStream = new Readable(helloText);
console.log('readableStream : ',readableStream,helloText)