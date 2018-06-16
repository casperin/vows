const fs = require("fs")

module.exports = async function* readFile(filename, opt = {}) {
    const fd = await open(filename)
    const buffer = Buffer.alloc(opt.byteLength || 64)
    const read = createReader(byteLength)

    while(true) {
        const bytesRead = await read(fd, buffer)
        if (bytesRead === 0) {
            fs.close(fd, function(){})
            return
        }
        yield buffer.slice(0, bytesRead)
    }
}

function open(filename) {
    return new Promise((resolve, reject) => {
        fs.open(filename, "r", (err, fd) => {
            if (err) {
                return reject(err)
            }
            resolve(fd)
        })
    })
}

function createReader(length) {
    let position = 0
    return function read(fd, buffer) {
        return new Promise((resolve, reject) => {
            fs.read(fd, buffer, 0, length, position, function(err, bytesRead) {
                if (err) {
                    return reject(err)
                }
                position += bytesRead
                resolve(bytesRead)
            })
        })
    }
}
