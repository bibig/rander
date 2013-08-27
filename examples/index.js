var rander = require('../rander');

// without length attribute, using default length
console.log(rander.string());
console.log(rander.number());


// with a given length
console.log(rander.string(50));
console.log(rander.number(50));

// with a length and a dictionary
console.log(rander.string(3, '!@#$%^&*('));

