import {zip, toArray} from "../es"

function toEqual(actual, expected) {
    toArray(actual)
        .then(output => expect(output).toEqual(expected))
        .catch(console.log)
}

test.only("Simple arrays", () => {
    const input1 = [1, 2, 3]
    const input2 = [4, 5]
    const actual = zip(input1, input2)
    const expected = [[1, 4], [2, 5]]
    toEqual(actual, expected)
})
