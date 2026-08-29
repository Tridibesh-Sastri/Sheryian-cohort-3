import React from "react";

const UserLoading = () => {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center overflow-hidden bg-slate-950 p-6">
      <div className="relative flex flex-col items-center">

        {/* =====================================================
            AMBIENT BACKGROUND GLOW
        ====================================================== */}

        <div className="absolute h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl animate-pulse" />

        <div
          className="
            absolute h-56 w-56 rounded-full
            border border-indigo-500/10
            animate-[spin_12s_linear_infinite]
          "
        />

        <div
          className="
            absolute h-72 w-72 rounded-full
            border border-purple-500/5
            animate-[spin_18s_linear_infinite_reverse]
          "
        />

        {/* =====================================================
            USER SCANNER
        ====================================================== */}

        <div className="relative h-64 w-64">

          {/* Outer Orbit */}
          <div
            className="
              absolute inset-2 rounded-full
              border border-slate-700/60
              animate-[spin_10s_linear_infinite]
            "
          >
            {/* Orbit Dot */}
            <div
              className="
                absolute -top-1 left-1/2
                h-2.5 w-2.5 -translate-x-1/2
                rounded-full bg-blue-400
                shadow-lg shadow-blue-500/80
              "
            />
          </div>

          {/* Second Orbit */}
          <div
            className="
              absolute inset-8 rounded-full
              border border-indigo-500/20
              animate-[spin_7s_linear_infinite_reverse]
            "
          >
            <div
              className="
                absolute right-1 top-1/2
                h-2 w-2 -translate-y-1/2
                rounded-full bg-purple-400
                shadow-lg shadow-purple-500/80
              "
            />
          </div>

          {/* =================================================
              FLOATING DATA NODES
          ================================================== */}

          <div
            className="
              absolute left-1 top-16
              flex h-8 w-8 items-center justify-center
              rounded-xl border border-indigo-400/20
              bg-indigo-500/10
              text-xs text-indigo-300
              backdrop-blur-md
              animate-[float_3s_ease-in-out_infinite]
            "
          >
            ID
          </div>

          <div
            className="
              absolute right-0 top-10
              flex h-8 w-8 items-center justify-center
              rounded-xl border border-blue-400/20
              bg-blue-500/10
              text-xs text-blue-300
              backdrop-blur-md
              animate-[float_4s_ease-in-out_infinite_reverse]
            "
          >
            @
          </div>

          <div
            className="
              absolute bottom-14 left-3
              flex h-8 w-8 items-center justify-center
              rounded-xl border border-purple-400/20
              bg-purple-500/10
              text-xs text-purple-300
              backdrop-blur-md
              animate-[float_3.5s_ease-in-out_infinite]
            "
          >
            ✦
          </div>

          <div
            className="
              absolute bottom-10 right-2
              flex h-8 w-8 items-center justify-center
              rounded-xl border border-slate-600
              bg-slate-900/80
              text-xs text-white
              shadow-lg
              animate-[float_2.8s_ease-in-out_infinite_reverse]
            "
          >
            ✓
          </div>

          {/* =================================================
              CONNECTION LINES
          ================================================== */}

          <div
            className="
              absolute left-8 top-[84px]
              h-px w-16 origin-left
              rotate-[18deg]
              bg-gradient-to-r from-indigo-500/60 to-transparent
            "
          />

          <div
            className="
              absolute right-8 top-[76px]
              h-px w-16 origin-right
              -rotate-[25deg]
              bg-gradient-to-l from-blue-500/60 to-transparent
            "
          />

          <div
            className="
              absolute bottom-[80px] left-10
              h-px w-14 origin-left
              -rotate-[20deg]
              bg-gradient-to-r from-purple-500/60 to-transparent
            "
          />

          {/* =================================================
              MAIN AVATAR
          ================================================== */}

          <div
            className="
              absolute left-1/2 top-1/2
              flex h-32 w-32
              -translate-x-1/2 -translate-y-1/2
              items-center justify-center
              rounded-[2.5rem]
              border border-white/10
              bg-gradient-to-br
              from-indigo-600
              via-blue-600
              to-purple-700
              shadow-2xl
              shadow-indigo-600/30
              animate-[avatarFloat_3s_ease-in-out_infinite]
            "
          >

            {/* Avatar Inner */}
            <div
              className="
                relative flex h-24 w-24
                items-center justify-center
                rounded-[2rem]
                bg-slate-950/90
                shadow-inner
              "
            >

              {/* Head */}
              <div
                className="
                  absolute top-5
                  h-9 w-9
                  rounded-full
                  bg-gradient-to-br
                  from-white
                  to-blue-200
                  shadow-lg shadow-blue-300/20
                "
              />

              {/* Body */}
              <div
                className="
                  absolute bottom-4
                  h-8 w-14
                  rounded-t-[1.5rem]
                  rounded-b-lg
                  bg-gradient-to-r
                  from-blue-300
                  to-indigo-400
                "
              />

              {/* Eyes */}
              <div className="absolute top-[37px] flex gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
              </div>

              {/* Tiny Smile */}
              <div
                className="
                  absolute top-[45px]
                  h-2 w-4
                  rounded-b-full
                  border-b-2 border-slate-800
                "
              />

              {/* Scanning Beam */}
              <div
                className="
                  absolute left-2 right-2 top-2
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-white
                  to-transparent
                  opacity-70
                  shadow-lg shadow-blue-300
                  animate-[scan_2s_ease-in-out_infinite]
                "
              />
            </div>

            {/* Status Indicator */}
            <div
              className="
                absolute -right-1 -top-1
                h-5 w-5
                rounded-full
                border-4 border-indigo-600
                bg-blue-400
                shadow-lg shadow-blue-400/70
                animate-pulse
              "
            />
          </div>

          {/* =================================================
              SCANNING RING
          ================================================== */}

          <div
            className="
              absolute left-1/2 top-1/2
              h-40 w-40
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              border border-blue-400/20
              animate-ping
            "
          />
        </div>

        {/* =====================================================
            TEXT
        ====================================================== */}

        <div className="relative mt-5 text-center">

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-bold tracking-[0.25em] text-white">
              USER
            </span>

            <span className="text-sm text-indigo-400">
              //
            </span>

            <span className="text-sm font-medium tracking-[0.2em] text-blue-400">
              SYNCING
            </span>
          </div>

          {/* Animated Dots */}
          <div className="mt-3 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:-0.3s]" />
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:-0.15s]" />
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-bounce" />
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Building your user constellation
          </p>
        </div>

        {/* =====================================================
            PROGRESS BAR
        ====================================================== */}

        <div className="mt-6 h-1 w-44 overflow-hidden rounded-full bg-slate-800">
          <div
            className="
              h-full w-1/2 rounded-full
              bg-gradient-to-r
              from-blue-500
              via-indigo-500
              to-purple-500
              animate-[loading_1.6s_ease-in-out_infinite]
            "
          />
        </div>

      </div>

      {/* =======================================================
          CUSTOM ANIMATIONS
      ======================================================== */}

      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes avatarFloat {
            0%, 100% {
              transform: translate(-50%, -50%) translateY(0px);
            }
            50% {
              transform: translate(-50%, -50%) translateY(-7px);
            }
          }

          @keyframes scan {
            0% {
              top: 8px;
              opacity: 0;
            }

            20% {
              opacity: 1;
            }

            80% {
              opacity: 1;
            }

            100% {
              top: 82px;
              opacity: 0;
            }
          }

          @keyframes loading {
            0% {
              transform: translateX(-150%);
            }

            50% {
              transform: translateX(100%);
            }

            100% {
              transform: translateX(300%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default UserLoading;