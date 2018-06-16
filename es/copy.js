export default function copy() {
    let savedResolve = function(){}
    const resolves = []

    function writer(data) {
        for (const resolve of resolves) {
            resolve(data)
        }
        resolves.length = 0 // clear array
    }

    function* reader() {
        while(true) {
            yield new Promise(function(resolve) {
                resolves.push(resolve)
            })
        }
    }

    return {writer, reader}
}
