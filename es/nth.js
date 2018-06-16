export default n => async function nth(reader) {
    let c = 1
    for await (const x of reader) {
        if (n === c) {
            return x
        }
        c++
    }
}
