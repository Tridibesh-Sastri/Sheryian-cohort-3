import React from "react";
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";

const Home = ({ products = [] }) => {
  const featuredProducts = products.slice(0, 4);

  const categories = [
    {
      name: "Men's Clothing",
      icon: "◈",
      description: "Everyday essentials",
    },
    {
      name: "Women's Clothing",
      icon: "◇",
      description: "Style & comfort",
    },
    {
      name: "Jewelry",
      icon: "✦",
      description: "Small details",
    },
    {
      name: "Electronics",
      icon: "⌁",
      description: "Smart technology",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* =====================================================
          GLOBAL BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div
          className="
            absolute -left-60 -top-60
            h-[600px] w-[600px]
            rounded-full
            bg-indigo-600/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute -right-60 top-[30%]
            h-[600px] w-[600px]
            rounded-full
            bg-purple-600/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute bottom-0 left-1/3
            h-[400px] w-[400px]
            rounded-full
            bg-blue-600/5
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative">

        <div
          className="
            mx-auto grid min-h-[720px]
            max-w-7xl
            items-center
            gap-12
            px-6 py-20
            sm:px-10
            lg:grid-cols-[1.05fr_0.95fr]
            lg:px-12
          "
        >

          {/* =================================================
              HERO CONTENT
          ================================================== */}

          <div className="relative z-10">

            {/* Eyebrow */}
            <div
              className="
                mb-7 inline-flex
                items-center gap-2
                rounded-full
                border border-indigo-500/20
                bg-indigo-500/10
                px-4 py-2
                text-xs font-semibold
                uppercase tracking-[0.22em]
                text-indigo-300
              "
            >
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />

              The new way to discover
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-4xl
                text-5xl font-bold
                leading-[0.98]
                tracking-tight
                sm:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              Don't just
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-blue-400
                  via-indigo-400
                  to-purple-400
                  bg-clip-text
                  text-transparent
                "
              >
                browse.
              </span>

              <br />

              <span className="text-white">
                Discover.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-xl
                text-base
                leading-7
                text-slate-400
                sm:text-lg
              "
            >
              Explore products worth noticing. A cleaner, smarter
              shopping experience designed to help you find something
              you'll actually want.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap gap-3">

              <Link
                to="/main/shop"
                className="
                  group
                  flex items-center gap-3
                  rounded-xl
                  bg-gradient-to-r
                  from-indigo-600
                  via-blue-600
                  to-purple-600
                  px-6 py-3.5
                  text-sm font-semibold
                  text-white
                  shadow-xl
                  shadow-indigo-600/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                  hover:shadow-indigo-500/30
                "
              >
                Explore Products

                <span
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>

              <Link
                to="/main/about"
                className="
                  rounded-xl
                  border border-slate-700
                  bg-slate-900/60
                  px-6 py-3.5
                  text-sm font-semibold
                  text-slate-300
                  backdrop-blur-md
                  transition-all duration-300
                  hover:border-indigo-500/30
                  hover:bg-indigo-500/5
                  hover:text-white
                "
              >
                Why us?
              </Link>

            </div>

            {/* Tiny trust row */}
            <div className="mt-9 flex flex-wrap items-center gap-5 text-xs text-slate-500">

              <span className="flex items-center gap-2">
                <span className="text-indigo-400">✓</span>
                Curated products
              </span>

              <span className="hidden h-3 w-px bg-slate-800 sm:block" />

              <span className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                Simple discovery
              </span>

              <span className="hidden h-3 w-px bg-slate-800 sm:block" />

              <span className="flex items-center gap-2">
                <span className="text-purple-400">✓</span>
                Secure shopping
              </span>

            </div>
          </div>

          {/* =================================================
              HERO VISUAL
          ================================================== */}

          <div className="relative mx-auto h-[500px] w-full max-w-[520px]">

            {/* Big glow */}
            <div
              className="
                absolute left-1/2 top-1/2
                h-80 w-80
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-indigo-600/15
                blur-[90px]
              "
            />

            {/* Orbit */}
            <div
              className="
                absolute left-1/2 top-1/2
                h-[390px] w-[390px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-indigo-500/10
                animate-[spin_18s_linear_infinite]
              "
            >
              <span
                className="
                  absolute left-1/2 -top-1
                  h-2.5 w-2.5
                  -translate-x-1/2
                  rounded-full
                  bg-blue-400
                  shadow-lg shadow-blue-400/80
                "
              />
            </div>

            {/* Second orbit */}
            <div
              className="
                absolute left-1/2 top-1/2
                h-[300px] w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-purple-500/10
                border-dashed
                animate-[spin_12s_linear_infinite_reverse]
              "
            />

            {/* Main product card */}
            <div
              className="
                absolute left-1/2 top-1/2
                h-[350px] w-[270px]
                -translate-x-1/2
                -translate-y-1/2
                rotate-[-6deg]
                overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-slate-900/80
                p-4
                shadow-2xl
                shadow-indigo-950/50
                backdrop-blur-xl
                transition-all duration-700
                hover:rotate-0
                hover:scale-105
              "
            >

              <div
                className="
                  relative
                  flex h-full
                  flex-col
                  overflow-hidden
                  rounded-[1.5rem]
                  bg-slate-950
                "
              >

                {/* Fake category */}
                <span
                  className="
                    absolute left-4 top-4 z-10
                    rounded-full
                    border border-white/10
                    bg-slate-900/80
                    px-3 py-1
                    text-[10px]
                    uppercase tracking-wider
                    text-indigo-300
                    backdrop-blur-md
                  "
                >
                  Featured
                </span>

                {/* Product visual */}
                <div className="flex flex-1 items-center justify-center">

                  <div
                    className="
                      relative
                      flex h-44 w-44
                      items-center justify-center
                      rounded-[2.5rem]
                      bg-gradient-to-br
                      from-indigo-600
                      via-blue-600
                      to-purple-700
                      shadow-2xl
                      shadow-indigo-600/30
                      animate-[heroFloat_4s_ease-in-out_infinite]
                    "
                  >

                    <div
                      className="
                        h-28 w-28
                        rounded-3xl
                        border border-white/20
                        bg-slate-950/80
                        shadow-inner
                      "
                    />

                    {/* shine */}
                    <div
                      className="
                        absolute left-5 top-5
                        h-2 w-12
                        rounded-full
                        bg-white/20
                      "
                    />

                  </div>
                </div>

                {/* Bottom */}
                <div className="p-5">

                  <p className="text-[10px] uppercase tracking-widest text-slate-500">
                    PRODUCT 001
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    Something worth finding.
                  </h3>

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-lg font-bold text-indigo-400">
                      $109.95
                    </span>

                    <span className="text-sm text-slate-500">
                      ★ 4.8
                    </span>

                  </div>

                </div>
              </div>
            </div>

            {/* Floating UI cards */}

            <FloatingElement
              className="-left-2 top-20"
              icon="✦"
              label="Curated"
            />

            <FloatingElement
              className="-right-2 top-28"
              icon="⚡"
              label="Trending"
            />

            <FloatingElement
              className="bottom-16 -left-4"
              icon="✓"
              label="Verified"
            />

            <FloatingElement
              className="bottom-10 -right-3"
              icon="♡"
              label="Wishlist"
            />

          </div>
        </div>

        {/* Bottom fade */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      </section>

      {/* =====================================================
          FEATURED PRODUCTS
      ====================================================== */}

      <section className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">

        <SectionHeading
          eyebrow="Fresh discoveries"
          title="Products worth a closer look."
          description="A few things that caught our attention."
          action="View all"
          to="/main/shop"
        />

        {featuredProducts.length > 0 ? (
          <div
            className="
              mt-12
              grid grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <EmptyProducts />
        )}

      </section>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <section className="relative border-y border-slate-800/70 bg-slate-900/30">

        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">

          <SectionHeading
            eyebrow="Explore by world"
            title="Find your category."
            description="Start somewhere. You might discover something unexpected."
          />

          <div
            className="
              mt-12
              grid grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {categories.map((category, index) => (
              <CategoryCard
                key={category.name}
                category={category}
                index={index}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          DISCOVERY SECTION
      ====================================================== */}

      <section className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Visual */}
          <div
            className="
              relative
              flex min-h-[430px]
              items-center
              justify-center
              overflow-hidden
              rounded-[2rem]
              border border-slate-800
              bg-slate-900/50
            "
          >

            <div
              className="
                absolute h-72 w-72
                rounded-full
                bg-indigo-600/10
                blur-[80px]
              "
            />

            {/* Grid */}
            <div
              className="
                absolute inset-0
                opacity-[0.04]
                [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
                [background-size:40px_40px]
              "
            />

            {/* Center */}
            <div className="relative">

              <div
                className="
                  flex h-40 w-40
                  items-center justify-center
                  rounded-[2.5rem]
                  border border-indigo-400/20
                  bg-gradient-to-br
                  from-indigo-600
                  to-purple-700
                  shadow-2xl
                  shadow-indigo-600/30
                  animate-[heroFloat_4s_ease-in-out_infinite]
                "
              >

                <div
                  className="
                    flex h-24 w-24
                    items-center justify-center
                    rounded-3xl
                    bg-slate-950/80
                    text-4xl
                  "
                >
                  ✦
                </div>

              </div>

              {/* Orbiting nodes */}
              <span className="absolute -left-20 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-300">
                ID
              </span>

              <span className="absolute -right-20 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300">
                AI
              </span>

              <span className="absolute -top-16 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-purple-300">
                ★
              </span>

            </div>
          </div>

          {/* Text */}
          <div>

            <p
              className="
                text-xs font-semibold
                uppercase tracking-[0.25em]
                text-indigo-400
              "
            >
              More than a catalog
            </p>

            <h2
              className="
                mt-4
                text-4xl font-bold
                leading-tight
                sm:text-5xl
              "
            >
              Shopping,
              <span className="block text-slate-500">
                without the noise.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-400">
              We believe discovering a product should feel more like
              finding something interesting than scrolling through
              an endless database.
            </p>

            <div className="mt-8 space-y-5">

              <FeatureRow
                number="01"
                title="Discover"
                text="Explore products through a clean, focused interface."
              />

              <FeatureRow
                number="02"
                title="Understand"
                text="Get the details you need before making a decision."
              />

              <FeatureRow
                number="03"
                title="Decide"
                text="When you find the right thing, add it and move on."
              />

            </div>

            <Link
              to="/about"
              className="
                mt-9 inline-flex
                items-center gap-2
                text-sm font-semibold
                text-indigo-400
                transition-colors
                hover:text-indigo-300
              "
            >
              Learn about our philosophy
              <span>→</span>
            </Link>

          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative px-6 pb-24">

        <div
          className="
            relative mx-auto
            max-w-6xl
            overflow-hidden
            rounded-[2rem]
            border border-indigo-500/20
            bg-gradient-to-br
            from-indigo-950
            via-slate-900
            to-purple-950
            px-7 py-20
            text-center
            shadow-2xl
            shadow-indigo-950/30
            sm:px-12
          "
        >

          {/* Glow */}
          <div
            className="
              pointer-events-none
              absolute left-1/2 top-1/2
              h-80 w-80
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-indigo-500/10
              blur-[100px]
            "
          />

          <div className="relative">

            <div className="text-3xl text-indigo-400">
              ✦
            </div>

            <h2
              className="
                mx-auto mt-5
                max-w-3xl
                text-4xl font-bold
                leading-tight
                sm:text-5xl
              "
            >
              Your next favorite thing
              <span className="text-indigo-400">
                {" "}might be one click away.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-400">
              Take a look around. There is always something new to discover.
            </p>

            <Link
              to="/main/shop"
              className="
                mt-8 inline-flex
                items-center gap-3
                rounded-xl
                bg-white
                px-7 py-3.5
                text-sm font-bold
                text-slate-950
                shadow-xl
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-indigo-50
                hover:shadow-white/10
                active:scale-95
              "
            >
              Start Exploring
              <span>→</span>
            </Link>

          </div>
        </div>
      </section>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>
        {`
          @keyframes heroFloat {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }

            50% {
              transform: translateY(-12px) rotate(3deg);
            }
          }
        `}
      </style>

    </div>
  );
};

/* =============================================================
   SECTION HEADING
============================================================= */

const SectionHeading = ({
  eyebrow,
  title,
  description,
  action,
  to,
}) => {
  return (
    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

      <div>

        <p
          className="
            text-xs font-semibold
            uppercase tracking-[0.25em]
            text-indigo-400
          "
        >
          {eyebrow}
        </p>

        <h2
          className="
            mt-3
            text-3xl font-bold
            text-white
            sm:text-4xl
          "
        >
          {title}
        </h2>

        <p className="mt-3 text-sm text-slate-500">
          {description}
        </p>

      </div>

      {action && (
        <Link
          to={to}
          className="
            inline-flex
            items-center gap-2
            text-sm font-semibold
            text-indigo-400
            transition-colors
            hover:text-indigo-300
          "
        >
          {action}
          <span>→</span>
        </Link>
      )}

    </div>
  );
};

/* =============================================================
   CATEGORY CARD
============================================================= */

const CategoryCard = ({ category, index }) => {

  const gradients = [
    "from-indigo-600/20 to-blue-600/5",
    "from-purple-600/20 to-indigo-600/5",
    "from-blue-600/20 to-purple-600/5",
    "from-indigo-600/20 to-purple-600/5",
  ];

  return (
    <Link
      to="/main/shop"
      className="
        group
        relative overflow-hidden
        rounded-2xl
        border border-slate-800
        bg-slate-950
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-indigo-500/30
      "
    >

      <div
        className={`
          absolute inset-0
          bg-gradient-to-br
          ${gradients[index % gradients.length]}
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        `}
      />

      <div className="relative">

        <div
          className="
            flex h-12 w-12
            items-center justify-center
            rounded-xl
            border border-indigo-500/20
            bg-indigo-500/10
            text-xl text-indigo-300
            transition-transform duration-300
            group-hover:scale-110
          "
        >
          {category.icon}
        </div>

        <h3 className="mt-5 text-lg font-semibold text-white">
          {category.name}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {category.description}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <span className="text-xs text-slate-600">
            Explore
          </span>

          <span
            className="
              text-indigo-400
              transition-transform duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>

        </div>
      </div>
    </Link>
  );
};

/* =============================================================
   FEATURE ROW
============================================================= */

const FeatureRow = ({ number, title, text }) => {
  return (
    <div className="flex gap-4">

      <span
        className="
          pt-1
          text-xs font-bold
          tracking-widest
          text-indigo-500
        "
      >
        {number}
      </span>

      <div>

        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {text}
        </p>

      </div>
    </div>
  );
};

/* =============================================================
   FLOATING HERO ELEMENT
============================================================= */

const FloatingElement = ({ className, icon, label }) => {
  return (
    <div
      className={`
        absolute
        flex items-center gap-2
        rounded-xl
        border border-slate-700/70
        bg-slate-900/80
        px-3 py-2
        text-xs text-slate-300
        shadow-xl
        backdrop-blur-md
        animate-[heroFloat_4s_ease-in-out_infinite]
        ${className}
      `}
    >
      <span className="text-indigo-400">
        {icon}
      </span>

      {label}
    </div>
  );
};

/* =============================================================
   EMPTY PRODUCTS
============================================================= */

const EmptyProducts = () => {
  return (
    <div
      className="
        mt-12 flex min-h-72
        items-center justify-center
        rounded-2xl
        border border-slate-800
        bg-slate-900/40
      "
    >
      <div className="text-center">

        <div
          className="
            mx-auto flex h-14 w-14
            items-center justify-center
            rounded-2xl
            bg-indigo-500/10
            text-xl text-indigo-400
          "
        >
          ✦
        </div>

        <p className="mt-4 font-medium text-white">
          Products are on their way.
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Our catalog is getting ready.
        </p>

      </div>
    </div>
  );
};

export default Home;