export default () => async function* flatten(reader) {
    for await (const reader2 of reader) {
        for await (const x of reader2) {
            yield x
        }
    }
}
