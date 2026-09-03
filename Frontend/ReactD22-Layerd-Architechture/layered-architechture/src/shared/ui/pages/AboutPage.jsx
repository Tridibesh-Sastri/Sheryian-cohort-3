// import React from 'react'

// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//     </div>
//   )
// }

// export default About



import React from "react";

const About = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main purple glow */}
        <div className="
          absolute left-1/2 top-[-15rem]
          h-[40rem] w-[40rem]
          -translate-x-1/2
          rounded-full
          bg-purple-600/15
          blur-[140px]
        " />

        {/* Indigo glow */}
        <div className="
          absolute -left-40 top-[40%]
          h-[30rem] w-[30rem]
          rounded-full
          bg-indigo-600/10
          blur-[130px]
        " />

        {/* Bottom purple glow */}
        <div className="
          absolute -right-40 bottom-[-10rem]
          h-[32rem] w-[32rem]
          rounded-full
          bg-purple-700/10
          blur-[130px]
        " />
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

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 sm:px-10 lg:px-12 lg:pt-32">

        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}
          <div>

            {/* Label */}
            <div className="
              mb-7 inline-flex items-center gap-2
              rounded-full
              border border-purple-400/20
              bg-purple-500/5
              px-4 py-2
              text-sm text-purple-200
              backdrop-blur-xl
            ">
              <span className="
                h-2 w-2 rounded-full
                bg-purple-400
                shadow-[0_0_15px_rgba(168,85,247,0.9)]
              " />

              About the journey
            </div>

            {/* Heading */}
            <h1 className="
              max-w-4xl
              text-5xl font-bold
              leading-[1.05]
              tracking-tight
              sm:text-6xl
              lg:text-7xl
            ">
              Curiosity
              <br />

              <span className="
                bg-gradient-to-r
                from-purple-300
                via-purple-500
                to-indigo-400
                bg-clip-text
                text-transparent
              ">
                meets
              </span>

              <br />

              engineering.
            </h1>

            <p className="
              mt-8 max-w-2xl
              text-base leading-7
              text-slate-400
              sm:text-lg
            ">
              Technology has never been just about writing code.
              It is about understanding problems, connecting ideas,
              and building things that make the impossible feel
              inevitable.
            </p>

          </div>

          {/* RIGHT — ORBITAL IDENTITY */}

          <div className="
            relative mx-auto
            flex aspect-square
            w-full max-w-[430px]
            items-center justify-center
          ">

            {/* Glow */}
            <div className="
              absolute h-[65%] w-[65%]
              rounded-full
              bg-purple-600/10
              blur-[90px]
            " />

            {/* Orbit */}
            <div className="
              absolute h-[85%] w-[85%]
              rounded-full
              border border-purple-400/10
              animate-[spin_25s_linear_infinite]
            ">
              <span className="
                absolute left-1/2 top-0
                h-3 w-3
                -translate-x-1/2
                rounded-full
                bg-purple-400
                shadow-[0_0_25px_rgba(168,85,247,1)]
              " />
            </div>

            {/* Orbit */}
            <div className="
              absolute h-[65%] w-[65%]
              rounded-full
              border border-indigo-400/15
              animate-[spin_17s_linear_infinite_reverse]
            ">
              <span className="
                absolute bottom-0 left-1/2
                h-2.5 w-2.5
                -translate-x-1/2
                rounded-full
                bg-indigo-400
                shadow-[0_0_20px_rgba(99,102,241,1)]
              " />
            </div>

            {/* Core */}
            <div className="
              relative flex h-52 w-52
              items-center justify-center
              rounded-full
              border border-white/[0.08]
              bg-slate-900/70
              shadow-[0_0_80px_rgba(124,58,237,0.18)]
              backdrop-blur-2xl
            ">

              <div className="
                absolute inset-5
                rounded-full
                border border-purple-400/10
              " />

              <div className="
                absolute inset-10
                rounded-full
                bg-gradient-to-br
                from-purple-500/10
                to-indigo-500/5
                blur-xl
              " />

              <div className="relative text-center">

                <div className="
                  text-5xl font-bold
                  bg-gradient-to-r
                  from-purple-300
                  to-indigo-300
                  bg-clip-text
                  text-transparent
                ">
                  ∞
                </div>

                <p className="
                  mt-2
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-slate-500
                ">
                  Curiosity
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          STORY
      ========================================================= */}

      <section className="
        relative
        border-y border-white/[0.05]
        px-6 py-24
        sm:px-10
        lg:px-12
      ">

        <div className="
          mx-auto max-w-7xl
          grid gap-14
          lg:grid-cols-[0.7fr_1.3fr]
        ">

          {/* Heading */}
          <div>

            <p className="
              text-sm font-medium
              uppercase tracking-[0.3em]
              text-purple-400
            ">
              The story
            </p>

            <h2 className="
              mt-4
              text-3xl font-semibold
              tracking-tight
              sm:text-4xl
            ">
              Always learning.
              <br />
              Always building.
            </h2>

          </div>

          {/* Story */}
          <div className="
            space-y-6
            text-base leading-8
            text-slate-400
          ">

            <p>
              The journey started with a simple curiosity:
              understanding how things work.
            </p>

            <p>
              That curiosity gradually moved from circuits and
              electronics into software, artificial intelligence,
              automation, robotics, and the endless possibilities
              created when these worlds intersect.
            </p>

            <p>
              Today, the goal is not to stay inside one technological
              box. The goal is to explore the space between disciplines
              and build systems where hardware, software, intelligence,
              and creativity work together.
            </p>

            <p className="text-slate-300">
              Because the most interesting ideas usually live
              somewhere between two different fields.
            </p>

          </div>

        </div>

      </section>

      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}

      <section className="
        relative
        mx-auto max-w-7xl
        px-6 py-24
        sm:px-10
        lg:px-12
      ">

        <div className="max-w-2xl">

          <p className="
            text-sm font-medium
            uppercase tracking-[0.3em]
            text-purple-400
          ">
            Philosophy
          </p>

          <h2 className="
            mt-4
            text-3xl font-semibold
            tracking-tight
            sm:text-4xl
          ">
            Think deeply.
            <br />
            Build boldly.
          </h2>

        </div>

        <div className="
          mt-12
          grid gap-5
          md:grid-cols-3
        ">

          <PhilosophyCard
            number="01"
            title="Curiosity"
            text="Ask better questions before trying to find faster answers."
          />

          <PhilosophyCard
            number="02"
            title="Experimentation"
            text="Ideas become valuable when they survive contact with reality."
          />

          <PhilosophyCard
            number="03"
            title="Iteration"
            text="Build, break, learn, improve — and keep moving forward."
          />

        </div>

      </section>

      {/* =========================================================
          DOMAINS
      ========================================================= */}

      <section className="
        relative
        border-y border-white/[0.05]
        bg-white/[0.01]
        px-6 py-24
        sm:px-10
        lg:px-12
      ">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="
              text-sm font-medium
              uppercase tracking-[0.3em]
              text-purple-400
            ">
              Areas of exploration
            </p>

            <h2 className="
              mt-4
              text-3xl font-semibold
              sm:text-4xl
            ">
              One ecosystem.
              <br />
              Many dimensions.
            </h2>

          </div>

          <div className="
            mt-12
            grid gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          ">

            <DomainCard
              icon="⌘"
              title="Software"
              items="Web • Apps • Systems"
            />

            <DomainCard
              icon="◈"
              title="AI & Data"
              items="AI • ML • Generative AI"
            />

            <DomainCard
              icon="◉"
              title="Hardware"
              items="Embedded • VLSI • IoT"
            />

            <DomainCard
              icon="✦"
              title="Robotics"
              items="Automation • Control • Mechatronics"
            />

          </div>

        </div>

      </section>

      {/* =========================================================
          TIMELINE
      ========================================================= */}

      <section className="
        relative
        mx-auto max-w-5xl
        px-6 py-24
        sm:px-10
      ">

        <div className="text-center">

          <p className="
            text-sm font-medium
            uppercase tracking-[0.3em]
            text-purple-400
          ">
            The mindset
          </p>

          <h2 className="
            mt-4
            text-3xl font-semibold
            sm:text-4xl
          ">
            There is always another level.
          </h2>

        </div>

        <div className="relative mt-16">

          {/* Vertical line */}
          <div className="
            absolute left-4 top-0
            h-full w-px
            bg-gradient-to-b
            from-purple-500/50
            via-indigo-500/20
            to-transparent
            sm:left-1/2
          " />

          <TimelineItem
            side="left"
            title="Learn"
            text="Understand the fundamentals. Build the mental models."
          />

          <TimelineItem
            side="right"
            title="Build"
            text="Turn concepts into working systems and real experiences."
          />

          <TimelineItem
            side="left"
            title="Break"
            text="Find the weaknesses. Question the assumptions."
          />

          <TimelineItem
            side="right"
            title="Evolve"
            text="Take what works, discard what doesn't, and build again."
          />

        </div>

      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="
        relative
        overflow-hidden
        border-t border-white/[0.05]
        px-6 py-28
        text-center
        sm:px-10
      ">

        <div className="
          absolute left-1/2 top-1/2
          h-72 w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/10
          blur-[100px]
        " />

        <div className="relative mx-auto max-w-3xl">

          <p className="
            text-sm font-medium
            uppercase tracking-[0.3em]
            text-purple-400
          ">
            What's next?
          </p>

          <h2 className="
            mt-5
            text-4xl font-bold
            tracking-tight
            sm:text-5xl
          ">
            The journey is
            <span className="
              ml-2
              bg-gradient-to-r
              from-purple-300
              to-indigo-400
              bg-clip-text
              text-transparent
            ">
              just beginning.
            </span>
          </h2>

          <p className="
            mx-auto mt-6 max-w-xl
            text-slate-400
          ">
            There is always another technology to explore,
            another problem to solve, and another idea waiting
            to become something real.
          </p>

          <button className="
            mt-9
            rounded-xl
            bg-purple-600
            px-8 py-3.5
            font-medium
            text-white
            shadow-[0_0_35px_rgba(147,51,234,0.25)]
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-purple-500
            hover:shadow-[0_0_45px_rgba(147,51,234,0.4)]
          ">
            Start Exploring →
          </button>

        </div>

      </section>

      {/* Bottom fade */}
      <div className="
        pointer-events-none
        absolute bottom-0 left-0 right-0
        h-40
        bg-gradient-to-t
        from-slate-950
        to-transparent
      " />

    </main>
  );
};


/* =========================================================
   PHILOSOPHY CARD
========================================================= */

const PhilosophyCard = ({ number, title, text }) => {
  return (
    <div className="
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
    ">

      <div className="
        text-xs font-medium
        tracking-[0.25em]
        text-purple-400
      ">
        {number}
      </div>

      <h3 className="
        mt-6
        text-xl font-semibold
      ">
        {title}
      </h3>

      <p className="
        mt-3
        text-sm leading-6
        text-slate-500
      ">
        {text}
      </p>

      <div className="
        absolute -right-10 -top-10
        h-28 w-28
        rounded-full
        bg-purple-600/10
        blur-3xl
        transition-all
        group-hover:bg-purple-500/20
      " />

    </div>
  );
};


/* =========================================================
   DOMAIN CARD
========================================================= */

const DomainCard = ({ icon, title, items }) => {
  return (
    <div className="
      group
      rounded-2xl
      border border-white/[0.07]
      bg-slate-900/40
      p-6
      backdrop-blur-xl
      transition-all duration-300
      hover:-translate-y-1
      hover:border-purple-400/20
      hover:bg-purple-500/[0.035]
    ">

      <div className="
        flex h-11 w-11
        items-center justify-center
        rounded-xl
        border border-purple-400/15
        bg-purple-500/10
        text-lg
        text-purple-300
        transition-transform duration-300
        group-hover:scale-110
      ">
        {icon}
      </div>

      <h3 className="
        mt-6
        font-semibold
      ">
        {title}
      </h3>

      <p className="
        mt-2
        text-xs
        text-slate-500
      ">
        {items}
      </p>

    </div>
  );
};


/* =========================================================
   TIMELINE ITEM
========================================================= */

const TimelineItem = ({ side, title, text }) => {
  const isLeft = side === "left";

  return (
    <div className="
      relative
      mb-14
      grid
      sm:grid-cols-2
    ">

      {/* Desktop content */}
      <div
        className={`
          hidden sm:block
          ${isLeft ? "pr-16 text-right" : "col-start-2 pl-16"}
        `}
      >

        <h3 className="
          text-xl font-semibold
        ">
          {title}
        </h3>

        <p className="
          mt-2
          text-sm leading-6
          text-slate-500
        ">
          {text}
        </p>

      </div>

      {/* Mobile + timeline */}
      <div className="
        pl-10
        sm:hidden
      ">

        <h3 className="
          text-xl font-semibold
        ">
          {title}
        </h3>

        <p className="
          mt-2
          text-sm leading-6
          text-slate-500
        ">
          {text}
        </p>

      </div>

      {/* Desktop dot */}
      <div className="
        absolute left-4 top-1
        h-2.5 w-2.5
        -translate-x-1/2
        rounded-full
        bg-purple-400
        shadow-[0_0_18px_rgba(168,85,247,0.9)]
        sm:left-1/2
      " />

    </div>
  );
};


export default About;

