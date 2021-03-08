

// console.log(process.pid);
// console.log(process.stdin, process.stdout, process.stderr);
// process.stdin.pipe(process.stdout)


//-------------------------------------------------------------


// const os = require('os');

// console.log(os.arch());
// console.log(os.cpus().length);
// console.log(os.freemem());
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.uptime())

//-------------------------------------------------------------

// const path = require('path');

// console.log(__dirname);
// console.log(__filename);

// console.log(path.join(__dirname, 'public', 'index.html'));
// console.log(path.extname("/Users/nag/index.html"));

//-------------------------------------------------------------

// const dns = require('dns');

// dns.lookup('nodejs.org', (err, address, family) => {
//     console.log('address: %j family: IPv%s', address, family);
// });

//--------------------------------


import { greet } from './greet.js'
greet()