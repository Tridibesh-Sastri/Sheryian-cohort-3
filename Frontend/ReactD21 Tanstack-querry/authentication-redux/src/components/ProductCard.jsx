import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// const product = {
//   title: "Essence Mascara Lash Princess",
//   brand: "Essence",
//   price: 9.99,
//   rating: 2.56,
//   stock: 99,
//   discountPercentage: 10.48,
//   thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
//   availabilityStatus: "In Stock"
// };

export default function ProductCard({product}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className=" ">
      <div 
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
        className="relative w-80 rounded-2xl bg-slate-950 border border-slate-800 p-5 overflow-hidden shadow-2xl transition-all duration-300 hover:border-amber-500/50 group"
      >
        {/* React Bits Style Interactive Spotlight Background Glow */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(245, 158, 11, 0.18), rgba(217, 119, 6, 0.08), transparent 40%)`,
          }}
        />

        {/* Saffron / Golden Badge */}
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs px-2.5 py-1 rounded-full shadow-lg">
          -{product.discountPercentage}%
        </div>

        {/* Thumbnail Container */}
        <div className="relative w-full h-52 bg-slate-900/60 rounded-xl overflow-hidden flex items-center justify-center mb-4 border border-slate-800/80">
          <motion.img 
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            src={product.thumbnail} 
            alt={product.title} 
            className="object-contain h-40 w-40 drop-shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-2 relative z-10">
          <div className="flex items-center justify-between text-xs text-amber-400 font-medium uppercase tracking-wider">
            <span>{product.brand}</span>
            <span className="text-slate-400">{product.availabilityStatus}</span>
          </div>

          <h3 className="text-white font-semibold text-lg line-clamp-1 group-hover:text-amber-300 transition-colors">
            {product.title}
          </h3>

          <div className="flex items-center space-x-1 text-yellow-500 text-sm">
            <span>★</span>
            <span className="text-slate-300 font-bold">{product.rating}</span>
            <span className="text-slate-500 text-xs">({product.stock} left)</span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
            <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
              ${product.price}
            </span>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all cursor-pointer"
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}