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

function twoStrings(s1: string, s2: string): string {
    // Write your code here
    s1 = s1.replace('\r','');;
    s2 = s2.replace('\r','');;
    let ret = "NO";
    let chrs = s1.split('');
    chrs.forEach(function (value) {
        if (s2.includes(value)){
            ret = "YES"
        }
    }); 
    return ret;
}

function main() {

    const q: number = parseInt(readLine().trim(), 10);

    for (let qItr: number = 0; qItr < q; qItr++) {
        const s1: string = readLine();
        if (!s1) break;

        const s2: string = readLine();
        if (!s2) break;

        const result: string = twoStrings(s1, s2);

        console.log(result + '\n');
    }
    console.log('Exit\n');
    exit()
}
