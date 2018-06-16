export default fn => async function forEach(reader) {
    return (async function() {
        for await (const x of reader) {
            fn(x)
        }
    })()
}

