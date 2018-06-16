export default (acc, fn) => async function fold(reader) {
    for await (const x of reader) {
        acc = fn(acc, x)
    }
    return acc
}
