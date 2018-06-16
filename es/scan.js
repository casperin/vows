export default (acc, fn) => async function* scan(reader) {
    for await (const x of reader) {
        acc = fn(acc, x)
        yield acc
    }
}
