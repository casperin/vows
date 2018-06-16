export default fn => async function* inspect(reader) {
    fn = fn || console.log
    for await (const x of reader) {
        fn(x)
        yield x
    }
}
