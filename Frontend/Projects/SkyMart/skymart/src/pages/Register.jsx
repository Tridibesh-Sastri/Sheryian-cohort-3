import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { StoreContext } from "../context/StoreContext";

const Register = () => {
  const navigate = useNavigate();

  const { addUsers, users } = useContext(StoreContext);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // --------------------------------------------------
  // Watch React Hook Form values
  // --------------------------------------------------

  const name = watch("name", "");
  const email = watch("email", "");
  const contactNumber = watch("contactNumber", "");
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");
  const terms = watch("terms", false);

  // --------------------------------------------------
  // Validation
  // --------------------------------------------------

  const nameValid = /^[A-Za-z\s]{2,50}$/.test(name.trim());

  const emailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

  const contactValid = /^\d{10}$/.test(contactNumber);

  const passwordChecks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const passwordValid =
    Object.values(passwordChecks).every(Boolean);

  const passwordsMatch =
    password.length > 0 &&
    password === confirmPassword;

  const formValid =
    nameValid &&
    emailValid &&
    contactValid &&
    passwordValid &&
    passwordsMatch &&
    terms;

  // --------------------------------------------------
  // Password Strength
  // --------------------------------------------------

  const passwordStrength = useMemo(() => {
    if (!password) {
      return {
        score: 0,
        label: "",
      };
    }

    const score = Object.values(passwordChecks).filter(
      Boolean
    ).length;

    const labels = {
      1: "Very Weak",
      2: "Weak",
      3: "Medium",
      4: "Strong",
      5: "Very Strong",
    };

    return {
      score,
      label: labels[score],
    };
  }, [password]);

  // --------------------------------------------------
  // Submit
  // --------------------------------------------------

  const formSubmit = (data) => {
    console.log("Registration Data:", data);

    setIsLoading(true);

    try {
      /*
       * addUsers should handle adding the user
       * to StoreContext and localStorage.
       */
      addUsers(data);

      reset();

      // Navigate after successful registration
      // navigate("/auth/login");
      console.log("User registered successfully:", data);
      console.log("all users:", users);
    } catch (error) {
      console.error("Registration failed:", error);
    } 
    finally {
      setIsLoading(false);
    }
  };

  // --------------------------------------------------
  // Validation Icon
  // --------------------------------------------------

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
      {/* Background Decoration */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-blue-600/5 blur-3xl" />
      </div>

      {/* Register Container */}

      <div className="relative mx-auto w-full max-w-lg">
        <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-xl sm:p-9">

          {/* Header */}

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

          {/* Form */}

          <form
            onSubmit={handleSubmit(formSubmit)}
            className="space-y-5"
          >

            {/* Name */}

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Full name
              </label>

              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message:
                      "Name must contain at least 2 characters",
                  },
                  maxLength: {
                    value: 50,
                    message:
                      "Name cannot exceed 50 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message:
                      "Name can only contain letters and spaces",
                  },
                  validate: (value) =>
                    value.trim().length >= 2 ||
                    "Name cannot be blank",
                })}
                id="name"
                type="text"
                placeholder="John Doe"
                autoComplete="name"
                className={`w-full rounded-xl border bg-slate-900/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:ring-2 ${
                  name && !nameValid
                    ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                    : "border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20"
                }`}
              />

              {errors.name && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email address
              </label>

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message:
                      "Please enter a valid email",
                  },
                })}
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className={`w-full rounded-xl border bg-slate-900/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:ring-2 ${
                  email && !emailValid
                    ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                    : "border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20"
                }`}
              />

              {errors.email && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Contact Number */}

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="contactNumber"
                  className="text-sm font-medium text-slate-300"
                >
                  Contact number
                </label>

                <span
                  className={`text-xs ${
                    contactNumber.length === 10
                      ? "text-emerald-400"
                      : "text-slate-500"
                  }`}
                >
                  {contactNumber.length}/10
                </span>
              </div>

              <div className="flex">
                <span className="flex items-center rounded-l-xl border border-r-0 border-white/10 bg-slate-800/80 px-3 text-sm text-slate-400">
                  +91
                </span>

                <input
                  {...register("contactNumber", {
                    required: "Contact number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message:
                        "Contact number must contain exactly 10 digits",
                    },
                  })}
                  id="contactNumber"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="9876543210"
                  autoComplete="tel"
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);

                    setValue(
                      "contactNumber",
                      value,
                      {
                        shouldValidate: true,
                        shouldDirty: true,
                        shouldTouch: true,
                      }
                    );
                  }}
                  className={`w-full rounded-r-xl border bg-slate-900/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:ring-2 ${
                    contactNumber && !contactValid
                      ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                      : "border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20"
                  }`}
                />
              </div>

              {errors.contactNumber && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.contactNumber.message}
                </p>
              )}
            </div>

            {/* Password */}

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Password
              </label>

              <div className="relative">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message:
                        "Password must contain at least 8 characters",
                    },
                    validate: {
                      uppercase: (value) =>
                        /[A-Z]/.test(value) ||
                        "Password needs an uppercase letter",

                      lowercase: (value) =>
                        /[a-z]/.test(value) ||
                        "Password needs a lowercase letter",

                      number: (value) =>
                        /\d/.test(value) ||
                        "Password needs a number",

                      special: (value) =>
                        /[^A-Za-z0-9]/.test(value) ||
                        "Password needs a special character",
                    },
                  })}
                  id="password"
                  type={
                    showPassword ? "text" : "password"
                  }
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3.5 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      (prev) => !prev
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-300"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>

              {/* Password Strength */}

              {password && (
                <div className="mt-3">
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Password strength
                    </span>

                    <span
                      className={`text-xs font-medium ${
                        passwordStrength.score >= 4
                          ? "text-emerald-400"
                          : passwordStrength.score >= 3
                            ? "text-yellow-400"
                            : "text-red-400"
                      }`}
                    >
                      {passwordStrength.label}
                    </span>
                  </div>

                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(
                      (level) => (
                        <div
                          key={level}
                          className={`h-1.5 flex-1 rounded-full transition ${
                            level <=
                            passwordStrength.score
                              ? passwordStrength.score >= 4
                                ? "bg-emerald-500"
                                : passwordStrength.score >= 3
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                              : "bg-slate-700"
                          }`}
                        />
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Password Requirements */}

              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ValidationIcon
                    valid={passwordChecks.length}
                  />
                  At least 8 characters
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ValidationIcon
                    valid={passwordChecks.uppercase}
                  />
                  One uppercase letter
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ValidationIcon
                    valid={passwordChecks.lowercase}
                  />
                  One lowercase letter
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ValidationIcon
                    valid={passwordChecks.number}
                  />
                  One number
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ValidationIcon
                    valid={passwordChecks.special}
                  />
                  One special character
                </div>
              </div>

              {errors.password && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Confirm password
              </label>

              <div className="relative">
                <input
                  {...register("confirmPassword", {
                    required:
                      "Please confirm your password",
                    validate: (value) =>
                      value === password ||
                      "Passwords do not match",
                  })}
                  id="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  className={`w-full rounded-xl border bg-slate-900/60 px-4 py-3.5 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:ring-2 ${
                    confirmPassword &&
                    !passwordsMatch
                      ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                      : "border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20"
                  }`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      (prev) => !prev
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-300"
                >
                  {showConfirmPassword
                    ? "🙈"
                    : "👁"}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.confirmPassword.message}
                </p>
              )}

              {passwordsMatch && (
                <p className="mt-1.5 text-xs text-emerald-400">
                  ✓ Passwords match
                </p>
              )}
            </div>

            {/* Terms */}

            <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-400">
              <input
                {...register("terms", {
                  required:
                    "You must accept the Terms of Service and Privacy Policy",
                })}
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-white/10 bg-slate-900 text-indigo-500 focus:ring-indigo-500/30"
              />

              <span>
                I agree to the{" "}
                <a
                  href="/terms"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            {errors.terms && (
              <p className="text-xs text-red-400">
                {errors.terms.message}
              </p>
            )}

            {/* Register Button */}

            <button
              type="submit"
              disabled={!formValid || !isValid || isLoading}
              className={`w-full rounded-xl py-3.5 text-sm font-semibold text-white transition duration-200 ${
                formValid &&
                isValid &&
                !isLoading
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20 hover:scale-[1.01] hover:from-indigo-400 hover:to-purple-500 active:scale-[0.99]"
                  : "cursor-not-allowed bg-slate-700 text-slate-500"
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-500 border-t-white" />
                  Creating account...
                </span>
              ) : (
                "Create account"
              )}
            </button>
          </form>

          {/* Login Link */}

          <div className="mt-7 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() =>
                navigate("/auth/login")
              }
              className="font-semibold text-indigo-400 transition hover:text-indigo-300"
            >
              Sign in
            </button>
          </div>
        </div>

        {/* Footer */}

        <p className="mt-6 text-center text-xs text-slate-600">
          Your information is securely protected.
        </p>
      </div>
    </div>
  );
};

export default Register;





// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { StoreContext } from "../context/StoreContext";
// import { useContext } from "react";
// import { useNavigate } from "react-router";

// const Form = () => {

//   // const { addUsers } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const { addUsers } = useContext(StoreContext);
//   let {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     mode: "onChange"
//     // defaultValues: {
//     //   name: "Pandu",
//     //   email: "pandu@gmail.com",
//     // },
//   });

//   let formSubmit = (data) => {
//     console.log(data);
//     addUsers(data);
//     reset();
//     // setToggle((prev) => !prev);
//     navigate("/auth/login");
//   };

//   return (
//     <div className="flex flex-col items-center gap-3">
//       <h1 className="text-xl font-bold">Create user</h1>
//       <form
//         onSubmit={handleSubmit(formSubmit)}
//         className="w-90 flex flex-col bg-black text-white gap-3 p-4 rounded border-2 border-white "
//       >
//         <input
//           {...register("name", {
//             required: "Name is required",
//             pattern: {
//               value: /^\S.*$/,
//               message: "Blank spaces is not allowed",
//             },
//           })}
//           className="p-2 rounded outline-0 border border-white"
//           type="text"
//           placeholder="Name"
//         />
//         {errors.name && <p className="text-red-500">{errors.name.message}</p>}
//         <input
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//               message: "Please enter valid email",
//             },
//           })}
//           className="p-2 rounded outline-0 border border-white"
//           type="email"
//           placeholder="Email"
//         />
//         {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//         <input
//           {...register("mobile", {
//             required: "Mobile is required",
//             minLength: {
//               value: 10,
//               message: "Minimum 10 digits are required",
//             },
//             maxLength: {
//               value: 10,
//               message: "Maximum 10 digits are required",
//             },
//           })}
//           className="p-2 rounded outline-0 border border-white"
//           type="number"
//           placeholder="Mobile"
//         />
//         {errors.mobile && (
//           <p className="text-red-500">{errors.mobile.message}</p>
//         )}
//         <input
//           {...register("image", {
//             required: "Image is required",
//           })}
//           className="p-2 rounded outline-0 border border-white"
//           type="url"
//           placeholder="Image"
//         />
//         {errors.image && <p className="text-red-500">{errors.image.message}</p>}
//         <button className="text-white bg-blue-700 p-2 rounded-xl cursor-pointer">
//           Add user
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;
