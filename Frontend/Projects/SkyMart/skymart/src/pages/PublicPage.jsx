import React from "react";
import { Link } from "react-router";
import Nav from "../components/Nav";
// import Home from "../components/Home";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ================= NAVBAR ================= */}

      <Nav/>


      {/* ================= HERO ================= */}

      {/* <Home /> */}

      <main>

        <section className="relative overflow-hidden">

          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

            <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

            <div className="absolute -right-40 top-60 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-24 text-center sm:px-6 sm:pt-32 lg:px-8 lg:pt-40">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              Everything you need in one place
            </div>

            {/* Heading */}
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Build something
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                amazing.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              A modern platform designed to help you manage your
              work, discover new possibilities, and get more done
              from a single place.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                to="/auth/register"
                className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-7 py-3.5 text-sm font-semibold shadow-xl shadow-indigo-500/20 transition hover:scale-[1.02] hover:from-indigo-400 hover:to-purple-500 sm:w-auto"
              >
                Create free account
              </Link>

              <Link
                to="/auth/login"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.08] sm:w-auto"
              >
                Sign in
              </Link>

            </div>

          </div>
        </section>


        {/* ================= FEATURES ================= */}

        <section className="border-t border-white/10 bg-slate-900/30">

          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">

              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
                Features
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything in one place
              </h2>

              <p className="mt-4 text-slate-400">
                Designed with simplicity, speed, and a great user
                experience in mind.
              </p>

            </div>


            {/* Feature cards */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">

              {/* Feature 1 */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.06]">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m6 2.25a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                </div>

                <h3 className="text-lg font-semibold">
                  Simple to use
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  A clean interface that keeps everything simple
                  and easy to understand.
                </p>

              </div>


              {/* Feature 2 */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.06]">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
                    />
                  </svg>

                </div>

                <h3 className="text-lg font-semibold">
                  Fast & responsive
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Built for speed with a responsive experience
                  across desktop, tablet, and mobile.
                </p>

              </div>


              {/* Feature 3 */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.06]">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 0 0-9 0v3.75m-.75 0h10.5a2.25 2.25 0 0 1 2.25 2.25v6a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25v-6a2.25 2.25 0 0 1 2.25-2.25Z"
                    />
                  </svg>

                </div>

                <h3 className="text-lg font-semibold">
                  Secure
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Your account and personal information are
                  protected with secure authentication.
                </p>

              </div>

            </div>
          </div>
        </section>


        {/* ================= CTA ================= */}

        <section className="border-t border-white/10">

          <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">

            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to get started?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Create your account today and start exploring
              everything the platform has to offer.
            </p>

            <Link
              to="/auth/register"
              className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-7 py-3.5 text-sm font-semibold shadow-xl shadow-indigo-500/20 transition hover:scale-[1.02]"
            >
              Create your account
            </Link>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">

          <p>
            © {new Date().getFullYear()} AppName. All rights reserved.
          </p>

          <div className="flex gap-5">

            <Link
              to="/auth/login"
              className="transition hover:text-slate-300"
            >
              Login
            </Link>

            <Link
              to="/auth/register"
              className="transition hover:text-slate-300"
            >
              Register
            </Link>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default LandingPage;