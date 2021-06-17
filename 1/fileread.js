const fs = require('fs');
fs.readFile("saimple.txt", "utf8", function(err, data) {
    console.log(data);
});