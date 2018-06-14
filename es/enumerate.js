export default async function* enumerate(items) {
    let c = 0
    for await (const x of items) {
        yield [c, x]
        c++
    }
}
