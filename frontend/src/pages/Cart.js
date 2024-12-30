import React, { useState, useEffect } from "react";
import axios from "axios";

function Cart() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:5000/cart");
        setCart(response.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  const removeFromCart = async (sandwichId) => {
    try {
      const response = await axios.post("http://localhost:5000/cart/remove", { cartId: cart._id, sandwichId });
      setCart(response.data.cart); // Update the cart after removing the item
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div>
        {cart && cart.sandwiches.map((sandwich) => (
          <div key={sandwich._id}>
            <p>{sandwich.name} - ${sandwich.price}</p>
            <button onClick={() => removeFromCart(sandwich._id)}>Remove</button>
          </div>
        ))}
      </div>
      <div>Total: ${cart && cart.totalPrice}</div>
    </div>
  );
}

export default Cart;
