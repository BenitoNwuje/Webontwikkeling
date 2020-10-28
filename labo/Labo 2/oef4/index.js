const moment = require('moment');
setInterval(() => {
    console.clear();
    console.log(moment().format('h:mm:ss a'));
}, 1000);