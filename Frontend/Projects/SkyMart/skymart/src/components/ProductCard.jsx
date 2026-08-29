import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {

    const navigate = useNavigate();

  return (
    <div
      className="
        group relative w-full max-w-sm
        overflow-hidden rounded-3xl
        border border-slate-800
        bg-slate-900
        shadow-xl shadow-black/20
        transition-all duration-500 ease-out
        hover:-translate-y-2
        hover:border-indigo-500/40
        hover:shadow-2xl
        hover:shadow-indigo-500/10
      "
    >
      {/* ================================
          IMAGE SECTION
      ================================= */}

      <div
        onClick={() => navigate(`/shop/${product.id}`)}
        className="
          relative m-3 overflow-hidden
          rounded-2xl
          bg-slate-950
        "
      >
        {/* Glow */}
        <div
          className="
            pointer-events-none
            absolute -right-10 -top-10
            h-32 w-32
            rounded-full
            bg-indigo-600/20
            blur-3xl
            transition-all duration-500
            group-hover:bg-purple-500/30
          "
        />

        {/* Category */}
        <div
          className="
            absolute left-3 top-3 z-10
            rounded-full
            border border-white/10
            bg-slate-900/80
            px-3 py-1
            text-[11px] font-medium
            capitalize
            text-indigo-300
            backdrop-blur-md
          "
        >
          {product.category}
        </div>

        {/* Product Image */}
        <div className="flex h-64 items-center justify-center p-8">
          <img
            src={product.image}
            alt={product.title}
            className="
              relative z-[1]
              h-full w-full
              object-contain
              drop-shadow-2xl
              transition-all duration-700 ease-out
              group-hover:scale-110
              group-hover:-rotate-2
            "
          />
        </div>

        {/* Image Bottom Gradient */}
        <div
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0
            h-24
            bg-gradient-to-t
            from-slate-950
            to-transparent
          "
        />

        {/* Product ID */}
        <span
          className="
            absolute bottom-3 right-3
            rounded-full
            border border-slate-700
            bg-slate-900/80
            px-2.5 py-1
            text-[10px]
            text-slate-400
            backdrop-blur-md
          "
        >
          #{product.id}
        </span>
      </div>

      {/* ================================
          PRODUCT CONTENT
      ================================= */}

      <div className="px-5 pb-5">

        {/* Title */}
        <h2
          className="
            line-clamp-2
            min-h-[48px]
            text-lg font-semibold
            leading-6
            text-white
            transition-colors duration-300
            group-hover:text-indigo-300
          "
        >
          {product.title}
        </h2>

        {/* Description */}
        <p
          className="
            mt-3 line-clamp-2
            text-sm leading-5
            text-slate-400
          "
        >
          {product.description}
        </p>

        {/* ================================
            RATING
        ================================= */}

        <div className="mt-4 flex items-center justify-between">

          <div className="flex items-center gap-2">

            {/* Stars */}
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`
                    text-sm
                    transition-transform duration-300
                    group-hover:scale-110
                    ${
                      star <= Math.round(product.rating.rate)
                        ? "text-indigo-400"
                        : "text-slate-700"
                    }
                  `}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Rating */}
            <span className="text-sm font-semibold text-white">
              {product.rating.rate}
            </span>
          </div>

          {/* Review Count */}
          <span className="text-xs text-slate-500">
            {product.rating.count} reviews
          </span>
        </div>

        {/* ================================
            PRICE + ACTION
        ================================= */}

        <div
          className="
            mt-5 flex items-center
            justify-between
            border-t border-slate-800
            pt-5
          "
        >
          {/* Price */}
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Price
            </p>

            <p
              className="
                mt-1 text-2xl font-bold
                bg-gradient-to-r
                from-blue-400
                via-indigo-400
                to-purple-400
                bg-clip-text
                text-transparent
              "
            >
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Add to Cart */}
          <button
            className="
              group/btn
              relative overflow-hidden
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              to-blue-600
              px-4 py-2.5
              text-sm font-semibold
              text-white
              shadow-lg shadow-indigo-600/20
              transition-all duration-300
              hover:scale-105
              hover:from-indigo-500
              hover:to-purple-600
              active:scale-95
            "
          >
            <span
              className="
                relative z-10
                flex items-center gap-2
              "
            >
              <span
                className="
                  transition-transform duration-300
                  group-hover/btn:rotate-12
                "
              >
                +
              </span>

              Add
            </span>

            {/* Button Shine */}
            <span
              className="
                absolute inset-y-0 -left-10
                w-8 rotate-12
                bg-white/20
                blur-sm
                transition-all duration-500
                group-hover/btn:left-[120%]
              "
            />
          </button>
        </div>
      </div>

      {/* ================================
          BOTTOM ACCENT
      ================================= */}

      <div
        className="
          h-1 w-0
          bg-gradient-to-r
          from-blue-500
          via-indigo-500
          to-purple-500
          transition-all duration-500
          group-hover:w-full
        "
      />
    </div>
  );
};

export default ProductCard;