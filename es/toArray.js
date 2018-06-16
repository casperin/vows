export default async function toArray(reader) {
    const out = []
    for await (const x of reader) {
        out.push(x)
    }
    return out
}
