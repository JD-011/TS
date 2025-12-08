function getChai(kind: String | number){
    if(typeof kind === "string"){
        return `Making ${kind} chai...`
    }
    return `Chai order: ${kind}`
}

function serveChai(msg?: String){
    if(msg) return `Serving ${msg}`
    return `Serving default masala chai` // try adding msg. here...
}

function orderChai(size: "small" | "medium" | "large" | number){
    if(size === "small"){
        return `small cutting chai...`
    }
    if(size === "medium" || size == "large"){
        return "make extra chai"
    }
    return `chai order ${size}`
}

class KulhadChai{
    serve(){
        return `Serving kulhad chai`
    }
}

class CuttingChai{
    serve(){
        return `serving cutting chai`
    }
}

function serve(chai: KulhadChai | CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve() // this will call KulhadChai's method
    }
    return chai.serve() // this will call CuttingChai's method
}

type ChaiOrder = {
    type: String
    sugar: number
}

function isChaiOrder(obj: any): obj is ChaiOrder{
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(order: ChaiOrder | String){
    if(isChaiOrder(order)) return `Serving ${order.type} chai with ${order.sugar} spoons of sugar`
    return `Serving custom chai: ${order}`
}

type MasalaChai = {type: "masala", spiceLevel: number}
type GingerChai = {type: "ginger", gingerSlices: number}
type ElaichiChai = {type: "elaichi", elaichiPods: number}

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order: Chai){
    switch (order.type) {
        case "masala":
            return "Masala Chai"
        case "elaichi":
            return "Elaichi Chai"
        case "ginger":
            return "Ginger Chai"
    }
}

function brew(order: MasalaChai | GingerChai){
    if("spiceLevel" in order){
        // order is MasalaChai
        return `Brewing masala chai with spice level ${order.spiceLevel}`
    }
    // order is GingerChai
    return `Brewing ginger chai with ${order.gingerSlices} slices of ginger`
}

function isStringArray(arr: unknown): arr is string[]{
    return Array.isArray(arr) && arr.every(item => typeof item === "string");
}