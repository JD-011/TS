const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

// Type Inference:

// {
//     name: string
//     price: number
//     isHot: boolean
// }

// Object types annotation:

let tea: {
    name: string
    price: number
    isHot: boolean
}

tea = {
    name: "Ginger Tea",
    price: 15,
    isHot: false
}

type Tea = {
    name: string
    price: number
    ingredients: string[]
}

const adarakChai: Tea = {
    name: "Adarak Chai",
    price: 25,
    ingredients: ["water", "milk", "tea leaves", "ginger"]
}

type Cup = {
    size: string
}

let smallCup: Cup = {
    size: "small"
}

let bigCup = {
    size: "large",
    material: "steel"
}

smallCup = bigCup // OK: bigCup has at least the properties of smallCup

type Brew = {
    brewTime: number
}

const coffee = {
    brewTime: 5,
    beans: "arabica"
}

const chaiBrew: Brew = coffee // OK: coffee has at least the properties of Brew

type Item = {
    name: string
    quantity: number
}

type Address = {
    street: string
    pin: number
}

type order = {
    id: number
    items: Item[]
    address: Address
}

type Chai = {
    name: string
    price: number
    isHot: boolean
}

const upddateChai = (updates: Partial<Chai>) => {
    console.log("updating chai with", updates)
}

upddateChai({price: 30})
upddateChai({isHot: false})
upddateChai({})

type ChaiOrder = {
    name?: string
    quantity?: number
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order)
}

placeOrder({
    name: "Masala Chai",
    quantity: 2
})

// placeOrder({}) // Here both name and quantity are required

type Cooffe = {
    name: string
    price: number
    isHot: boolean
    ingredients: string[]
}

type LiteCoofee = Pick<Cooffe, "name" | "price">

const coofee: LiteCoofee = {
    name: "Espresso",
    price: 30
}

type SecretChai = {
    name: string
    price: number
    isHot: boolean
    secretIngredient: string[]
}

type PublicChai = Omit<SecretChai, "secretIngredient">