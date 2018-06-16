import {dropWhile, toArray} from "../es"

function toEqual(actual, expected) {
    toArray(actual)
        .then(output => expect(output).toEqual(expected))
        .catch(console.log)
}

test("Simple array", () => {
    const input = [1, 2, 3, 4, 5, 1, 2, 3]
    const actual = dropWhile(x => x < 3)(input)
    const expected = [3, 4, 5, 1, 2, 3]
    toEqual(actual, expected)
})
