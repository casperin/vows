export default async function* chain(...iterators) {
    for (const items of iterators) {
        for await (const x of items) {
            yield x
        }
    }
}
