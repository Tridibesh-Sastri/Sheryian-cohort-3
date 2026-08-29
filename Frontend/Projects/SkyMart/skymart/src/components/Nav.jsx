import React, { useState } from "react";
import { NavLink, useLocation } from "react-router";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Nav = () => {
  let path = useLocation();
  console.log("Current path in Nav.jsx:", path);


  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const { isLogin, loginUser } = useContext(StoreContext);
  console.log("isLogin in Nav.jsx:", isLogin);

  const navItems = [
    {
      name: "Home",
      path: "/main",
    },
    {
      name: "About",
      path: "/main/about",
    },
    {
      name: "Shop",
      path: "/main/shop",
    },
    {
      name: "Consumers",
      path: "/main/consumers",
    },  
  
  ];

  const 
  linkClass = ({ isActive }) =>
    `relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-indigo-500/10 text-indigo-400"
        : "text-slate-300 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20">
            <span className="text-sm font-bold text-white">A</span>
          </div>

          <span className="text-lg font-bold tracking-tight text-white">
            AppName
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        {isLogin ? (
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass} end>
                {item.name}
              </NavLink>
            ))}
          </div>
        ) : (
          <div className="hidden items-center gap-1 md:flex"></div>
        )}

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Cart */}
          <NavLink
            to="/shop/carttest"
            className={({ isActive }) =>
              `relative flex h-10 w-10 items-center justify-center rounded-lg transition ${
                isActive
                  ? "bg-indigo-500/10 text-indigo-400"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`
            }
            aria-label="Shopping cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.41 1.528m0 0L6.75 15.75h10.5l2.25-10.5H5.133Zm1.386 0h13.0M9 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm8.25 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </NavLink>

          {/* Divider */}
          <div className="h-6 w-px bg-white/10" />

          {/* Login / Profile */}

          {isLogin ? (
            <NavLink
              to="/profile"
              className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500/20 hover:bg-blue-800/55 hover:text-white"
            >
              {loginUser ? `Hi, ${loginUser.name}` : "Profile"}
            </NavLink>
          ) : (
            <div>
              <NavLink
                to="/auth/login"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500/20 hover:bg-blue-800/55 hover:text-white"
              >
                Login
              </NavLink>

              <NavLink
                to="/auth/register"
                className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:scale-[1.02] hover:from-indigo-400 hover:to-purple-500"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition hover:bg-white/5 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-indigo-500/10 text-indigo-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Cart */}
            <NavLink
              to="/shop/carttest"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-indigo-500/10 text-indigo-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              🛒 Cart
            </NavLink>

            <div className="my-3 h-px bg-white/10" />

            {/* Auth */}
            {isLogin ? (
              <NavLink
                to="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Profile
              </NavLink>
            ) : (
              <div>
                <NavLink
                  to="/auth/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/auth/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 block rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
