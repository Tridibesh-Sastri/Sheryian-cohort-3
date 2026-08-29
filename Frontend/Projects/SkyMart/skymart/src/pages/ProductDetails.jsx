import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import ProductLoading from "../components/ProductLoading";


const ProductDetails = () => {
  const { products } = useContext(StoreContext);
  const { id } = useParams();

  const product = products.find((p)=> p.id === parseInt(id));

  // If you're fetching by ID, replace this with your fetched product.
  // For now, this component expects `product` as a prop.
  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <ProductLoading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* =====================================================
          BACKGROUND AMBIENCE
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div
          className="
            absolute -left-40 -top-40
            h-96 w-96
            rounded-full
            bg-indigo-600/10
            blur-3xl
          "
        />

        <div
          className="
            absolute -bottom-40 -right-40
            h-96 w-96
            rounded-full
            bg-purple-600/10
            blur-3xl
          "
        />
      </div>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm">

          <span 
          onClick={() => window.history.back()}
          className="text-slate-500 cursor-pointer" >
            Shop
          </span>

          <span className="text-slate-700">
            /
          </span>

          <span className="capitalize text-indigo-400">
            {product.category}
          </span>

          <span className="text-slate-700">
            /
          </span>

          <span className="max-w-[250px] truncate text-slate-400">
            Product #{id || product.id}
          </span>

        </div>

        {/* =====================================================
            PRODUCT CONTAINER
        ====================================================== */}

        <section
          className="
            overflow-hidden
            rounded-3xl
            border border-slate-800
            bg-slate-900/70
            shadow-2xl shadow-black/20
            backdrop-blur-xl
          "
        >

          <div className="grid lg:grid-cols-2">

            {/* =================================================
                IMAGE SIDE
            ================================================== */}

            <div
              className="
                relative
                flex min-h-[500px]
                items-center justify-center
                overflow-hidden
                bg-slate-950
                p-8 sm:p-12
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute left-1/2 top-1/2
                  h-72 w-72
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-indigo-600/10
                  blur-3xl
                "
              />

              {/* Decorative Rings */}
              <div
                className="
                  absolute h-80 w-80
                  rounded-full
                  border border-indigo-500/10
                "
              />

              <div
                className="
                  absolute h-64 w-64
                  rounded-full
                  border border-purple-500/10
                "
              />

              {/* Category Badge */}
              <div
                className="
                  absolute left-6 top-6 z-10
                  rounded-full
                  border border-indigo-500/20
                  bg-indigo-500/10
                  px-4 py-2
                  text-xs font-medium
                  capitalize
                  text-indigo-300
                  backdrop-blur-md
                "
              >
                {product.category}
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="
                  relative z-10
                  max-h-[420px]
                  max-w-[80%]
                  object-contain
                  drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              {/* Product ID */}
              <div
                className="
                  absolute bottom-6 right-6
                  rounded-full
                  border border-slate-700
                  bg-slate-900/80
                  px-3 py-1.5
                  text-xs text-slate-500
                  backdrop-blur-md
                "
              >
                PRODUCT #{product.id}
              </div>
            </div>

            {/* =================================================
                INFORMATION SIDE
            ================================================== */}

            <div className="flex flex-col p-7 sm:p-10 lg:p-12">

              {/* Small Label */}
              <p
                className="
                  text-xs font-semibold
                  uppercase tracking-[0.25em]
                  text-indigo-400
                "
              >
                Featured Product
              </p>

              {/* Title */}
              <h1
                className="
                  mt-4
                  text-3xl font-bold
                  leading-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {product.title}
              </h1>

              {/* Rating */}
              <div className="mt-6 flex flex-wrap items-center gap-4">

                <div
                  className="
                    flex items-center gap-2
                    rounded-full
                    border border-slate-700
                    bg-slate-950
                    px-4 py-2
                  "
                >
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          star <= Math.round(product.rating.rate)
                            ? "text-indigo-400"
                            : "text-slate-700"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <span className="font-semibold text-white">
                    {product.rating.rate}
                  </span>
                </div>

                <span className="text-sm text-slate-500">
                  {product.rating.count} customer reviews
                </span>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-slate-800" />

              {/* Description */}
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  About this product
                </h2>

                <p className="mt-3 text-base leading-7 text-slate-300">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-8">

                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Current Price
                </p>

                <div className="mt-2 flex items-end gap-3">

                  <span
                    className="
                      text-4xl font-bold
                      bg-gradient-to-r
                      from-blue-400
                      via-indigo-400
                      to-purple-400
                      bg-clip-text
                      text-transparent
                    "
                  >
                    ${product.price.toFixed(2)}
                  </span>

                  <span className="mb-1 text-sm text-slate-500">
                    USD
                  </span>
                </div>
              </div>

              {/* =================================================
                  ACTIONS
              ================================================== */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                {/* Add To Cart */}
                <button
                  className="
                    group
                    flex flex-1
                    items-center justify-center gap-3
                    rounded-xl
                    bg-gradient-to-r
                    from-indigo-600
                    via-blue-600
                    to-purple-600
                    px-6 py-4
                    font-semibold text-white
                    shadow-xl shadow-indigo-600/20
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:shadow-2xl
                    hover:shadow-indigo-500/30
                    active:scale-95
                  "
                >
                  <span
                    className="
                      text-xl
                      transition-transform duration-300
                      group-hover:rotate-12
                    "
                  >
                    +
                  </span>

                  Add to Cart
                </button>

                {/* Wishlist */}
                <button
                  className="
                    flex items-center
                    justify-center
                    rounded-xl
                    border border-slate-700
                    bg-slate-950
                    px-5 py-4
                    text-xl
                    text-slate-400
                    transition-all duration-300
                    hover:border-purple-500/40
                    hover:bg-purple-500/10
                    hover:text-purple-400
                    active:scale-95
                  "
                  aria-label="Add to wishlist"
                >
                  ♡
                </button>

              </div>

              {/* =================================================
                  FEATURES
              ================================================== */}

              <div className="mt-8 grid grid-cols-2 gap-3">

                <Feature
                  icon="⚡"
                  title="Fast Delivery"
                  description="Quick dispatch"
                />

                <Feature
                  icon="✓"
                  title="Quality Checked"
                  description="Verified product"
                />

                <Feature
                  icon="↻"
                  title="Easy Returns"
                  description="Hassle-free"
                />

                <Feature
                  icon="◆"
                  title="Secure Payment"
                  description="100% protected"
                />

              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            PRODUCT META
        ====================================================== */}

        <section className="mt-8 grid gap-4 sm:grid-cols-3">

          <InfoCard
            label="Category"
            value={product.category}
          />

          <InfoCard
            label="Product ID"
            value={`#${product.id}`}
          />

          <InfoCard
            label="Reviews"
            value={`${product.rating.count} reviews`}
          />

        </section>

      </main>
    </div>
  );
};

/* =============================================================
   FEATURE COMPONENT
============================================================= */

const Feature = ({ icon, title, description }) => {
  return (
    <div
      className="
        rounded-xl
        border border-slate-800
        bg-slate-950/60
        p-4
        transition-all duration-300
        hover:border-indigo-500/30
        hover:bg-indigo-500/5
      "
    >
      <div className="flex items-center gap-3">

        <div
          className="
            flex h-9 w-9
            items-center justify-center
            rounded-lg
            bg-indigo-500/10
            text-indigo-400
          "
        >
          {icon}
        </div>

        <div>
          <p className="text-sm font-medium text-slate-200">
            {title}
          </p>

          <p className="mt-0.5 text-xs text-slate-500">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
};

/* =============================================================
   INFO CARD
============================================================= */

const InfoCard = ({ label, value }) => {
  return (
    <div
      className="
        rounded-2xl
        border border-slate-800
        bg-slate-900/60
        p-5
        transition-all duration-300
        hover:-translate-y-1
        hover:border-indigo-500/30
        hover:bg-slate-900
      "
    >
      <p className="text-xs uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <p className="mt-2 capitalize text-lg font-semibold text-white">
        {value}
      </p>
    </div>
  );
};

export default ProductDetails;