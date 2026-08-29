import React, { useState } from 'react';

export default function SlidingDrawerDemo() {
  const [isOpen, setIsOpen] = useState(false);
    console.log("I'm Cart Test 2")
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      {/* 1. Navbar with Trigger Button */}
      <header className="sticky top-0 z-10 w-full h-16 bg-slate-900/80 border-b border-slate-800 backdrop-blur px-8 flex items-center justify-between">
        <span className="font-bold text-lg text-indigo-400">Layer Demo</span>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 rounded-lg text-sm font-medium transition-all shadow-md"
        >
          Open Slider
        </button>
      </header>

      {/* 2. Scrollable Page Content */}
      <main className="max-w-3xl mx-auto py-12 px-6 space-y-6">
        <h1 className="text-3xl font-extrabold tracking-tight">Main Screen Content</h1>
        <p className="text-slate-400 leading-relaxed">
          When the slider is active, background scrolling still works, but pointer events are captured by the overlay.
        </p>

        {[...Array(6)].map((_, i) => (
          <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/80 rounded-xl space-y-2">
            <h2 className="text-lg font-semibold text-slate-200">Content Section {i + 1}</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Clicking anywhere on the blurred background automatically slides the panel out to the right and fades the blur away.
            </p>
          </div>
        ))}
      </main>

      {/* 3. The Blur Overlay (Backdrop) */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-md transition-opacity duration-300 ease-in-out cursor-pointer ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        inert={!isOpen ? '' : undefined}
      />

      {/* 4. The Sliding Drawer Panel */}
      <aside
        className={`fixed top-0 right-0 z-40 h-screen w-full sm:w-1/2 lg:w-1/4 bg-slate-900 border-l border-slate-800 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        inert={!isOpen ? '' : undefined}
      >
        <div className="space-y-6">
          {/* Header & Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <h2 className="text-lg font-semibold text-white">Sliding Panel</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links / Options */}
          <nav className="flex flex-col space-y-3">
            <a href="#profile" className="px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-200 text-sm font-medium transition-colors">
              User Profile
            </a>
            <a href="#settings" className="px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-200 text-sm font-medium transition-colors">
              Account Settings
            </a>
            <a href="#notifications" className="px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-200 text-sm font-medium transition-colors">
              Notifications
            </a>
          </nav>
        </div>

        {/* Panel Footer */}
        <div className="pt-4 border-t border-slate-800 text-xs text-slate-500">
          Click the blurred background or ✕ to close.
        </div>
      </aside>
    </div>
  );
}