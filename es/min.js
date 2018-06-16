export default () => async function min(reader) {
    let current = null
    for await (const x of reader) {
        if (current === null || x <= current) {
            current = x
        }
    }
    return current
}

