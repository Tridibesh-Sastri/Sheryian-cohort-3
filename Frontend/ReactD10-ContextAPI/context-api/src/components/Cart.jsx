import React from 'react'
import { WebContext } from '../context/WebContext.jsx';

const Cart = (
//     {
//   cartItems,
//   onIncrease,
//   onDecrease,
//   onRemove,
//   onCheckout,
// }
) => {

    const {cartItems, setCartItems} = React.useContext(WebContext)

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
    
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );



  const onIncrease = (id) => {
    setCartItems((prev) => {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      });
  }

  const onDecrease = (id) => {
    setCartItems((prev) => {
      const item = prev.find((item) => item.id === id);
      if (item && item.quantity === 1) {
        return prev.filter((item) => item.id !== id);
      } 
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  }

  const onRemove = (id) => {
    setCartItems((prev) => {
        return prev.filter((item) => item.id !== id);
    })
  }
    


  if (cartItems.length === 0) {
    return (
      <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex min-h-80 flex-col items-center justify-center text-center">
          <div className="mb-4 text-5xl">🛒</div>

          <h2 className="text-xl font-bold text-gray-900">
            Your cart is empty
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Add some products to your cart to get started.
          </p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm">
      
      {/* Header */}
      <div className="border-b border-gray-200 p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            Shopping Cart
          </h2>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </span>
        </div>
      </div>

      {/* Cart Items */}
      <div className="max-h-[500px] divide-y divide-gray-200 overflow-y-auto">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 p-5"
          >
            {/* Image */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-2">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Information */}
            <div className="min-w-0 flex-1">
              <h3
                className="line-clamp-2 text-sm font-semibold text-gray-900"
                title={item.title}
              >
                {item.title}
              </h3>

              <p className="mt-1 text-sm font-medium text-gray-700">
                ${item.price.toFixed(2)}
              </p>

              {/* Quantity Controls */}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center rounded-lg border border-gray-200">
                  <button
                    onClick={() => onDecrease(item.id)}
                    className="px-3 py-1.5 text-gray-600 transition hover:bg-gray-100"
                  >
                    −
                  </button>

                  <span className="min-w-8 text-center text-sm font-medium">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => onIncrease(item.id)}
                    className="px-3 py-1.5 text-gray-600 transition hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => onRemove(item.id)}
                  className="text-xs font-medium text-red-500 transition hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="border-t border-gray-200 p-5">
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="border-t border-gray-200 pt-3">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">
                Total
              </span>

              <span className="text-2xl font-bold text-gray-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <button
        //   onClick={onCheckout}
          className="mt-5 w-full rounded-xl bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]"
        >
          Proceed to Checkout
        </button>
      </div>
    </aside>
  );
};

export default Cart;
