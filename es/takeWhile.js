export default fn => async function* takeWhile(reader) {
    for await (const x of reader) {
        if (!fn(x)) {
            return
        }
        yield x
    }
}
