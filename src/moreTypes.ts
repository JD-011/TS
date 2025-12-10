// forcefull type assertion:

let res: any = "Chai"
let nummericLength: number = (res as string).length

type Book = {
    name: string
}
let bookString = '{"name" : "vinland saga"}'
let bookObject = JSON.parse(bookString) as Book
console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement

// unexpected behavior:
const number:any = 11
const str = number as string
console.log(typeof str)
console.log(str)

// any vs unknown:

let value: any

value = "chai"
value = [1,2,3]
value = 2.5
value.toUpperCase() // not showing any error

let newValue: unknown

newValue = "chai"
newValue = [1,2,3]
newValue = 2.5
// newValue.toUpperCase() // Error: Object is of type 'unknown'.

if(typeof newValue === "string"){
    newValue.toUpperCase() // no error
}

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);    
    }
    console.log("Error:", error);
}

const data: unknown = "Chai aur Code"
const strData: string = data as string

type Role = "admin" | "user"

function redirectBasedOnRole(role: Role){
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard");
        return
    }
    role; // to check if all cases are handled
}

function neverReturns(): never {
    while(true){}
}