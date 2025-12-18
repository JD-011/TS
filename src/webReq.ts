import axios from 'axios';
import type { AxiosResponse } from 'axios';

interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

const fetchTodo = async() => {
    try {
        const res: AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log("Todo:", res.data)
    } catch (err: any) {
        if(axios.isAxiosError(err)){
            console.error("Axios Error:", err.message)
            if(err.response){
                console.error("Error code:", err.response.status)
            }
        } else {
            console.error("Error fetching Todo:", err)
        }
    }
}

fetchTodo()