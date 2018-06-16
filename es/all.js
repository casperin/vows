export default fn => async function all(reader) {
    for await (const x of reader) {
        if (!fn(x)) {
            return false
        }
    }
    return true
}
