export default fn => async function* map(reader) {
    for await (const x of reader) {
        yield fn(x)
    }
}
