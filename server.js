var deployd = require('deployd');

var dpd = deployd({
    host: 'mongodb://hamidabdulmalik:mi566666@ds031832.mongolab.com:31832/jobserver',
    port: 31832
});
dpd.listen();
