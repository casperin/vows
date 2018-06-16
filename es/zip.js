export default async function* zip(...iterators) {
    iterators = iterators.map(its => its[Symbol.iterator]())

    while (true) {
        const readers = iterators.map(reader => Promise.resolve(reader.next()))
        const results = await Promise.all(readers)
        const out = []

        for (const result of results) {
            if (result.done) {
                return
            }
            out.push(result.value)
        }

        yield out
    }
}
