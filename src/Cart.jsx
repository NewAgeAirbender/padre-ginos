import { priceConverter } from "./useCurrency";
export default function Cart({ cart, checkout }) {
  // TODO: Add total
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className="size">{item.size}</span> –
            <span className="type">{item.pizza.name}</span> –
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
      {/* display total */}
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
