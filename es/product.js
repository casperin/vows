export default () => async function product(reader) {
    let result = 1
    for await (const x of reader) {
        result = result * x
    }
    return result
}

