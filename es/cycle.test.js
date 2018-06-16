import {cycle, take, toArray} from "../es"

function toEqual(actual, expected) {
    toArray(actual)
        .then(output => expect(output).toEqual(expected))
        .catch(console.log)
}

test("Simple array", () => {
    const input = [1, 2, 3]
    const actual = take(10)(cycle()(input))
    const expected = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1]
    toEqual(actual, expected)
})
