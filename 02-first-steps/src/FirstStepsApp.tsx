import { ItemCounter } from "./shopping-cart/itemCounter";


interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    {productName: 'Nintendo switch 2', quantity: 1},
    {productName: 'Play station', quantity: 5},
    {productName: 'Sega genesis', quantity: 6}

]

export default function FirstStepsApp() {
  return (
<>
    <h1>carrito de compras</h1>
{
    itemsInCart.map(({productName, quantity}) => (
        <ItemCounter key={productName}  name={productName} quantity={quantity} />
    ))}
    {/* <ItemCounter name="Nintendo Switch 2" quantity={5} />
    <ItemCounter name="Sega Genesis" quantity={10} />
    <ItemCounter name="Play Station" quantity={2} /> */}
</>  
)
}
