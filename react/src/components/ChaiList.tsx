import { ChaiCard } from "./ChaiCard"
import type { Chai } from "../types"

interface ChaiListProps {
    items: Chai[]
}

export function ChaiList({ items }: ChaiListProps) {
    return (
        <div>
            {items.map((chai) => (
                <ChaiCard
                    key={chai.id}
                    name={chai.name}
                    price={chai.price}
                    isSpecial={true}
                />
            ))}
        </div>
    )
}