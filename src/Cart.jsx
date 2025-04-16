import { priceConverter } from "./useCurrency";
import { useState, useEffect } from "react";

function Counter() {
  let [c, sC] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      sC(c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // TOFIX: only gets to 1??
  return <h1>Time ordering: {c}</h1>;
}

export default function Cart({ cart, checkout, text }) {
  const [bT] = useState(text);
  const [showCondiTex, setCondiText] = useState(false);

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const c = cart[i];
    total += c.pizza.sizes[c.size];
  }

  const toggleText = () => {
    setCondiText((showCondiTex) => !showCondiTex);
  };
  return (
    <div className="cart">
      <Counter />
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
      <button onClick={toggleText}>{bT}</button>
      {showCondiTex && <p>It's here!</p>}
      {!showCondiTex && <p>No way</p>}
      <p>Total: {priceConverter(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
