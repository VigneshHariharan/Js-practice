import { Buffer }  from 'node:buffer';

const text = "Text1";

const logBufferText = (text, format) => {
    const buffer = Buffer.from(text, format);
    console.log('format ',format, text, buffer, buffer.toString(format))
}
logBufferText(text, 'utf8');
logBufferText(text, "hex");
logBufferText(text, "ascii");

