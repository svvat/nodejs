const tutorial = require('./tutorial01Module');
const tutorial01Module = require('./tutorial01Module');

const exec = () => {

    console.log("Hello World");
    console.log(tutorial);

    console.log(tutorial.sum(1, 2));

    console.log(new tutorial.SomeMaths());

}

module.exports.exec = exec;