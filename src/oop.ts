class Chai {
    flavour: string
    price: number

    constructor(flavour: string, price: number){
        this.flavour = flavour
        this.price = price
        console.log(this);   
    }
}

const masalaChai = new Chai("Masala", 15)

class User {
    public name: string
    private pass: string

    constructor(name: string, pass: string){
        this.name = name
        this.pass = pass
    }

    getPass(): string {
        return this.pass
    }
}

const user = new User("Tenma", "TheGoat")
// user.pass = "1234" // Error: Property 'pass' is private and only accessible within class 'User'.
const password = user.getPass()

class Shop{
    protected shopName: string

    constructor(shopName: string){
        this.shopName = shopName
    }
}

class Branch extends Shop{
    constructor(shopName: string){
        super(shopName)
    }

    getShopName(): string {
        return this.shopName
    }
}

const branch = new Branch("Chai Point")
const shopName = branch.getShopName()

class Walet {
    #balance = 10

    getBalance(): number {
        return this.#balance
    }
}

const w = new Walet()
const balance = w.getBalance()

class Cup {
    readonly capacity: number = 250

    constructor(capacity: number){
        this.capacity = capacity
    }
}

const cup = new Cup(300)
// cup.capacity = 400 // Error: Cannot assign to 'capacity' because it is a read-only property.

class ModernChai{
    private _sugar: number

    constructor(sugar: number){
        this._sugar = sugar
    }

    get sugar(): number {
        return this._sugar
    }

    set sugar(value: number){
        this._sugar = value
    }
}

const chai = new ModernChai(2)
chai.sugar = 3

class EkChai {
    static shopName: string = "ChaiCode Caffe"
}

console.log(EkChai.shopName)

abstract class Drink {
    abstract make(): void
}

class MyChai extends Drink {
    make(){
        console.log("Brewing chai");
    }
}

class Heater {
    heat(){}
}

class ChaiMaker {
    constructor(private heater: Heater){}

    makeChai(){
        this.heater.heat()        
    }
}