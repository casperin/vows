export default fn => async function* filter(reader) {
    for await (const x of reader) {
        if (fn(x)) yield x
    }
}
