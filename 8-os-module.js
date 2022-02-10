const os = require("os");
console.log(os.cpus());
console.log(os.totalmem());
console.log(os.userInfo());
console.log(`Os is up since ${os.uptime() / 3600} hours `);
