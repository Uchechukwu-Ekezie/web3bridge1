import  { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() =>
            addToCart({ id: "1", name: "Product A", price: 100 })
          }
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Product A
        </button>
        <button
          onClick={() =>
            addToCart({ id: "2", name: "Product B", price: 200 })
          }
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add Product B
        </button>
      </div>
      <div className="space-y-4">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-gray-100 rounded shadow"
            >
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-500">${item.price}</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mt-6">
        Total: ${getTotalPrice()}
      </h3>
    </div>
  );
};

export default Cart;
