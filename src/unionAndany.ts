// unioin:

let subs: number | string = "1M"

let apiRequestStatus: "pending" | "success" | "error" = "pending"

// apiRequestStatus = "loading" // Error: Type '"loading"' is not assignable to type '"pending" | "success" | "error"'.

apiRequestStatus = "success"

const orders = ['1', '2', '3', '4']

let currOrder: string | undefined

for(let order of orders) {
    if(order == '3'){
        currOrder = order
        break
    }
}

// currOrder = 42

console.log(currOrder);

// any:

let randomValue: any = 10

randomValue = true

randomValue = "Chaiaurcode"

randomValue = {}