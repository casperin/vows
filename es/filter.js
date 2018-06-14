export default async function* filter(items, fn) {
    for await (const x of items) {
        if (fn(x)) yield x
    }
}
