import {map, toArray} from "../es"

function toEqual(actual, expected) {
    toArray(actual)
        .then(output => expect(output).toEqual(expected))
        .catch(console.log)
}

test("Simple array", () => {
    const input = [1, 2, 3]
    const actual = map(input, x => x + 1)
    const expected = [2, 3, 4]
    toEqual(actual, expected)
})

test("Array of promises", () => {
    const input = [
        Promise.resolve(1),
        new Promise(res => setTimeout(res, 1, 2)),
        Promise.resolve(3),
    ]
    const actual = map(input, x => x + 1)
    const expected = [2, 3, 4]
    toEqual(actual, expected)
})
