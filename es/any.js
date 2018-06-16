export default fn => async function any(reader) {
    for await (const x of reader) {
        if (fn(x)) {
            return true
        }
    }
    return false
}
