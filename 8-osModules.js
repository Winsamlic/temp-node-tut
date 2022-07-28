//OS Module
const os=require('os')


//info about current user
const user=os.userInfo()
console.log(user)

//return the sys uptime
console.log(`Uptime: ${os.uptime}`);

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
    ZeroMem:os.totalmem()-os.totalmem(),
}

console.log(currentOS);