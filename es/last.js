export default () => async function last(reader) {
    let item
    for await (const x of reader) {
        item = x
    }
    return item
}
