import {stepBy, toArray} from "../es"

function toEqual(actual, expected) {
    toArray(actual)
        .then(output => expect(output).toEqual(expected))
        .catch(console.log)
}

test("Simple array", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const actual = stepBy(3)(input)
    const expected = [3, 6, 9]
    toEqual(actual, expected)
})
