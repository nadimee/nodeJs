

var fs = require("fs");


fs.writeFile("welcome.txt", "Hello Node", function (err) {
        if (err) {
        return console.log(err);
                 }
           fs.readFile("welcome.txt", function (err, data) {
        if (err) {
        return console.log(err);
                 }
console.log(data.toString());
    });
});
