export default async function toArray(items) {
    const out = []
    for await (const x of items) {
        out.push(x)
    }
    return out
}
