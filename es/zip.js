export default async function* zip(...iterators) {
    iterators = iterators.map(its => its[Symbol.iterator]())

    while (true) {
        const items = iterators.map(items => Promise.resolve(items.next()))
        const results = await Promise.all(items)
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
