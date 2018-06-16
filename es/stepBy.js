export default n => async function* stepBy(reader) {
    let current = 1
    for await (const x of reader) {
        if (current >= n) {
            yield x
            current = 1
        } else {
            current++
        }
    }
}
