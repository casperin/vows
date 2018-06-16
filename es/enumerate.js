export default () => async function* enumerate(reader) {
    let c = 0
    for await (const x of reader) {
        yield [c, x]
        c++
    }
}
