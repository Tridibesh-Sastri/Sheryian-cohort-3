import { React, useContext } from "react";
import { WebContext } from "../context/WebContext";
import ProductCard from "./ProductCard"

const ProdBox = () => {
  const { prods, setCartItems, cartItems } = useContext(WebContext);
  // console.log(prods)

  const onAddToCart = (id) => {
    const productToAdd = prods.find((prod) => prod.id === id);
    if (!productToAdd) return;

    
    if (!cartItems.some((item)=> item.id === id)) {
      setCartItems((prevCartItems) => {
        return [...prevCartItems, {...productToAdd, quantity: 1}];
      });
    }

    else{
      setCartItems((prev) => {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      });
    }
  };

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
      {prods.map((prod, index) => {
        return (
          <ProductCard
            key={index}
            product={prod}
            onAddToCart={onAddToCart}
          />
          // <h1>{prod.id, prod.title, prod.price,prod.rating }</h1>
        );
      })}
    </div>
  );
};

export default ProdBox;
