export default fn => async function minByKey(reader) {
    let current = null
    for await (const x of reader) {
        if (current === null || fn(x) <= fn(current)) {
            current = x
        }
    }
    return current
}

