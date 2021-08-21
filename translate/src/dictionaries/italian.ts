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

const alphabet: Dictionary = {
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    E: "E",
    F: "F",
    G: "G",
    H: "H",
    I: "I",
    J: "J",
    K: "K",
    L: "L",
    M: "M",
    N: "N",
    O: "O",
    P: "P",
    Q: "Q",
    R: "R",
    S: "S",
    T: "T",
    U: "U",
    V: "V",
    W: "W",
    X: "X",
    Y: "Y",
    Z: "Z"
}

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