export default n => async function* drop(reader) {
    for await (const x of reader) {
        if (n > 0) {
            n--
            continue
        }
        yield x
    }
}
