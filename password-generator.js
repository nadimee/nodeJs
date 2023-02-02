

var passGenerator = require("generate-password");
var password = passGenerator.generate({length: 10,numbers: true})
console.log(password);
