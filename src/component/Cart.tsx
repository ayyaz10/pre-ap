import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Cart = () => {
  const [firstItem, setFirstItem] = useState({
    name: "Biryani",
    quantity: 2,
  });
  useEffect(() => {
    setTimeout(() => {
      setFirstItem((item) => {
        return {
          ...item,
          quantity: 10,
        };
      });
    }, 1000);
  });

  return (
    <section className="max-w-sm mx-auto">
      <h1>Cart</h1>
      <ul>
        <MenuItem item={firstItem} />
        <MenuItem item={{ name: "Chicken Karai", quantity: 5 }} />
        <MenuItem item={{ name: "Chinese Rice", quantity: 1 }} />
      </ul>
    </section>
  );
};

export default Cart;
