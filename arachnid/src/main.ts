'use strict';
import * as fs from 'fs';
import { WriteStream, createWriteStream } from "fs";
import { exit } from 'process';
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputLines: string[] = [];
let currentLine: number = 0;


const inputString = fs.readFileSync('data.txt','utf8');

fs.close;

inputLines = inputString.split('\n');

function readLine(): string {
    return inputLines[currentLine++];
}

main();

async function main() {

    const q: number = parseInt(readLine().trim(), 10);

    for (let qItr: number = 0; qItr < q; qItr++) {
        const s1: string = readLine();

        // console.log(result + '\n');
    }
    console.log('Exit\n');
    exit()
}
