export default (compare = id) => async function* unique(reader) {
    const memory = new Set()
    for await (const x of reader) {
        const v = compare(x)
        if (memory.has(v)) {
            continue
        }
        memory.push(v)
        yield x
    }
}

function id(a) {
    return a
}
