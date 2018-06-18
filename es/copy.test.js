import {copy, toArray} from "../es"

test("Simple events", (done) => {
    const {read, write} = copy()
    const actual = []
    const expected = [1, 2, 3]

    ;(async function() {
        for await (const x of read()) {
            actual.push(x)
        }
    })()

    Promise.resolve()
        .then(() => write(1))
        .then(delay(100))
        .then(() => write(2))
        .then(delay(100))
        .then(() => write(3))

    return Promise.resolve()
        .then(delay(300))
        .then(() => expect(actual).toEqual(expected))
        .then(done)
})

test("Multiple readers", (done) => {
    const {read, write} = copy()
    const actual1 = []
    let actual2 = ""

    ;(async function() {
        for await (const x of read()) {
            actual1.push(x)
        }
    })()

    ;(async function() {
        for await (const x of read()) {
            actual2 += x + "_"
        }
    })()

    Promise.resolve()
        .then(() => write(1))
        .then(delay(100))
        .then(() => write(2))
        .then(delay(100))
        .then(() => write(3))

    return Promise.resolve()
        .then(delay(300))
        .then(() => {
            expect(actual1).toEqual([1, 2, 3])
            expect(actual2).toEqual("1_2_3_")
        })
        .then(done)
})

function delay(ms) {
    return function(data) {
        return new Promise(function(resolve) {
            setTimeout(resolve, ms, data)
        })
    }
}
