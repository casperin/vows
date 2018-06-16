export default fn => async function* dropWhile(reader) {
    let drop = true
    for await (const x of reader) {
        if (drop) {
            drop = fn(x)
        }
        if (!drop) {
            yield x
        }
    }
}
