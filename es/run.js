export default async function run(reader) {
    return (async function() {
        for await (const _ of reader) {}
    })()
}
