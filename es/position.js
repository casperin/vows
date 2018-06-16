export default fn => async function position(reader) {
    let c = 0
    for await (const x of reader) {
        if (fn(x)) {
            return c
        }
        c++
    }
}
