export default fn => async function find(reader) {
    for await (const x of reader) {
        if (fn(x)) {
            return x
        }
    }
}
