import React, { useState } from 'react';










const cartTest1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("I'm Cart Test 1")
  
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      {/* 1. Navbar with Trigger Button */}
      <header className="sticky top-0 z-10 w-full h-16 bg-slate-900/80 border-b border-slate-800 backdrop-blur px-8 flex items-center justify-between">
        <span className="font-bold text-lg text-indigo-400">Layer Demo</span>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 rounded-lg text-sm font-medium transition-all shadow-md"
        >
          Activate Overlay
        </button>
      </header>

      {/* 2. Scrollable Page Content */}
      <main className="max-w-3xl mx-auto py-12 px-6 space-y-6">
        <h1 className="text-3xl font-extrabold tracking-tight">Main Screen Content</h1>
        <p className="text-slate-400 leading-relaxed">
          Try clicking these buttons or scrolling the page before and after activating the overlay.
        </p>

        <div className="flex gap-4">
          <button 
            onClick={() => alert('Background button clicked!')} 
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm"
            >
            Interactive Button
          </button>
          <input 
            type="text" 
            placeholder="Type here..." 
            className="px-3 py-2 bg-slate-900 border border-slate-700 rounded-md text-sm text-white"
            />
        </div>

        {/* Dummy tall content to demonstrate scrolling */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="p-6 bg-slate-800/50 border border-slate-800/80 rounded-xl space-y-2">
            <h2 className="text-lg font-semibold text-slate-200">Content Section {i + 1}</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              When the overlay is active, the mouse wheel still scrolls this background body, but you cannot click any elements underneath because the overlay intercepts all pointer events.
            </p>
          </div>
        ))}
      </main>

      {/* 3. The Blur Overlay method 1 */}
      {/* <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-md transition-opacity duration-300 ease-in-out cursor-pointer ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={!isOpen}
          /> */}

      {/* Blur overlay method 2 */}
      {/* {isOpen && (
         <div
         onClick={() => setIsOpen(false)}
         className="fixed inset-0 z-30 bg-black/60 backdrop-blur-md"
         />
         )} */}

       {/* Blur overlay method 3 */}

       <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-md ${
            isOpen ? 'block' : 'hidden'
          }`}
          />


        
    </div>
  );
}
export default cartTest1