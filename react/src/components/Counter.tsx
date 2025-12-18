import { useState } from "react"

export function Counter() {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <p>Cups ordered: {counter}</p>
            <button onClick={() => setCounter((c) => c + 1)}>Order one more</button>
        </div>
    )
}