interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

const fetchTodo = async() => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data: Todo = await res.json()
    } catch (err) {
        console.error("Error fetching Todo");
        if(err instanceof Error){
            console.error("Error msg:", err.message)
        }
    }
}

fetchTodo()