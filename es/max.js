export default () => async function max(reader) {
    let current = null
    for await (const x of reader) {
        if (current === null || x >= current) {
            current = x
        }
    }
    return current
}
