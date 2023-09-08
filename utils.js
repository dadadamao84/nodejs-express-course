const os = require('os');

// current user info
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    cpus: os.cpus(),
    user: os.userInfo(),
};

const sayHi = (name) => {
    console.log(`Hi, how are you ${name}.  uptime of your system is ${os.uptime} seconds`)
}

module.exports = {
    currentOs,
    sayHi
}

module.exports.items = ['first', 'second']