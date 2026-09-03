import React, { useMemo, useState } from "react";
import { useAuth } from "../../hooks/useAuthHook";


const Register = () => {
  

  // -----------------------------
  // Password Visibility State Definition
  // -----------------------------
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  
  // -----------------------------
  // Password Strength
  // -----------------------------
  

  const { navigate } = useAuth();
  

  


  // -----------------------------
  // Submit
  // -----------------------------

  //  const onRegister = async (data) => {
  //   console.log("Registration Data:", data);

  //   // Example:
  //   // await axios.post("/api/register", data);

  //   await new Promise((resolve) => setTimeout(resolve, 1500));
  //   reset();

  //   console.log("Registration successful");

  // };

  // const {onRegister} = useAuth();

  // -----------------------------
  // Submit Button Validation Icon
  // -----------------------------

  const ValidationIcon = ({ valid }) => (
    <span
      className={`flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold ${
        valid
          ? "bg-emerald-500/20 text-emerald-400"
          : "bg-slate-700/50 text-slate-500"
      }`}
    >
      {valid ? "✓" : "•"}

    </span>
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-8">

      {/******************* Background decoration *******************/}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      {/******************* Register Card *******************/}

      <div className="relative mx-auto w-full max-w-lg">
        <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-xl sm:p-9">

          {/******************* Header *******************/}

          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-7 w-7 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 7.5v3m1.5-1.5h-3M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white">
              Create your account
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Join us and get started today
            </p>
          </div>

          {/******************* Form *******************/}

          <form
  
            className="space-y-5"
            noValidate
          >

            {/* ================= NAME ================= */}

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Full name
              </label>

              <input
                
                id="name"
                type="text"
                placeholder="John Doe"
                autoComplete="name"
                className={`w-full rounded-xl border bg-slate-900/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:ring-2`}
              />

              
            </div>

            {/* ================= EMAIL ================= */}

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email address
              </label>

              <input

                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className={`w-full rounded-xl border bg-slate-900/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:ring-2`}
              />
            </div>

            {/* ================= CONTACT ================= */}

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="contactNumber"
                  className="text-sm font-medium text-slate-300"
                >
                  Contact number
                </label>

                <span className="text-xs text-slate-500">
                  
                </span>
              </div>

              <div className="flex">
                <span className="flex items-center rounded-l-xl border border-r-0 border-white/10 bg-slate-800/80 px-3 text-sm text-slate-400">
                  +91
                </span>

                <input
        
                  id="contactNumber"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="9876543210"
                  autoComplete="tel"
                  className={`w-full rounded-r-xl border bg-slate-900/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:ring-2 `}
                  
                  onInput={(e) => {
                    e.target.value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                  }}
                />
              </div>
            </div>

            {/* ================= PASSWORD ================= */}

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={"text"}
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  className={`w-full rounded-xl border bg-slate-900/60 px-4 py-3.5 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:ring-2 `}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>

              {/* Strength */}
              

              {/******************* Requirements *******************/}

              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ValidationIcon  />
                  At least 8 characters
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ValidationIcon  />
                  One uppercase letter
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ValidationIcon  />
                  One lowercase letter
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ValidationIcon />
                  One number
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ValidationIcon />
                  One special character
                </div>
              </div>
            </div>

            {/* ================= CONFIRM PASSWORD ================= */}

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Confirm password
              </label>

              <div className="relative">
                <input
                  
                  id="confirmPassword"
                  type={"text" }
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  className={`w-full rounded-xl border bg-slate-900/60 px-4 py-3.5 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:ring-2 `}
                  
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showConfirmPassword ? "🙈" : "👁"}
                </button>
              </div>

              
            </div>

            {/* ================= TERMS ================= */}

            <div>
              <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-400">
                <input
                  
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-white/10 bg-slate-900 text-indigo-500 focus:ring-indigo-500/30"
                  
                />


                <span>
                  I agree to the{" "}
                  <span
                    
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span 
                    
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    Privacy Policy
                  </span>
                  .
                </span>
              </label>

              
            </div>

            {/* ================= REGISTER BUTTON ================= */}

            <button
              type="submit"
            //   disabled={!isValid || isSubmitting}
              className={`w-full rounded-xl py-3.5 text-sm font-semibold text-white transition duration-200 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20 hover:scale-[1.01] hover:from-indigo-400 hover:to-purple-500 active:scale-[0.99]`}
            >
                Create Account
            </button>
          </form>

          {/* Login */}
          <div className="mt-7 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="font-semibold text-indigo-400 transition cursor-pointer hover:text-indigo-300"
            >
              Sign in
            </span>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-600">
          Your information is securely protected.
        </p>
      </div>
    </div>
  );
};

export default Register;