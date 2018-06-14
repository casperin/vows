export default async function last(items) {
    let item
    for await (const x of items) {
        item = x
    }
    return item
}
