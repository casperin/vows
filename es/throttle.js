export default ms => async function* throttle(reader) {
    let time
    for await (const x of reader) {
        const diff = Date.now() - time
        if (time && diff < ms) {
            await new Promise(function(resolve) {
                setTimeout(resolve, ms - diff)
            })
        }
        yield x
        time = Date.now()
    }
}
