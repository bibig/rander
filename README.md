# node-rander

+ A mini Node.js module to generate fixed length random string or number.
+ support customizing the chars dictionary.

## Usage

+ rander.string([len], [dict])
+ rander.number([len], [dict])
+ default len: 8
+ default dict for string: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz
+ default dict for number: 0123456789



```javascript
var rander = require("rander");

// without length attribute, using default length
console.log(rander.string()); // output: DbekoPTC
console.log(rander.number()); // output: 71256599


// with a given length
console.log(rander.string(50)); // output: cU4oofQNQDleJaIToTsUt7QqvdJ8cBNlTJ8mVFPx5Awr0EuxmG
console.log(rander.number(50)); // output: 18200284942412405851443769383804773969628467668668

// with a length and a dictionary
console.log(rander.string(3, '!@#$%^&*?')); // output: #!^

```