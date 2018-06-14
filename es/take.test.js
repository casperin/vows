import {take, toArray} from "../es"

function toEqual(actual, expected) {
    toArray(actual)
        .then(output => expect(output).toEqual(expected))
        .catch(console.log)
}

test("Simple array", () => {
    const input = [1, 2, 3, 4, 5]
    const actual = take(input, 2)
    const expected = [1, 2]
    toEqual(actual, expected)
})

test("Count higher than input", () => {
    const input = [1, 2, 3, 4, 5]
    const actual = take(input, 20)
    toEqual(actual, input)
})

test("Negative count", () => {
    const input = [1, 2, 3, 4, 5]
    const actual = take(input, -3)
    toEqual(actual, [])
})

