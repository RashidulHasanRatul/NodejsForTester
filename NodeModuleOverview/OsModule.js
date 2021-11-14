

const Os = require("os");

let freeMemory = Os.freemem();
let totalMemory = Os.totalmem();

console.log(freeMemory);
console.log(totalMemory);