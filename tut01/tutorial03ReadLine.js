const readline = require('readline');

const exec = () => {
    console.log("Tutorial03");


    const rl = readline.createInterface({
        input : process.stdin, output: process.stdout
    });
    // get 2 random numbers
    let num1 = Math.floor((Math.random()*10) +1);
    let num2 = Math.floor((Math.random()*10) +1);
    let answer = num1 + num2;
    rl.question(`What is ${ num1 } + ${ num2 }?`, 
    (userInput)=>{
        if(userInput.trim() == answer) 
        {
            rl.close();
        } 
        else
        {
            rl.setPrompt('Incorrect. Try again \n');
            rl.prompt();
            rl.on('line', (userInput) => {
                if(userInput.trim() == answer) 
                {
                    rl.close();
                } 
            })
        }
    });

    rl.on('close', () => {
        console.log('Correct.');
    });
};

module.exports.exec = exec;