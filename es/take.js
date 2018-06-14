export default async function* take(items, count) {
    if (count <= 0) {
        return
    }
    for await (const x of items) {
        yield x
        count--
        if (count <= 0) {
            return
        }
    }
}

