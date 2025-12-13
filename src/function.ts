function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type} chai`)
}

makeChai("Masala", 2)

function getChaiPrice(): number{
    return 25
}

function makeOrder(order: string): string {
    // if(!order) return null; // not allowed
    return order
}

function logChai(): void {
    console.log("Chai is ready!")
    // return "anything" // not allowed
}

function orderChai(type?: string){} // optional parameter
function orderCooffe(size: string = "medium"){} // default parameter

function createChai(
    order: {
        type: string
        sugar: number
        size: "small" | "large"
    }
): number {
    return 11
}