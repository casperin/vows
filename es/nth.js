export default async function nth(n, items) {
    let c = 1
    for await (const x of items) {
        if (n === c) {
            return x
        }
        c++
    }
}
