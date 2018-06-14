export default async function* scan(items, acc, fn) {
    for await (const x of items) {
        acc = fn(acc, x)
        yield acc
    }
}
