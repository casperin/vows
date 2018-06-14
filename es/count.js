export default async function count(items) {
    let c = 0
    for await (const _ of items) {
        c++
    }
    return c
}
