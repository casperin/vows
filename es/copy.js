export default function copy() {
    let savedResolve = function(){}
    const resolves = []

    function write(data) {
        for (const resolve of resolves) {
            resolve(data)
        }
        resolves.length = 0 // clear array
    }

    async function* read() {
        while(true) {
            const value = await new Promise(function(resolve) {
                resolves.push(resolve)
            })
            yield value
        }
    }

    return {write, read}
}
