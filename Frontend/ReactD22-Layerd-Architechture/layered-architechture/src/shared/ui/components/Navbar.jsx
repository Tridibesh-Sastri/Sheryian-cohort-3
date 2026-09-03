import React from 'react'
import {useNavigate, NavLink} from 'react-router'
import {useSelector} from 'react-redux'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import Product from '../../../features/products/ui/pages/ProductPage'
import OrderPage from '../../../features/orders/ui/pages/OrderPage'
import CartPage from '../../../features/cart/ui/pages/CartPage'
import ProfilePage from '../../../features/auth/ui/pages/ProfilePage'

const Navbar = () => {
  const navigate = useNavigate();

  const {isAuthenticated, user} = useSelector((state)=> state.auth);


  const navRightItems = ()=>{
    if(isAuthenticated){
      return (
        <div>
          <NavLink to="/main/profile">Profile</NavLink>
          <NavLink to="/main/cart">Cart</NavLink>
        </div>
      )
    }else{
      return (
        <div>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      )
    }
  }
  const navMiddleItems = ()=>{
    if(isAuthenticated){
      return(
        <div>
          <NavLink to="/main">Home</NavLink>
          <NavLink to="/main/about">about</NavLink>
          <NavLink to="/main/product">Product</NavLink>
          {isAuthenticated && <NavLink to="/main/order">Orders</NavLink>}
        </div>
      )
    }
    return(
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/product">Product</NavLink>
      </div>
    )
  }

  return (
    <div>
      <nav 
      className="flex justify-around items-center bg-gray-800 p-4"
      >
        <div>
          <span 
          onClick={()=> isAuthenticated? navigate("/main"): navigate("/")}
          className="text-white font-bold text-lg cursor-pointer"
          >logo</span>
        </div>
        {navMiddleItems()}
        {navRightItems()}
      </nav>
    </div>
  )
}

export default Navbar

// import React, { useState } from "react";
// import {
//   Menu,
//   X,
//   Sparkles,
//   ChevronDown,
// } from "lucide-react";
// // import {useAuth} from "../../hooks/use";
// import { useNavigate } from "react-router";


// let navigate = useNavigate();
// const navItems = [
//   { label: "Home", href: "#" },
//   { label: "Explore", href: "#explore" },
//   { label: "Projects", href: "#projects" },
//   { label: "About", href: "/main/about" },
// ];

// const Navbar = () => {

//   const [active, setActive] = useState("Home");
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">

//       <div className="mx-auto max-w-7xl">

//         {/* ================= NAVBAR ================= */}

//         <div className="relative isolate h-16 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-[0_15px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">

//           {/* ================= FLUID BACKGROUND ================= */}

//           <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

//             {/* Purple wave */}
//             <div
//               className="
//                 absolute
//                 -left-[100px]
//                 -top-[55px]
//                 h-[150px]
//                 w-[420px]
//                 rounded-[50%]
//                 bg-[radial-gradient(ellipse,rgba(168,85,247,0.5),rgba(124,58,237,0.18)_45%,transparent_72%)]
//                 blur-[22px]
//                 animate-[fluid-purple_7s_ease-in-out_infinite]
//               "
//             />

//             {/* Blue wave */}
//             <div
//               className="
//                 absolute
//                 -right-[110px]
//                 -top-[60px]
//                 h-[155px]
//                 w-[430px]
//                 rounded-[50%]
//                 bg-[radial-gradient(ellipse,rgba(59,130,246,0.48),rgba(37,99,235,0.16)_45%,transparent_72%)]
//                 blur-[22px]
//                 animate-[fluid-blue_8s_ease-in-out_infinite]
//               "
//             />

//             {/* Indigo bottom wave */}
//             <div
//               className="
//                 absolute
//                 bottom-[-65px]
//                 left-[34%]
//                 h-[100px]
//                 w-[360px]
//                 rounded-[50%]
//                 bg-[radial-gradient(ellipse,rgba(99,102,241,0.4),transparent_70%)]
//                 blur-[22px]
//                 animate-[fluid-indigo_6s_ease-in-out_infinite]
//               "
//             />

//             {/* Moving reflection */}
//             <div
//               className="
//                 absolute
//                 -left-[220px]
//                 -top-[55px]
//                 h-[180px]
//                 w-[180px]
//                 rotate-[25deg]
//                 bg-gradient-to-r
//                 from-transparent
//                 via-white/[0.09]
//                 to-transparent
//                 blur-[10px]
//                 animate-[fluid-shine_5.5s_linear_infinite]
//               "
//             />

//             {/* Flowing wave lines */}
//             <div
//               className="
//                 absolute
//                 -bottom-[18px]
//                 -left-[15%]
//                 h-[30px]
//                 w-[130%]
//                 rounded-[50%]
//                 border-t
//                 border-purple-400/30
//                 animate-[wave-line_5s_ease-in-out_infinite]
//               "
//             />

//             <div
//               className="
//                 absolute
//                 -bottom-[23px]
//                 -left-[15%]
//                 h-[30px]
//                 w-[130%]
//                 rounded-[50%]
//                 border-t
//                 border-blue-400/25
//                 animate-[wave-line-reverse_7s_ease-in-out_infinite]
//               "
//             />

//             {/* Top highlight */}
//             <div
//               className="
//                 absolute
//                 left-0
//                 right-0
//                 top-0
//                 h-px
//                 bg-gradient-to-r
//                 from-transparent
//                 via-purple-400/60
//                 to-transparent
//               "
//             />
//           </div>

//           {/* ================= CONTENT ================= */}

//           <div className="relative flex h-full items-center justify-between px-4 sm:px-6">

//             {/* Logo */}

//             <span
//               onClick={()=> navigate("/main")}
//               href="#"
//               className="group relative z-20 flex shrink-0 items-center gap-2.5"
//             >
//               <div
//                 className="
//                   relative flex h-9 w-9
//                   items-center justify-center
//                   overflow-hidden rounded-xl
//                   bg-gradient-to-br
//                   from-purple-500
//                   via-indigo-500
//                   to-blue-500
//                   shadow-[0_0_28px_rgba(139,92,246,0.45)]
//                   animate-[logo-pulse_3s_ease-in-out_infinite]
//                   transition-transform duration-500
//                   group-hover:scale-110
//                 "
//               >
//                 <Sparkles
//                   size={17}
//                   className="relative z-10 text-white"
//                 />

//                 <span
//                   className="
//                     absolute inset-0
//                     -translate-x-full
//                     skew-x-[-20deg]
//                     bg-gradient-to-r
//                     from-transparent
//                     via-white/50
//                     to-transparent
//                     transition-transform
//                     duration-700
//                     group-hover:translate-x-[250%]
//                   "
//                 />
//               </div>

//               <span className="text-lg font-bold tracking-tight text-white">
//                 NEX<span className="text-purple-400">A</span>
//               </span>
//             </a>

//             {/* Desktop nav */}

//             <div className="hidden items-center md:flex">

//               {navItems.map((item, index) => {
//                 // const isActive = active === item.label;

//                 return (
//                   <a
//                     key={item.label}
//                     href={item.href}
//                     onClick={() => setActive(item.label)}
//                     style={{
//                       "--wave-delay": `${index * 0.25}s`,
//                     }}
//                     className={(isActive)=> {`
//                       group relative mx-1
//                       rounded-xl px-4 py-2.5
//                       text-sm font-medium
//                       animate-[nav-wave_4s_ease-in-out_infinite]
//                       [animation-delay:var(--wave-delay)]
//                       ${
//                         isActive
//                           ? "text-white"
//                           : "text-slate-400"
//                       }
//                     `}}
//                   >

//                     {/* Glass surface */}

//                     <span
//                       className={(isActive)=>{`
//                         absolute inset-0 -z-10
//                         rounded-xl
//                         border
//                         transition-all duration-500
//                         ${
//                           isActive
//                             ? "border-purple-400/20 bg-white/[0.07] shadow-[inset_0_0_20px_rgba(139,92,246,0.1)]"
//                             : "border-transparent group-hover:border-white/10 group-hover:bg-white/[0.05]"
//                         }
//                       `}}
//                     />

//                     {/* Item glow */}

//                     <span
//                       className="
//                         absolute
//                         -bottom-3
//                         left-1/2
//                         h-8
//                         w-10
//                         -translate-x-1/2
//                         rounded-full
//                         bg-purple-500/20
//                         opacity-0
//                         blur-xl
//                         transition-opacity
//                         duration-500
//                         group-hover:opacity-100
//                       "
//                     />

//                     <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
//                       {item.label}
//                     </span>

//                     {/* Active wave */}

//                     <span
//                       className={(isActive)=>{`
//                         absolute
//                         bottom-1
//                         left-1/2
//                         h-[2px]
//                         -translate-x-1/2
//                         rounded-full
//                         bg-gradient-to-r
//                         from-purple-400
//                         via-indigo-400
//                         to-blue-400
//                         shadow-[0_0_12px_rgba(139,92,246,0.9)]
//                         transition-all duration-500
//                         ${
//                           isActive
//                             ? "w-6 opacity-100"
//                             : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
//                         }
//                       `}}
                      
//                     />
//                   </a>
//                 );
//               })}
//             </div>

//             {/* Actions */}

//             <div className="hidden items-center gap-2 md:flex">

//               <button
//                 className="
//                   group flex items-center gap-1
//                   rounded-xl px-3 py-2
//                   text-sm font-medium
//                   text-slate-400
//                   transition-all duration-300
//                   hover:bg-white/[0.05]
//                   hover:text-white
//                 "
//               >
//                 More

//                 <ChevronDown
//                   size={15}
//                   className="
//                     transition-transform
//                     duration-300
//                     group-hover:rotate-180
//                   "
//                 />
//               </button>

//               <button
//                 className="
//                   group relative overflow-hidden
//                   rounded-xl
//                   bg-gradient-to-r
//                   from-purple-600
//                   via-indigo-600
//                   to-blue-600
//                   px-5 py-2.5
//                   text-sm font-semibold
//                   text-white
//                   shadow-[0_0_28px_rgba(124,58,237,0.3)]
//                   transition-all duration-300
//                   hover:scale-[1.04]
//                   hover:shadow-[0_0_42px_rgba(124,58,237,0.55)]
//                   active:scale-95
//                 "
//               >
//                 <span className="relative z-10">
//                   Get Started
//                 </span>

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
//             </div>

//             {/* Mobile */}

//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="
//                 flex h-10 w-10
//                 items-center justify-center
//                 rounded-xl
//                 border border-white/10
//                 bg-white/[0.05]
//                 text-slate-300
//                 transition-all
//                 hover:bg-white/10
//                 hover:text-white
//                 md:hidden
//               "
//               aria-label="Toggle navigation"
//             >
//               {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>

//         {/* ================= MOBILE MENU ================= */}

//         <div
//           className={`
//             mt-2 overflow-hidden
//             rounded-2xl
//             border border-white/10
//             bg-slate-950/95
//             backdrop-blur-2xl
//             transition-all duration-500
//             md:hidden
//             ${
//               mobileOpen
//                 ? "max-h-[500px] translate-y-0 opacity-100"
//                 : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
//             }
//           `}
//         >
//           <div className="p-3">

//             {navItems.map((item) => {
//               // const isActive = active === item.label;

//               return (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   onClick={() => {
//                     setActive(item.label);
//                     setMobileOpen(false);
//                   }}
//                   className={({isActive})=>{`
//                     flex items-center
//                     rounded-xl
//                     px-4 py-3.5
//                     text-sm font-medium
//                     transition-all duration-300
//                     ${
//                       isActive
//                         ? "bg-purple-500/10 text-white"
//                         : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
//                     }
//                   `}}
//                 >
//                   { (
//                     <span className={({isActive})=>{isActive && `
//                       mr-3 h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7]
//                     `}} />
//                   )}

//                   {item.label}
//                 </a>
//               );
//             })}

//             <div className="my-2 h-px bg-white/[0.06]" />

//             <button className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(124,58,237,0.25)]">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ================= ANIMATIONS ================= */}

//       <style>{`
//         @keyframes fluid-purple {
//           0%, 100% {
//             transform: translate(0, 0) rotate(-8deg) scale(1);
//           }

//           25% {
//             transform: translate(120px, 12px) rotate(4deg) scale(1.12);
//           }

//           50% {
//             transform: translate(280px, -8px) rotate(10deg) scale(.95);
//           }

//           75% {
//             transform: translate(120px, 15px) rotate(-3deg) scale(1.1);
//           }
//         }

//         @keyframes fluid-blue {
//           0%, 100% {
//             transform: translate(0, 0) rotate(8deg) scale(1);
//           }

//           25% {
//             transform: translate(-120px, -10px) rotate(-4deg) scale(1.12);
//           }

//           50% {
//             transform: translate(-280px, 10px) rotate(-11deg) scale(.94);
//           }

//           75% {
//             transform: translate(-120px, -5px) rotate(3deg) scale(1.1);
//           }
//         }

//         @keyframes fluid-indigo {
//           0%, 100% {
//             transform: translateX(-20%) scaleX(1);
//           }

//           50% {
//             transform: translateX(55%) scaleX(1.4);
//           }
//         }

//         @keyframes fluid-shine {
//           0% {
//             transform: translateX(0) rotate(25deg);
//             opacity: 0;
//           }

//           15% {
//             opacity: 1;
//           }

//           50% {
//             opacity: .7;
//           }

//           100% {
//             transform: translateX(1150px) rotate(25deg);
//             opacity: 0;
//           }
//         }

//         @keyframes wave-line {
//           0%, 100% {
//             transform: translateX(-2%) rotate(-1deg) scaleY(1);
//           }

//           50% {
//             transform: translateX(8%) rotate(2deg) scaleY(1.8);
//           }
//         }

//         @keyframes wave-line-reverse {
//           0%, 100% {
//             transform: translateX(3%) rotate(1deg) scaleY(1);
//           }

//           50% {
//             transform: translateX(-8%) rotate(-2deg) scaleY(1.7);
//           }
//         }

//         @keyframes nav-wave {
//           0%, 100% {
//             transform: translateY(0) rotate(0);
//           }

//           20% {
//             transform: translateY(-2px) rotate(-.4deg);
//           }

//           45% {
//             transform: translateY(1px) rotate(.3deg);
//           }

//           65% {
//             transform: translateY(3px) rotate(.5deg);
//           }

//           85% {
//             transform: translateY(-1px) rotate(-.2deg);
//           }
//         }

//         @keyframes logo-pulse {
//           0%, 100% {
//             box-shadow: 0 0 24px rgba(139,92,246,.35);
//           }

//           50% {
//             box-shadow: 0 0 38px rgba(59,130,246,.55);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .navbar-fluid *,
//           .navbar-fluid *::before,
//           .navbar-fluid *::after {
//             animation: none !important;
//             transition: none !important;
//           }
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;

