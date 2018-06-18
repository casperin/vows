export default function copy() {
    let savedResolve = function(){}
    const resolves = []

    function writer(data) {
        for (const resolve of resolves) {
            resolve(data)
        }
        resolves.length = 0 // clear array
    }

    async function* reader() {
        while(true) {
            const value = await new Promise(function(resolve) {
                resolves.push(resolve)
            })
            yield value
        }
    }

    return {writer, reader}
}
