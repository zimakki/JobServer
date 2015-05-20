var deployd = require('deployd');
var options = {
    port: 8080
};

var dpd = deployd(options);

dpd.listen();
