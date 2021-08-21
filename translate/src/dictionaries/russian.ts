
const alphabet: Dictionary = {
    "A": "A",
    "B": "Б",
    "C": "C",
    "D": "Д",
    "E": "E",
    "F": "Ф",
    "G": "Г",
    "H": "",
    "I": "И",
    "J": "",
    "K": "L",
    "L": "Л",
    "M": "M",
    "N": "H",
    "O": "O",
    "P": "П",
    "Q": "L",
    "R": "P",
    "S": "С",
    "T": "T",
    "U": "У",
    "V": "В",
    "W": "УA",
    "X": "Ж",
    "Y": "Й",
    "Z": "З"
}

import { Dictionary, ILanguage } from "./ILanguage";

const words: Dictionary = {
    hello: "caio",
    friend: "stupido",
    I: "io" ,
    up: "su" ,
    down: "fuori uso" ,
    yes: "yes" ,
    no: "no" ,
    mine: "mio" ,
    monday: "lunadi" ,
    this: "questo" ,
    have: "avere" ,
    am: "sono" ,
    to_be: "essere",
    to_come: "venere",
    today: "oggi" ,
    beautiful: "bello" ,
    tomorrow: "domani" ,
    ugly: "brutto" ,
    now: "ora",
    is: "e",
    the: "il",
    time: "tempo",
    for: "per",
    all: "tutti",
    good: "boni",
    bad: "cativo",
    women: "dona",
    men: "oumini",
    aid: "aiuto",
    party: "partita",
    to: "a",
    of: "di",
    of_the: "del",
    unicorn: "unicorno",
    a: "uno",
    an: "uno",
    mermaid: "sirena",
    I_will_be: "saro"
   
};


const combos: Dictionary = {
    "to come": "to_come",
    "to have": "to_have",
    "of the": "of_the",
    "I will be": "I_will_be"
};

export const Italian : ILanguage = {
    dictionary: words,
    alphabet: alphabet,
    combos: combos
}