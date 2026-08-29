import React, { useEffect, useState } from "react";

const ProductLoading = () => {
  const [stage, setStage] = useState(0);

  const stages = [
    {
      title: "Scanning the catalog",
      subtitle: "Finding something worth your attention...",
    },
    {
      title: "Curating your collection",
      subtitle: "Filtering the noise. Keeping the good stuff.",
    },
    {
      title: "Matching products",
      subtitle: "Connecting products with your preferences...",
    },
    {
      title: "Almost there",
      subtitle: "Your next favorite thing is loading...",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % stages.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden bg-slate-950 px-6">

      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Indigo glow */}
        <div
          className="
            absolute left-1/2 top-1/2
            h-[420px] w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-indigo-600/10
            blur-[100px]
            animate-pulse
          "
        />

        {/* Purple glow */}
        <div
          className="
            absolute -right-32 -top-32
            h-72 w-72
            rounded-full
            bg-purple-600/10
            blur-[100px]
          "
        />

        {/* Blue glow */}
        <div
          className="
            absolute -bottom-32 -left-32
            h-72 w-72
            rounded-full
            bg-blue-600/10
            blur-[100px]
          "
        />
      </div>

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <Particle className="left-[12%] top-[22%]" delay="0s" />
        <Particle className="left-[20%] top-[70%]" delay="1.2s" />
        <Particle className="left-[78%] top-[25%]" delay="0.5s" />
        <Particle className="left-[87%] top-[68%]" delay="1.8s" />
        <Particle className="left-[67%] top-[82%]" delay="0.8s" />
        <Particle className="left-[32%] top-[15%]" delay="2s" />
      </div>

      {/* =====================================================
          MAIN LOADER
      ====================================================== */}

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">

        {/* =================================================
            PRODUCT CHAMBER
        ================================================== */}

        <div className="relative h-72 w-72">

          {/* Outer rotating ring */}
          <div
            className="
              absolute inset-0
              rounded-full
              border border-indigo-500/10
              animate-[spin_12s_linear_infinite]
            "
          />

          {/* Second ring */}
          <div
            className="
              absolute inset-6
              rounded-full
              border border-blue-500/10
              border-dashed
              animate-[spin_8s_linear_infinite_reverse]
            "
          />

          {/* Third ring */}
          <div
            className="
              absolute inset-12
              rounded-full
              border border-purple-500/10
              animate-[spin_15s_linear_infinite]
            "
          />

          {/* Orbiting dot */}
          <div
            className="
              absolute inset-0
              animate-[spin_5s_linear_infinite]
            "
          >
            <div
              className="
                absolute left-1/2 top-0
                h-2.5 w-2.5
                -translate-x-1/2
                rounded-full
                bg-blue-400
                shadow-lg shadow-blue-500/80
              "
            />
          </div>

          {/* =================================================
              PRODUCT PLATFORM
          ================================================== */}

          <div
            className="
              absolute left-1/2 top-1/2
              flex h-48 w-48
              -translate-x-1/2
              -translate-y-1/2
              items-center justify-center
              rounded-[3rem]
              border border-slate-700/70
              bg-slate-900/80
              shadow-2xl
              shadow-indigo-900/20
              backdrop-blur-xl
            "
          >

            {/* Platform glow */}
            <div
              className="
                absolute bottom-8
                h-12 w-28
                rounded-full
                bg-indigo-500/20
                blur-2xl
                animate-pulse
              "
            />

            {/* =================================================
                PRODUCT SILHOUETTE
            ================================================== */}

            <div
              className="
                relative
                h-28 w-24
                animate-[productFloat_3s_ease-in-out_infinite]
              "
            >

              {/* Product body */}
              <div
                className="
                  absolute bottom-0 left-1/2
                  h-20 w-20
                  -translate-x-1/2
                  rounded-2xl
                  border border-white/10
                  bg-gradient-to-br
                  from-slate-600
                  via-indigo-600
                  to-purple-700
                  shadow-xl
                  shadow-indigo-600/30
                "
              >

                {/* Product highlight */}
                <div
                  className="
                    absolute left-3 top-3
                    h-2 w-8
                    rounded-full
                    bg-white/20
                  "
                />

                {/* Product detail */}
                <div
                  className="
                    absolute bottom-4 left-1/2
                    h-2 w-10
                    -translate-x-1/2
                    rounded-full
                    bg-white/10
                  "
                />
              </div>

              {/* Product handle */}
              <div
                className="
                  absolute left-1/2 top-0
                  h-10 w-12
                  -translate-x-1/2
                  rounded-t-2xl
                  border-x-4 border-t-4
                  border-indigo-400/60
                "
              />

              {/* Scanning beam */}
              <div
                className="
                  absolute left-0 right-0 top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-white
                  to-transparent
                  shadow-lg shadow-blue-400
                  animate-[scanProduct_2s_ease-in-out_infinite]
                "
              />
            </div>
          </div>

          {/* =================================================
              DATA NODES
          ================================================== */}

          <DataNode
            label="01"
            className="left-0 top-20"
            color="indigo"
          />

          <DataNode
            label="AI"
            className="right-0 top-16"
            color="blue"
          />

          <DataNode
            label="★"
            className="bottom-12 left-3"
            color="purple"
          />

          <DataNode
            label="✓"
            className="bottom-8 right-3"
            color="indigo"
          />

          {/* Connection lines */}

          <div
            className="
              absolute left-8 top-28
              h-px w-14
              rotate-[12deg]
              bg-gradient-to-r
              from-indigo-500/50
              to-transparent
            "
          />

          <div
            className="
              absolute right-8 top-28
              h-px w-14
              -rotate-[15deg]
              bg-gradient-to-l
              from-blue-500/50
              to-transparent
            "
          />

        </div>

        {/* =====================================================
            STATUS
        ====================================================== */}

        <div className="mt-7 text-center">

          {/* Status indicator */}

          <div className="mb-3 flex items-center justify-center gap-2">

            <span
              className="
                h-2 w-2
                rounded-full
                bg-blue-400
                shadow-lg shadow-blue-400/70
                animate-pulse
              "
            />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-indigo-400
              "
            >
              PRODUCT ENGINE
            </span>

          </div>

          {/* Dynamic title */}

          <div
            key={stage}
            className="animate-[fadeUp_500ms_ease-out]"
          >
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              {stages[stage].title}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {stages[stage].subtitle}
            </p>
          </div>

          {/* =================================================
              PROGRESS
          ================================================== */}

          <div className="mx-auto mt-6 w-64">

            <div className="mb-2 flex justify-between text-[10px] uppercase tracking-wider">

              <span className="text-slate-600">
                Loading
              </span>

              <span className="text-indigo-400">
                {Math.min((stage + 1) * 25, 100)}%
              </span>

            </div>

            <div className="h-1 overflow-hidden rounded-full bg-slate-800">

              <div
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  via-indigo-500
                  to-purple-500
                  transition-all
                  duration-700
                "
                style={{
                  width: `${Math.min((stage + 1) * 25, 100)}%`,
                }}
              />

            </div>
          </div>

          {/* =================================================
              LITTLE PERSONALIZED MESSAGE
          ================================================== */}

          <div className="mt-7 flex items-center justify-center gap-2">

            <span className="text-xs text-slate-700">
              ✦
            </span>

            <span className="text-xs text-slate-600">
              Don't settle for the first thing you see.
            </span>

            <span className="text-xs text-slate-700">
              ✦
            </span>

          </div>

        </div>
      </div>

      {/* =====================================================
          CUSTOM ANIMATIONS
      ====================================================== */}

      <style>
        {`
          @keyframes productFloat {
            0%, 100% {
              transform: translateY(0px) rotate(-2deg);
            }

            50% {
              transform: translateY(-10px) rotate(2deg);
            }
          }

          @keyframes scanProduct {
            0% {
              top: 0%;
              opacity: 0;
            }

            20% {
              opacity: 1;
            }

            80% {
              opacity: 1;
            }

            100% {
              top: 100%;
              opacity: 0;
            }
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(8px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes particleFloat {
            0%, 100% {
              transform: translateY(0px);
              opacity: 0.3;
            }

            50% {
              transform: translateY(-15px);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

/* =============================================================
   PARTICLE
============================================================= */

const Particle = ({ className, delay }) => {
  return (
    <span
      className={`
        absolute
        h-1 w-1
        rounded-full
        bg-indigo-400
        shadow-lg shadow-indigo-500/50
        animate-[particleFloat_3s_ease-in-out_infinite]
        ${className}
      `}
      style={{
        animationDelay: delay,
      }}
    />
  );
};

/* =============================================================
   DATA NODE
============================================================= */

const DataNode = ({ label, className, color }) => {

  const colors = {
    indigo: `
      border-indigo-500/20
      bg-indigo-500/10
      text-indigo-300
      shadow-indigo-500/10
    `,
    blue: `
      border-blue-500/20
      bg-blue-500/10
      text-blue-300
      shadow-blue-500/10
    `,
    purple: `
      border-purple-500/20
      bg-purple-500/10
      text-purple-300
      shadow-purple-500/10
    `,
  };

  return (
    <div
      className={`
        absolute
        flex h-9 w-9
        items-center justify-center
        rounded-xl
        border
        text-[10px] font-bold
        shadow-lg
        backdrop-blur-md
        animate-[particleFloat_3s_ease-in-out_infinite]
        ${colors[color]}
        ${className}
      `}
    >
      {label}
    </div>
  );
};

export default ProductLoading;