export default () => async function count(reader) {
    let c = 0
    for await (const _ of reader) {
        c++
    }
    return c
}
