const path = require('path');
const fs = require('fs');

function getAlias() {
	var srcDir = path.join(__dirname, "../src");
    var alias = {};

    fs.readdirSync(srcDir).forEach((filename) => {
        var filePath = path.join(srcDir, filename);

        if(fs.lstatSync(filePath).isDirectory()) {
            alias[filename] = filePath;
        }
    });

    return alias;
}

module.exports = {
    getAlias
}