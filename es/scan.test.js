import {scan, toArray} from "../es"

function toEqual(actual, expected) {
    toArray(actual)
        .then(output => expect(output).toEqual(expected))
        .catch(console.log)
}

test("Simple array", () => {
    const input = [1, 2, 3]
    const add = (x, y) => x + y
    const actual = scan(input, 10, add)
    const expected = [11, 13, 16]
    toEqual(actual, expected)
})
