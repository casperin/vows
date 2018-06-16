export default n => async function* take(reader) {
    if (n <= 0) {
        return
    }
    for await (const x of reader) {
        yield x
        n--
        if (n <= 0) {
            return
        }
    }
}

