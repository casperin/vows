export default () => async function* cycle(reader) {
    const memory = []
    let idx = 0

    for await (const x of reader) {
        memory.push(x)
        yield x
    }

    while(true) {
        yield memory[idx % memory.length]
        idx++
    }
}
