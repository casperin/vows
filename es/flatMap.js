export default fn => async function* flatMap(reader) {
    for await (const x of reader) {
        for await (const y of fn(x)) {
            yield y
        }
    }
}
