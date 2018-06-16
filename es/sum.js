export default () => async function sum(reader) {
    let result = 0
    for await (const x of reader) {
        result = result + x
    }
    return result
}
