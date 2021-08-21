'use strict';
import * as fs from 'fs';
import { exit } from 'process';
import { ILanguage } from './dictionaries/ILanguage';
import { Italian } from './dictionaries/italian';
import { morse } from './dictionaries/morse';



// Й Ц У К Е Н Г Ш Щ З Х Ъ Ф Ы В А П Р О Л Д Ж Э \ Я Ч С М И Т Ь Б Ю . .


function translateLetters(word: string, alphabet: any) : string {
    let translation = "";
    const letters = word.split("");
    for(let letter of letters) {
        translation = translation.concat(translateWord(letter, alphabet));
    }
    return translation;
}


function translateWord(english: string, dictionary: ILanguage) : string {
    if(dictionary.dictionary[english] !== undefined)
        return dictionary.dictionary[english];
    else
        return english;
}

function translateAlphabet(sentence: string, alphabet: any) : string {

    const words = sentence.toUpperCase().split(" ");


    let translation = "";

    for(let word of words) {
        translation = translation.concat(translateLetters(word, alphabet));
        translation = translation.concat(" ");
    }
    
    return translation;
}

function translateSentence(sentence: string, dictionary: ILanguage) : string {

    sentence = sentence.replace("to come", "to_come");
    sentence = sentence.replace("to have", "to_have");
    sentence = sentence.replace("of the", "of_the");
    sentence = sentence.replace("I will be", "I_will_be");
    const words = sentence.split(" ");


    let translation = "";

    for(let word of words) {
        translation = translation.concat(translateWord(word, dictionary));
        translation = translation.concat(" ");
    }
    
    return translation;
}

main();

async function main() { 

    console.log(translateSentence( "today I am a mermaid tomorrow I will be a unicorn", Italian));

    console.log(translateSentence( "now is the time for all good men to come to the aid of the party", Italian));

    console.log(translateSentence( "now is the time for all good men to come to the aid of the party", Italian));

    // console.log(translateAlphabet( "hello kek", morse));

    // console.log(translateAlphabet( "hello kek-kek", rouski));

    // console.log(translateAlphabet( "This is a russian sentence", rouski));
    
    exit();

}