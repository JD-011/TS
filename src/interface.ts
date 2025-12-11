type ChaiOrder = {
    type: string
    sugar: number
    strong: boolean
}

function makeChai(order: ChaiOrder){
    console.log(order)
}

function serveChai(order: ChaiOrder){
    console.log(order)
}

type TeaRecipe = {
    water: number
    milk: number
}

class MasalaChai implements TeaRecipe {
    water = 100
    milk = 50
}

// type CupSize = "small" | "large"
// class Chai implements CupSize{} // Error: A class can only implement an object type or intersection of object types with statically known members.

interface CupSize {
    size: "small" | "large"
}

class Chai implements CupSize {
    size: "small" | "large" = "small"
}

// type Responce = {ok: true} | {ok: false}
// class MyRes implements Responce {} // Error: A class can only implement an object type or intersection of object types with statically known members.

interface Responce {
    ok: boolean
}

class MyRes implements Responce {
    ok = true
}

type BaseChai = {
    teaLeaves: number
}

type Extra = {
    masala: number
}

type MasallaChai = BaseChai & Extra

const cup: MasallaChai = {
    teaLeaves: 10,
    masala: 5
}

type User = {
    username: string
    bio?: string
}

const u1: User = {
    username: "Jayveer"
}

const u2 = {
    username: "ChaiLover",
    bio: "I love chai"
}

type Config = {
    readonly appName: string
    version: number
}

const conf: Config = {
    appName: "MasterJi",
    version: 1
}

// conf.appName = "ChaiCode" // Error: Cannot assign to 'appName' because it is a read-only property.