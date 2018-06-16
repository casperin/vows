export default async function* chain(...readers) {
    for (const items of readers) {
        for await (const x of items) {
            yield x
        }
    }
}
