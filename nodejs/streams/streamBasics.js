import fs from 'fs';


const readableStream = fs.createReadStream("./hello.txt");

const writableStream = fs.createWriteStream("./output.txt");

console.log('readable stream',readableStream)
readableStream.pipe(writableStream)

let count = 0;
readableStream.on("data",() => {
    count++;
    console.log('chunk --- ',count)
})

