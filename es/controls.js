export default function controls() {
    let open = true
    let resolve = function() {}

    const valve = () => async function* (reader) {
        await open
        for await (const x of reader) {
            await open
            yield x
            await open
        }
    }

    function stop() {
        if (open !== true) {
            return
        }
        open = new Promise(res => {
            resolve = res
        })
    }

    function start() {
        resolve()
        open = true
    }

    return {start, stop, valve}
}
