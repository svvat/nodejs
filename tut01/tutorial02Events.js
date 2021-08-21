var EventEmitter = require('events');

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
        this.on('name', () => {
            console.log('my name is ' + this.name);
        })    
    }
    get name() {
        return this._name;
    }
}

const exec = () => {
    console.log("Tutorial02");
    var eventEmitter = new EventEmitter();
    eventEmitter.on("tutorial02", (num1, num2) => {
        result = num1 + num2;
        console.log(`Tutorial02 triggered ${num1} + ${num2} = ${result} `);
    })
    console.log("emit Tutorial02");

    eventEmitter.emit("tutorial02", 1, 2);

    console.log("Tutorial02 done!");

    let pedro = new Person('Pedro');
    let christina = new Person('Christina');
    pedro.emit('name');
    christina.emit('name')
};




module.exports.exec = exec;