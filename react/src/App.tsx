import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { ChaiCard } from './components/ChaiCard'
// import { Counter } from './components/Counter'
import { ChaiList } from './components/ChaiList'
import type { Chai } from './types'
import { OrderForm } from './components/OrderForm'
import { Card } from './components/Card'

const menu: Chai[] = [
  {id: 1, name: "Masala", price: "$1"},
  {id: 2, name: "Ginger", price: "$2"},
  {id: 3, name: "Lemon", price: "$2"}
]

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ChaiList items={menu} />
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Order received:", order)
          }}
        />
      </div>
      <div>
        <Card
          title="Chai aur TypeScript"
          footer={<button>Order Now</button>}
        >
          <p>by Hitesh Chaudhary</p>
        </Card> 
      </div>
    </>
  )
}

export default App
