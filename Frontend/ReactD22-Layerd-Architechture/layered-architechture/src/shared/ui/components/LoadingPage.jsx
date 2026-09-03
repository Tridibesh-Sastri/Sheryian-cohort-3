import React from "react";

const LoadingPage = ({
  text = "Loading",
  message = "Almost there! Great things take a moment.",
  progress = null,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      <div className="relative flex w-full max-w-md flex-col items-center px-6">

        {/* Loader */}
        <div className="relative mb-10 h-36 w-36">

          {/* Outer rotating ring */}
          <div className="absolute inset-0 animate-[spin_3s_linear_infinite] rounded-full border border-purple-500/20 border-t-purple-400 border-r-blue-400" />

          {/* Middle ring */}
          <div className="absolute inset-3 animate-[spin_2s_linear_infinite_reverse] rounded-full border border-blue-400/10 border-b-blue-400 border-l-purple-400" />

          {/* Orbit */}
          <div className="absolute inset-7 animate-[spin_1.8s_linear_infinite] rounded-full border border-dashed border-slate-600/50">
            <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_15px_#60a5fa]" />
          </div>

          {/* Core */}
          <div className="absolute inset-10 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 shadow-[0_0_50px_rgba(139,92,246,0.45)]">
            <div className="h-8 w-8 animate-pulse rounded-full bg-white/90 shadow-[0_0_25px_rgba(255,255,255,0.8)]" />
          </div>

          {/* Orbiting dot */}
          <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-purple-400 shadow-[0_0_18px_#c084fc]" />
        </div>

        {/* Loading text */}
        <div className="mb-2 flex items-center gap-1">
          <h2 className="text-4xl font-semibold tracking-tight text-white">
            {text}
          </h2>

          {/* Animated dots */}
          <span className="flex gap-1 pt-4">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-400 [animation-delay:0ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400 [animation-delay:150ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white [animation-delay:300ms]" />
          </span>
        </div>

        {/* Message */}
        <p className="mb-7 text-center text-sm text-slate-400">
          {message}
        </p>

        {/* Optional progress */}
        {progress !== null && (
          <div className="w-full max-w-sm">
            <div className="mb-2 flex justify-between text-xs">
              <span className="text-slate-500">Processing</span>
              <span className="font-medium text-slate-300">
                {progress}%
              </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-400 shadow-[0_0_15px_rgba(99,102,241,0.6)] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Status indicators */}
        <div className="mt-8 flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400 [animation-delay:200ms]" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-500 [animation-delay:400ms]" />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;