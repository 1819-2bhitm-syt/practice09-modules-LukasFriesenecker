const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('compressed.txt'),
    crlfDelay: Infinity
});

let compressedLines = [];

rl.on('line', (line) => {
    compressedLines.push(line);
});

rl.on('close', () => {
    for (line of compressedLines){
        console.log(decompress(line));
    }
});

let letter;
let text;
let count;

function decompress(line){
    letter = line.charAt(0);
    count = parseInt(line.substring(1, line.length));

    text = "";

    for(let i = 0; i < count; i++){
        text += letter;
    }

    return text;
}