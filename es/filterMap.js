export default fn => async function* filterMap(reader) {
    for await (const x of reader) {
        const result = fn(x)
        if (result !== null) {
            yield result
        }
    }
}
