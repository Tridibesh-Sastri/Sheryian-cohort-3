import React from 'react'

const ProductCard = ({ product, onAddToCart }) => {
    // const {prods, setCartItems} = React.useContext(WebContext)
  const { id, title, price, description, category, image, rating } = product;
//   console.log(rating)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-medium capitalize text-white">
          {category}
        </span>
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-5">
        
        {/* Title */}
        <h2
          className="line-clamp-2 text-lg font-semibold text-gray-900"
          title={title}
        >
          {title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-yellow-50 px-2 py-1">
            <span className="text-sm">★</span>
            <span className="text-sm font-medium text-gray-800">
              {rating.rate}
            </span>
          </div>

          <span className="text-sm text-gray-500">
            ({rating.count} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
          {description}
        </p>

        {/* Bottom Section */}
        <div className="mt-auto flex items-center justify-between gap-4 pt-5">
          
          {/* Price */}
          <span className="text-2xl font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>

          {/* Add To Cart */}
          <button
            onClick={() => onAddToCart?.(id)}
            className="rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;