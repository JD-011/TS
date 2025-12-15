const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrices: number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0]

type Chai = {
    name: string
    price: number
}

const menu: Chai[] = [
    {
        name: "Masala",
        price: 15
    },
    {
        name: "Adrak",
        price: 25
    }
]

const cities: readonly string[] = ["Bangalore", "Ahmedabad"]
// cities.push("Delhi") // Error: cannot modify readonly array

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let chaiTuple: [string, number]
chaiTuple = ["Masala", 20]
// chaiTuple = [20, "Masala"] // Error: Type 'number' is not assignable to type 'string'

let userInfo: [string, number, boolean?]
userInfo = ["L", 11]
userInfo = ["vecna", 1, true]

const location: readonly [number, number] = [19.0760, 72.8777]

const chaiItems:[name: string, price: number] = ["Adrak", 25]

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size: CupSize = CupSize.MEDIUM

enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCLELED // 102
}

enum ChaiType {
    MASALA = "Masala",
    GINGER = "Ginger"
}

function makeChai(type: ChaiType){
    console.log(`Making: ${type}`)
    
}

makeChai(ChaiType.MASALA)
// makeChai("Ginger") // Error: Argument of type '"Ginger"' is not assignable to parameter of type 'ChaiType'

enum RandomEnum {
    ID = 1,
    NAME = "Chai"
}
// RandomEnum.NAME = "coffee " // Error: Cannot assign to 'NAME' because it is a read-only property

let t: [string, number] = ["chai", 10]
t.push("extra") // Unexpected behavior, cause at the end tuple is array in js