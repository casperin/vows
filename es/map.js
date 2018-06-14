export default async function* map(items, fn) {
    for await (const x of items) {
        yield fn(x)
    }
}
