const os = require('os')

console.log(os.cpus().length)
console.log(os.cpus()[0].model);
console.log(Array.isArray(os.cpus()))