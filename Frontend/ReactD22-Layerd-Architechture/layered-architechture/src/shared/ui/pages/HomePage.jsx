// import React from 'react'

// const HomePage = () => {
//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//     </div>
//   )
// }

// export default HomePage





import React from "react";

const Home = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* ================= BACKGROUND ================= */}

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />

        <div className="absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-indigo-600/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-purple-700/10 blur-[130px]" />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================= HERO ================= */}

      <section className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT CONTENT */}
          <div className="relative z-10">

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/5 px-4 py-2 text-sm text-purple-200 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
              </span>

              Building the future, one idea at a time
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Build.
              <br />

              <span className="bg-gradient-to-r from-purple-300 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
                Create.
              </span>

              <br />

              <span className="text-white">Evolve.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              A modern digital space for turning ambitious ideas into
              meaningful products, intelligent systems, and experiences that
              push technology forward.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <button
                className="
                  group relative overflow-hidden rounded-xl
                  bg-purple-600 px-7 py-3.5
                  font-medium text-white
                  shadow-[0_0_35px_rgba(147,51,234,0.25)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-purple-500
                  hover:shadow-[0_0_45px_rgba(147,51,234,0.4)]
                "
              >
                <span className="relative z-10">
                  Explore Projects
                </span>

                <span
                  className="
                    absolute inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    transition-transform duration-700
                    group-hover:translate-x-full
                  "
                />
              </button>

              <button
                className="
                  rounded-xl border border-slate-700/70
                  bg-white/[0.03] px-7 py-3.5
                  font-medium text-slate-200
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-purple-400/40
                  hover:bg-purple-500/5
                "
              >
                Discover More
              </button>
            </div>

            {/* Stats */}
            <div className="mt-14 grid max-w-xl grid-cols-3 border-y border-white/[0.06] py-6">
              <Stat value="∞" label="Ideas" />
              <Stat value="24/7" label="Building" />
              <Stat value="01" label="Vision" />
            </div>
          </div>

          {/* ================= ORBITAL VISUAL ================= */}

          <div className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center">

            {/* Outer glow */}
            <div className="absolute h-[70%] w-[70%] rounded-full bg-purple-600/10 blur-[90px]" />

            {/* Orbit 1 */}
            <div
              className="
                absolute h-[78%] w-[78%]
                rounded-full border border-purple-400/15
                animate-[spin_24s_linear_infinite]
              "
            >
              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-purple-400 shadow-[0_0_25px_rgba(168,85,247,1)]" />
            </div>

            {/* Orbit 2 */}
            <div
              className="
                absolute h-[62%] w-[62%]
                rounded-full border border-indigo-400/20
                animate-[spin_16s_linear_infinite_reverse]
              "
            >
              <div className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-indigo-400 shadow-[0_0_20px_rgba(99,102,241,1)]" />
            </div>

            {/* Orbit 3 */}
            <div
              className="
                absolute h-[48%] w-[48%]
                rounded-full border border-purple-300/10
                animate-[spin_11s_linear_infinite]
              "
            >
              <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-purple-300 shadow-[0_0_18px_rgba(216,180,254,1)]" />
            </div>

            {/* Core */}
            <div
              className="
                relative flex h-44 w-44 items-center justify-center
                rounded-full
                border border-purple-300/20
                bg-slate-900/70
                shadow-[0_0_80px_rgba(124,58,237,0.25)]
                backdrop-blur-2xl
                sm:h-52 sm:w-52
              "
            >
              {/* Inner glow */}
              <div className="absolute inset-5 rounded-full bg-gradient-to-br from-purple-600/20 via-indigo-500/10 to-transparent blur-xl" />

              {/* Core rings */}
              <div className="absolute inset-7 rounded-full border border-white/[0.06]" />

              <div className="absolute inset-10 rounded-full border border-purple-400/10" />

              {/* Core content */}
              <div className="relative text-center">
                <div className="text-4xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                    AI
                  </span>
                </div>

                <div className="mt-1 text-[10px] uppercase tracking-[0.35em] text-slate-500">
                  Innovation
                </div>
              </div>
            </div>

            {/* Floating cards */}

            <FloatingCard
              className="left-0 top-[20%]"
              title="Creative"
              subtitle="Ideas → Reality"
            />

            <FloatingCard
              className="right-0 top-[32%]"
              title="Intelligent"
              subtitle="AI • ML • Data"
            />

            <FloatingCard
              className="bottom-[12%] left-[12%]"
              title="Connected"
              subtitle="Systems • IoT"
            />

          </div>
        </div>
      </section>

      {/* ================= LOWER SECTION ================= */}

      <section className="relative border-t border-white/[0.05] px-6 py-24 sm:px-10 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
              Explore the ecosystem
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Technology without boundaries.
            </h2>

            <p className="mt-4 text-slate-400">
              From intelligent software to connected hardware, explore ideas
              across the digital and physical worlds.
            </p>
          </div>

          {/* Feature cards */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <FeatureCard
              number="01"
              title="Intelligence"
              description="AI, machine learning, generative systems and data-driven experiences."
            />

            <FeatureCard
              number="02"
              title="Engineering"
              description="Embedded systems, electronics, robotics and intelligent hardware."
            />

            <FeatureCard
              number="03"
              title="Digital"
              description="Modern software, web experiences, automation and creative technology."
            />

          </div>
        </div>
      </section>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </main>
  );
};


/* ================= COMPONENTS ================= */

const Stat = ({ value, label }) => {
  return (
    <div className="text-center first:text-left last:text-right">
      <div className="text-xl font-semibold text-white sm:text-2xl">
        {value}
      </div>

      <div className="mt-1 text-xs uppercase tracking-widest text-slate-500">
        {label}
      </div>
    </div>
  );
};


const FloatingCard = ({ title, subtitle, className }) => {
  return (
    <div
      className={`
        absolute ${className}
        hidden sm:block
        rounded-2xl
        border border-white/[0.08]
        bg-slate-900/60
        px-4 py-3
        shadow-2xl
        backdrop-blur-xl
        animate-[float_5s_ease-in-out_infinite]
      `}
    >
      <div className="flex items-center gap-3">

        <div className="h-2.5 w-2.5 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />

        <div>
          <div className="text-sm font-medium text-slate-200">
            {title}
          </div>

          <div className="mt-0.5 text-[10px] text-slate-500">
            {subtitle}
          </div>
        </div>

      </div>
    </div>
  );
};


const FeatureCard = ({ number, title, description }) => {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-2xl
        border border-white/[0.07]
        bg-white/[0.02]
        p-7
        backdrop-blur-xl
        transition-all duration-500
        hover:-translate-y-2
        hover:border-purple-400/20
        hover:bg-purple-500/[0.035]
      "
    >
      {/* Hover glow */}
      <div
        className="
          absolute -right-16 -top-16
          h-32 w-32 rounded-full
          bg-purple-600/10 blur-3xl
          transition-all duration-500
          group-hover:bg-purple-500/20
        "
      />

      <div className="relative">

        <div className="text-xs font-medium tracking-[0.25em] text-purple-400">
          {number}
        </div>

        <h3 className="mt-5 text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-xs font-medium text-purple-300">
          Explore

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

      </div>
    </div>
  );
};


export default Home;






// import React, { useEffect, useRef } from "react";
// import {
//   ArrowRight,
//   Sparkles,
//   Play,
//   Zap,
//   ShieldCheck,
//   Cpu,
// } from "lucide-react";

// const Home = () => {
//   const heroRef = useRef(null);

//   /* ============================================
//      MOUSE PARALLAX
//   ============================================ */

//   useEffect(() => {
//     const hero = heroRef.current;

//     if (!hero) return;

//     const handleMouseMove = (e) => {
//       const rect = hero.getBoundingClientRect();

//       const x =
//         (e.clientX - rect.left) / rect.width - 0.5;

//       const y =
//         (e.clientY - rect.top) / rect.height - 0.5;

//       hero.style.setProperty(
//         "--mouse-x",
//         `${x * 20}px`
//       );

//       hero.style.setProperty(
//         "--mouse-y",
//         `${y * 20}px`
//       );
//     };

//     hero.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       hero.removeEventListener(
//         "mousemove",
//         handleMouseMove
//       );
//     };
//   }, []);

//   return (
//     <main
//       ref={heroRef}
//       className="
//         relative min-h-screen
//         overflow-hidden
//         bg-slate-950
//         text-white
//       "
//     >

//       {/* ======================================================
//           BACKGROUND
//       ======================================================= */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">

//         {/* Main purple atmosphere */}

//         <div
//           className="
//             absolute
//             -left-[15%]
//             top-[10%]
//             h-[500px]
//             w-[500px]
//             rounded-full
//             bg-purple-600/20
//             blur-[140px]
//             animate-[orb-left_12s_ease-in-out_infinite]
//           "
//         />

//         {/* Blue atmosphere */}

//         <div
//           className="
//             absolute
//             -right-[10%]
//             top-[25%]
//             h-[500px]
//             w-[500px]
//             rounded-full
//             bg-blue-600/20
//             blur-[150px]
//             animate-[orb-right_14s_ease-in-out_infinite]
//           "
//         />

//         {/* Center glow */}

//         <div
//           className="
//             absolute
//             left-1/2
//             top-[45%]
//             h-[420px]
//             w-[700px]
//             -translate-x-1/2
//             -translate-y-1/2
//             rounded-full
//             bg-indigo-600/10
//             blur-[130px]
//             animate-[center-glow_7s_ease-in-out_infinite]
//           "
//         />

//         {/* ==================================================
//             GRID
//         =================================================== */}

//         <div
//           className="
//             absolute
//             inset-0
//             opacity-[0.14]
//             [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)]
//             [background-size:70px_70px]
//             [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]
//           "
//         />

//         {/* Animated grid glow */}

//         <div
//           className="
//             absolute
//             inset-x-0
//             top-[45%]
//             h-px
//             bg-gradient-to-r
//             from-transparent
//             via-purple-500/30
//             to-transparent
//             animate-[scan-line_6s_linear_infinite]
//           "
//         />

//         {/* Floating particles */}

//         <div className="absolute left-[15%] top-[25%] h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_15px_#a855f7] animate-[particle_5s_ease-in-out_infinite]" />

//         <div className="absolute left-[72%] top-[20%] h-1 w-1 rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa] animate-[particle_6s_ease-in-out_infinite_reverse]" />

//         <div className="absolute left-[82%] top-[65%] h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_15px_#818cf8] animate-[particle_7s_ease-in-out_infinite]" />

//         <div className="absolute left-[20%] top-[70%] h-1 w-1 rounded-full bg-white/70 shadow-[0_0_10px_white] animate-[particle_8s_ease-in-out_infinite_reverse]" />
//       </div>

//       {/* ======================================================
//           HERO
//       ======================================================= */}

//       <section
//         className="
//           relative z-10
//           mx-auto flex min-h-screen
//           max-w-7xl
//           items-center
//           px-6
//           pb-20
//           pt-32
//           lg:px-8
//         "
//       >

//         <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">

//           {/* ==================================================
//               LEFT CONTENT
//           =================================================== */}

//           <div className="relative">

//             {/* Eyebrow */}

//             <div
//               className="
//                 mb-7 inline-flex
//                 items-center gap-2
//                 rounded-full
//                 border border-purple-400/20
//                 bg-purple-500/[0.07]
//                 px-3.5 py-2
//                 text-xs
//                 font-medium
//                 text-purple-200
//                 shadow-[0_0_25px_rgba(139,92,246,0.08)]
//                 backdrop-blur-xl
//                 animate-[fade-up_.8s_ease-out_both]
//               "
//             >
//               <span className="relative flex h-2 w-2">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-60" />
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
//               </span>

//               <Sparkles size={13} />

//               Build something extraordinary
//             </div>

//             {/* Heading */}

//             <h1
//               className="
//                 max-w-4xl
//                 text-5xl
//                 font-bold
//                 leading-[1.02]
//                 tracking-[-0.04em]
//                 text-white
//                 sm:text-6xl
//                 lg:text-7xl
//                 xl:text-[82px]
//                 animate-[fade-up_.9s_.1s_ease-out_both]
//               "
//             >
//               Create.

//               <br />

//               <span
//                 className="
//                   bg-gradient-to-r
//                   from-purple-400
//                   via-indigo-400
//                   to-blue-400
//                   bg-clip-text
//                   text-transparent
//                   [background-size:200%_auto]
//                   animate-[gradient-flow_5s_linear_infinite]
//                 "
//               >
//                 Innovate.
//               </span>

//               <br />

//               <span className="text-slate-300">
//                 Move forward.
//               </span>
//             </h1>

//             {/* Description */}

//             <p
//               className="
//                 mt-7
//                 max-w-xl
//                 text-base
//                 leading-7
//                 text-slate-400
//                 sm:text-lg
//                 sm:leading-8
//                 animate-[fade-up_.9s_.2s_ease-out_both]
//               "
//             >
//               A modern digital experience built for
//               ambitious ideas. Transform your vision
//               into something fast, intelligent, and
//               beautifully engineered.
//             </p>

//             {/* ==================================================
//                 ACTIONS
//             =================================================== */}

//             <div
//               className="
//                 mt-9
//                 flex
//                 flex-col
//                 gap-3
//                 sm:flex-row
//                 animate-[fade-up_.9s_.3s_ease-out_both]
//               "
//             >

//               {/* Primary */}

//               <button
//                 className="
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-xl
//                   bg-gradient-to-r
//                   from-purple-600
//                   via-indigo-600
//                   to-blue-600
//                   px-6
//                   py-3.5
//                   text-sm
//                   font-semibold
//                   text-white
//                   shadow-[0_0_30px_rgba(124,58,237,0.3)]
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:shadow-[0_0_45px_rgba(124,58,237,0.55)]
//                   active:scale-95
//                 "
//               >
//                 <span className="relative z-10 flex items-center justify-center gap-2">
//                   Get Started

//                   <ArrowRight
//                     size={17}
//                     className="
//                       transition-transform
//                       duration-300
//                       group-hover:translate-x-1
//                     "
//                   />
//                 </span>

//                 {/* Shine */}

//                 <span
//                   className="
//                     absolute
//                     inset-y-0
//                     -left-1/2
//                     w-1/3
//                     skew-x-[-20deg]
//                     bg-white/25
//                     blur-sm
//                     transition-all
//                     duration-700
//                     group-hover:left-[130%]
//                   "
//                 />
//               </button>

//               {/* Secondary */}

//               <button
//                 className="
//                   group
//                   flex
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-xl
//                   border
//                   border-white/10
//                   bg-white/[0.04]
//                   px-6
//                   py-3.5
//                   text-sm
//                   font-medium
//                   text-slate-300
//                   backdrop-blur-xl
//                   transition-all
//                   duration-300
//                   hover:border-white/20
//                   hover:bg-white/[0.08]
//                   hover:text-white
//                 "
//               >
//                 <span
//                   className="
//                     flex
//                     h-6
//                     w-6
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-white/10
//                     transition-all
//                     duration-300
//                     group-hover:bg-purple-500/20
//                   "
//                 >
//                   <Play size={11} fill="currentColor" />
//                 </span>

//                 See how it works
//               </button>
//             </div>

//             {/* ==================================================
//                 TRUST INDICATORS
//             =================================================== */}

//             <div
//               className="
//                 mt-10
//                 flex
//                 flex-wrap
//                 items-center
//                 gap-x-6
//                 gap-y-3
//                 text-xs
//                 text-slate-500
//                 animate-[fade-up_.9s_.4s_ease-out_both]
//               "
//             >
//               <span className="flex items-center gap-2">
//                 <Zap size={14} className="text-purple-400" />
//                 Lightning fast
//               </span>

//               <span className="flex items-center gap-2">
//                 <ShieldCheck
//                   size={14}
//                   className="text-blue-400"
//                 />
//                 Secure by design
//               </span>

//               <span className="flex items-center gap-2">
//                 <Cpu
//                   size={14}
//                   className="text-indigo-400"
//                 />
//                 AI powered
//               </span>
//             </div>
//           </div>

//           {/* ==================================================
//               RIGHT VISUAL
//           =================================================== */}

//           <div
//             className="
//               relative
//               hidden
//               h-[560px]
//               lg:block
//             "
//           >

//             {/* Parallax container */}

//             <div
//               className="
//                 absolute
//                 inset-0
//                 transition-transform
//                 duration-300
//                 ease-out
//               "
//               style={{
//                 transform:
//                   "translate(var(--mouse-x), var(--mouse-y))",
//               }}
//             >

//               {/* Outer orbit */}

//               <div
//                 className="
//                   absolute
//                   left-1/2
//                   top-1/2
//                   h-[420px]
//                   w-[420px]
//                   -translate-x-1/2
//                   -translate-y-1/2
//                   rounded-full
//                   border
//                   border-purple-400/10
//                   animate-[orbit_18s_linear_infinite]
//                 "
//               >
//                 <div
//                   className="
//                     absolute
//                     -top-1.5
//                     left-1/2
//                     h-3
//                     w-3
//                     -translate-x-1/2
//                     rounded-full
//                     bg-purple-400
//                     shadow-[0_0_20px_#a855f7]
//                   "
//                 />
//               </div>

//               {/* Inner orbit */}

//               <div
//                 className="
//                   absolute
//                   left-1/2
//                   top-1/2
//                   h-[300px]
//                   w-[300px]
//                   -translate-x-1/2
//                   -translate-y-1/2
//                   rounded-full
//                   border
//                   border-blue-400/10
//                   animate-[orbit-reverse_12s_linear_infinite]
//                 "
//               >
//                 <div
//                   className="
//                     absolute
//                     -right-1.5
//                     top-1/2
//                     h-3
//                     w-3
//                     -translate-y-1/2
//                     rounded-full
//                     bg-blue-400
//                     shadow-[0_0_20px_#60a5fa]
//                   "
//                 />
//               </div>

//               {/* Core */}

//               <div
//                 className="
//                   absolute
//                   left-1/2
//                   top-1/2
//                   flex
//                   h-64
//                   w-64
//                   -translate-x-1/2
//                   -translate-y-1/2
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-white/10
//                   bg-gradient-to-br
//                   from-purple-950
//                   via-indigo-950
//                   to-blue-950
//                   shadow-[0_0_100px_rgba(99,102,241,0.25)]
//                   backdrop-blur-3xl
//                   animate-[core-breathe_5s_ease-in-out_infinite]
//                 "
//               >

//                 {/* Core glow */}

//                 <div
//                   className="
//                     absolute
//                     h-40
//                     w-40
//                     rounded-full
//                     bg-gradient-to-br
//                     from-purple-500/40
//                     via-indigo-500/30
//                     to-blue-500/40
//                     blur-3xl
//                   "
//                 />

//                 {/* Core icon */}

//                 <div
//                   className="
//                     relative
//                     flex
//                     h-24
//                     w-24
//                     items-center
//                     justify-center
//                     rounded-3xl
//                     border
//                     border-white/10
//                     bg-white/[0.05]
//                     shadow-[inset_0_0_30px_rgba(255,255,255,0.04)]
//                     backdrop-blur-xl
//                     rotate-12
//                   "
//                 >
//                   <div className="-rotate-12">
//                     <Sparkles
//                       size={38}
//                       className="
//                         text-white
//                         drop-shadow-[0_0_15px_rgba(255,255,255,.7)]
//                       "
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Floating card 1 */}

//               <div
//                 className="
//                   absolute
//                   left-[4%]
//                   top-[20%]
//                   rounded-2xl
//                   border
//                   border-white/10
//                   bg-slate-950/70
//                   p-4
//                   shadow-[0_20px_50px_rgba(0,0,0,.35)]
//                   backdrop-blur-xl
//                   animate-[card-float_5s_ease-in-out_infinite]
//                 "
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10">
//                     <Zap
//                       size={17}
//                       className="text-purple-400"
//                     />
//                   </div>

//                   <div>
//                     <p className="text-xs text-slate-500">
//                       Performance
//                     </p>

//                     <p className="text-sm font-semibold text-white">
//                       99.9% optimized
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating card 2 */}

//               <div
//                 className="
//                   absolute
//                   bottom-[18%]
//                   right-[3%]
//                   rounded-2xl
//                   border
//                   border-white/10
//                   bg-slate-950/70
//                   p-4
//                   shadow-[0_20px_50px_rgba(0,0,0,.35)]
//                   backdrop-blur-xl
//                   animate-[card-float-reverse_6s_ease-in-out_infinite]
//                 "
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10">
//                     <ShieldCheck
//                       size={17}
//                       className="text-blue-400"
//                     />
//                   </div>

//                   <div>
//                     <p className="text-xs text-slate-500">
//                       System
//                     </p>

//                     <p className="text-sm font-semibold text-white">
//                       Everything secure
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating dots */}

//               <span className="absolute left-[17%] top-[48%] h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_20px_#a855f7] animate-ping" />

//               <span className="absolute right-[18%] top-[32%] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_15px_#60a5fa] animate-pulse" />

//               <span className="absolute bottom-[30%] left-[27%] h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_15px_#818cf8] animate-pulse" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ======================================================
//           BOTTOM FADE
//       ======================================================= */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-0
//           left-0
//           right-0
//           h-40
//           bg-gradient-to-t
//           from-slate-950
//           to-transparent
//         "
//       />

//       {/* ======================================================
//           ANIMATIONS
//       ======================================================= */}

//       <style>{`

//         @keyframes fade-up {
//           from {
//             opacity: 0;
//             transform: translateY(25px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes gradient-flow {
//           0% {
//             background-position: 0% center;
//           }

//           100% {
//             background-position: 200% center;
//           }
//         }

//         @keyframes orb-left {
//           0%, 100% {
//             transform: translate(0, 0) scale(1);
//           }

//           50% {
//             transform: translate(120px, 80px) scale(1.2);
//           }
//         }

//         @keyframes orb-right {
//           0%, 100% {
//             transform: translate(0, 0) scale(1);
//           }

//           50% {
//             transform: translate(-100px, -80px) scale(1.15);
//           }
//         }

//         @keyframes center-glow {
//           0%, 100% {
//             transform:
//               translate(-50%, -50%)
//               scale(.8);
//             opacity: .4;
//           }

//           50% {
//             transform:
//               translate(-50%, -50%)
//               scale(1.2);
//             opacity: .9;
//           }
//         }

//         @keyframes scan-line {
//           0% {
//             transform: translateY(-300px);
//             opacity: 0;
//           }

//           30% {
//             opacity: 1;
//           }

//           70% {
//             opacity: 1;
//           }

//           100% {
//             transform: translateY(300px);
//             opacity: 0;
//           }
//         }

//         @keyframes particle {
//           0%, 100% {
//             transform: translate(0, 0);
//             opacity: .3;
//           }

//           50% {
//             transform: translate(20px, -30px);
//             opacity: 1;
//           }
//         }

//         @keyframes orbit {
//           from {
//             transform:
//               translate(-50%, -50%)
//               rotate(0deg);
//           }

//           to {
//             transform:
//               translate(-50%, -50%)
//               rotate(360deg);
//           }
//         }

//         @keyframes orbit-reverse {
//           from {
//             transform:
//               translate(-50%, -50%)
//               rotate(360deg);
//           }

//           to {
//             transform:
//               translate(-50%, -50%)
//               rotate(0deg);
//           }
//         }

//         @keyframes core-breathe {
//           0%, 100% {
//             transform:
//               translate(-50%, -50%)
//               scale(1);
//           }

//           50% {
//             transform:
//               translate(-50%, -50%)
//               scale(1.04);
//           }
//         }

//         @keyframes card-float {
//           0%, 100% {
//             transform: translateY(0) rotate(-1deg);
//           }

//           50% {
//             transform: translateY(-12px) rotate(1deg);
//           }
//         }

//         @keyframes card-float-reverse {
//           0%, 100% {
//             transform: translateY(0) rotate(1deg);
//           }

//           50% {
//             transform: translateY(12px) rotate(-1deg);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           *,
//           *::before,
//           *::after {
//             animation-duration: .01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: .01ms !important;
//           }
//         }

//       `}</style>
//     </main>
//   );
// };

// export default Home;

