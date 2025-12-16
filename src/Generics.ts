function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray("life")
wrapInArray(11)
wrapInArray({ religion: "Arhiest" })

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}

pair("Chai", 11)
pair(true, { name: "Tenma" })

interface Box<T> {
    content: T
}

const numberBox: Box<number> = { content: 11 }
const stringBox: Box<string> = { content: "anime" }

interface ApiPromise<T> {
    status: number
    data: T
}

const res: ApiPromise<{flavour: string}> = {
    status: 200,
    data: { flavour: "Masala" }
} 