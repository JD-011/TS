interface Chai {
    flavour: string
    price: number
    milk?: boolean
}

const masalaChai: Chai = {
    flavour: "Masala",
    price: 15
}

interface Shop {
    readonly id: number
    name: string
}

const shop: Shop = {
    id: 1,
    name: "Chai Point"
}

// shop.id = 2 // Error: Cannot assign to 'id' because it is a read-only property.

interface DiscountCalculator {
    (price: number): number
}

const apply50: DiscountCalculator = (p) => p*0.5

interface TeaMachine {
    start(): void
    stop(): void
}

const machine: TeaMachine = {
    start() {
        console.log("start")
    },
    stop(){
        console.log("stop");
    }
}

interface ChaiRating {
    [flavour: string]: number
}

const rating: ChaiRating = {
    masala: 4.5,
    ginger: 4.5,
}

interface User {
    name: string
}

interface User {
    age: number
}

const user: User = {
    name: "Thorfin",
    age: 20
}

interface A { a: string }
interface B { b: string }

interface C extends A, B {}