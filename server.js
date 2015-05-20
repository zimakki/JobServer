var deployd = require('deployd');

var dpd = deployd({
    host: 'ds031832.mongolab.com',
    port: 31832,
    name: 'jobserver',
    credentials: {
        username: 'hamidabdulmalik',
        password: 'mi566666'
    }
});
dpd.listen();
