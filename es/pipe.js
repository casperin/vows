export default function pipe(...fns) {
    return fns.reduce((reader, writer) => writer(reader))
}
