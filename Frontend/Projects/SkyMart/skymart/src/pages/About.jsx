import React from "react";
import { useNavigate } from "react-router";
const About = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        {/* Indigo glow */}
        <div
          className="
            absolute -left-40 -top-40
            h-[500px] w-[500px]
            rounded-full
            bg-indigo-600/10
            blur-[120px]
          "
        />

        {/* Purple glow */}
        <div
          className="
            absolute -bottom-40 -right-40
            h-[500px] w-[500px]
            rounded-full
            bg-purple-600/10
            blur-[120px]
          "
        />

        {/* Blue glow */}
        <div
          className="
            absolute left-1/2 top-1/2
            h-[350px] w-[350px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-600/5
            blur-[100px]
          "
        />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-10 lg:px-12 lg:pt-28">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            {/* Label */}
            <div
              className="
                mb-6 inline-flex items-center gap-2
                rounded-full
                border border-indigo-500/20
                bg-indigo-500/10
                px-4 py-2
                text-xs font-semibold
                uppercase tracking-[0.2em]
                text-indigo-300
              "
            >
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />

              About Us
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-3xl
                text-5xl font-bold
                leading-[1.05]
                tracking-tight
                sm:text-6xl
                lg:text-7xl
              "
            >
              Shopping should feel like
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-blue-400
                  via-indigo-400
                  to-purple-400
                  bg-clip-text
                  text-transparent
                "
              >
                discovering something.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-7 max-w-xl
                text-base
                leading-7
                text-slate-400
                sm:text-lg
              "
            >
              We built this space for people who enjoy finding useful,
              interesting, and beautiful products without getting lost
              in endless noise.
            </p>

            <p
              className="
                mt-4 max-w-xl
                text-sm
                leading-6
                text-slate-500
              "
            >
              Simple discovery. Thoughtful design. Products that deserve
              a second look.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap gap-3">

              <button
                onClick={() => navigate("/main/shop")}
                className="
                  rounded-xl
                  bg-gradient-to-r
                  from-indigo-600
                  to-blue-600
                  px-6 py-3
                  text-sm font-semibold
                  text-white
                  shadow-xl shadow-indigo-600/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                  hover:shadow-indigo-500/30
                  active:scale-95
                "
              >
                Explore Products
              </button>

              <button
                className="
                  rounded-xl
                  border border-slate-700
                  bg-slate-900/60
                  px-6 py-3
                  text-sm font-semibold
                  text-slate-300
                  transition-all duration-300
                  hover:border-indigo-500/30
                  hover:bg-indigo-500/5
                  hover:text-white
                "
              >
                Our Philosophy
              </button>

            </div>
          </div>

          {/* RIGHT — PRODUCT UNIVERSE */}
          <div className="relative flex min-h-[450px] items-center justify-center">

            {/* Orbit 1 */}
            <div
              className="
                absolute
                h-72 w-72
                rounded-full
                border border-indigo-500/10
                animate-[spin_15s_linear_infinite]
              "
            >
              <div
                className="
                  absolute -top-1 left-1/2
                  h-2 w-2
                  -translate-x-1/2
                  rounded-full
                  bg-blue-400
                  shadow-lg shadow-blue-400/80
                "
              />
            </div>

            {/* Orbit 2 */}
            <div
              className="
                absolute
                h-96 w-96
                rounded-full
                border border-purple-500/5
                animate-[spin_22s_linear_infinite_reverse]
              "
            >
              <div
                className="
                  absolute right-8 top-1/2
                  h-2.5 w-2.5
                  rounded-full
                  bg-purple-400
                  shadow-lg shadow-purple-400/80
                "
              />
            </div>

            {/* Main glass card */}
            <div
              className="
                relative z-10
                flex h-72 w-64
                rotate-[-5deg]
                flex-col
                justify-between
                rounded-[2rem]
                border border-white/10
                bg-slate-900/80
                p-6
                shadow-2xl
                shadow-indigo-900/30
                backdrop-blur-xl
                transition-transform duration-700
                hover:rotate-0
              "
            >

              {/* Top */}
              <div className="flex items-center justify-between">

                <span className="text-xs font-semibold tracking-widest text-indigo-400">
                  DISCOVER
                </span>

                <span className="text-slate-600">
                  ✦
                </span>

              </div>

              {/* Product icon */}
              <div className="flex justify-center">

                <div
                  className="
                    flex h-32 w-32
                    items-center justify-center
                    rounded-[2rem]
                    bg-gradient-to-br
                    from-indigo-600
                    via-blue-600
                    to-purple-700
                    shadow-2xl
                    shadow-indigo-600/30
                    animate-[aboutFloat_3s_ease-in-out_infinite]
                  "
                >

                  <div
                    className="
                      h-20 w-20
                      rounded-2xl
                      border border-white/20
                      bg-slate-950/80
                      shadow-inner
                    "
                  />

                </div>

              </div>

              {/* Bottom */}
              <div>

                <p className="text-xs text-slate-500">
                  PRODUCT UNIVERSE
                </p>

                <p className="mt-1 text-lg font-semibold text-white">
                  Find your next favorite.
                </p>

              </div>

            </div>

            {/* Floating cards */}

            <FloatingCard
              className="-left-2 top-24"
              icon="⚡"
              text="Simple"
            />

            <FloatingCard
              className="-right-3 top-16"
              icon="✦"
              text="Curated"
            />

            <FloatingCard
              className="bottom-16 -left-4"
              icon="✓"
              text="Reliable"
            />

          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="relative border-y border-slate-800/70 bg-slate-900/30">

        <div
          className="
            mx-auto grid max-w-7xl
            grid-cols-2
            divide-x divide-slate-800
            sm:grid-cols-4
          "
        >

          <Stat value="100+" label="Products" />
          <Stat value="24/7" label="Discovery" />
          <Stat value="4.5★" label="Experience" />
          <Stat value="∞" label="Possibilities" />

        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ====================================================== */}

      <section className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">

        <div className="grid gap-14 lg:grid-cols-2">

          {/* Heading */}
          <div>

            <p
              className="
                text-xs font-semibold
                uppercase tracking-[0.25em]
                text-indigo-400
              "
            >
              Our Philosophy
            </p>

            <h2
              className="
                mt-4
                max-w-xl
                text-4xl font-bold
                leading-tight
                sm:text-5xl
              "
            >
              Less noise.
              <span className="block text-slate-500">
                More discovery.
              </span>
            </h2>

          </div>

          {/* Text */}
          <div className="space-y-5 text-sm leading-7 text-slate-400 sm:text-base">

            <p>
              The internet gives us almost unlimited choices.
              That's powerful — but sometimes overwhelming.
            </p>

            <p>
              Our goal is to create a shopping experience where
              products don't simply appear in a grid. They feel
              discoverable.
            </p>

            <p>
              Every interaction should help you understand what
              you're looking at, why it matters, and whether it
              belongs in your world.
            </p>

          </div>
        </div>

        {/* Philosophy Cards */}

        <div className="mt-16 grid gap-5 md:grid-cols-3">

          <PhilosophyCard
            number="01"
            title="Discover"
            text="Explore products without feeling overwhelmed by them."
          />

          <PhilosophyCard
            number="02"
            title="Understand"
            text="Clear information helps you make better decisions."
          />

          <PhilosophyCard
            number="03"
            title="Choose"
            text="When something feels right, make it yours."
          />

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative px-6 pb-24">

        <div
          className="
            relative mx-auto
            max-w-5xl
            overflow-hidden
            rounded-[2rem]
            border border-indigo-500/20
            bg-gradient-to-br
            from-indigo-950
            via-slate-900
            to-purple-950
            px-7 py-16
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
              h-64 w-64
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-indigo-500/10
              blur-3xl
            "
          />

          <div className="relative">

            <span className="text-3xl">
              ✦
            </span>

            <h2
              className="
                mx-auto mt-5
                max-w-2xl
                text-3xl font-bold
                sm:text-4xl
              "
            >
              Your next discovery
              <span className="text-indigo-400">
                {" "}is waiting.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">
              Stop scrolling endlessly. Start discovering intentionally.
            </p>

            <button
              onClick={() => navigate("/main/shop")}
              className="
                mt-8
                rounded-xl
                bg-white
                px-7 py-3
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
              Start Exploring →
            </button>

          </div>
        </div>
      </section>

      {/* =====================================================
          ANIMATION
      ====================================================== */}

      <style>
        {`
          @keyframes aboutFloat {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }

            50% {
              transform: translateY(-10px) rotate(3deg);
            }
          }
        `}
      </style>

    </div>
  );
};

/* =============================================================
   STAT
============================================================= */

const Stat = ({ value, label }) => {
  return (
    <div
      className="
        flex flex-col items-center
        px-4 py-8
        transition-colors duration-300
        hover:bg-indigo-500/5
      "
    >
      <span
        className="
          text-2xl font-bold
          bg-gradient-to-r
          from-blue-400
          to-purple-400
          bg-clip-text
          text-transparent
        "
      >
        {value}
      </span>

      <span className="mt-1 text-xs uppercase tracking-wider text-slate-500">
        {label}
      </span>
    </div>
  );
};

/* =============================================================
   FLOATING CARD
============================================================= */

const FloatingCard = ({ className, icon, text }) => {
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
        animate-[aboutFloat_4s_ease-in-out_infinite]
        ${className}
      `}
    >
      <span className="text-indigo-400">
        {icon}
      </span>

      {text}
    </div>
  );
};

/* =============================================================
   PHILOSOPHY CARD
============================================================= */

const PhilosophyCard = ({ number, title, text }) => {
  return (
    <div
      className="
        group
        rounded-2xl
        border border-slate-800
        bg-slate-900/50
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-indigo-500/30
        hover:bg-slate-900
      "
    >

      <span
        className="
          text-xs font-bold
          tracking-widest
          text-indigo-500
        "
      >
        {number}
      </span>

      <h3 className="mt-5 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {text}
      </p>

      <div
        className="
          mt-6 h-px w-8
          bg-gradient-to-r
          from-indigo-500
          to-purple-500
          transition-all duration-300
          group-hover:w-16
        "
      />
    </div>
  );
};

export default About;