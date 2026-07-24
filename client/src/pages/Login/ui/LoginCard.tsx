import { FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export function LoginCard() {
  return (
    <section className="flex justify-center lg:justify-end">
      <div className="w-full max-w-lg rounded-[32px] border border-gray-200/70 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
        <div>
          <p className="text-sm font-semibold text-orange-500">
            Welcome back 👋
          </p>

          <h2 className="mt-2 text-5xl font-bold tracking-tight text-slate-900">
            Log in to <span className="text-orange-500">Orbfolio</span>
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Enter your credentials to continue
          </p>
        </div>

        <form className="mt-6 space-y-6">
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-800">
              Email address
            </label>

            <div
              className="
      flex
      h-14
      items-center
      rounded-2xl
      border
      border-slate-200
      px-4
      transition-all
      duration-300
      focus-within:border-orange-500
      focus-within:ring-4
      focus-within:ring-orange-100
    "
            >
              <FiMail className="text-xl text-slate-400" />

              <input
                type="email"
                placeholder="you@example.com"
                className="ml-3 w-full bg-transparent outline-none"
              />
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <label className="text-sm font-semibold text-slate-800">
                Password
              </label>

              <button
                type="button"
                className="text-sm font-semibold text-orange-500 hover:text-orange-600"
              >
                Forgot?
              </button>
            </div>

            <div
              className="
      flex
      h-14
      items-center
      rounded-2xl
      border
      border-slate-200
      px-4
      transition-all
      duration-300
      focus-within:border-orange-500
      focus-within:ring-4
      focus-within:ring-orange-100
    "
            >
              <FiLock className="text-xl text-slate-400" />

              <input
                type="password"
                placeholder="Enter your password"
                className="ml-3 w-full bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between accent-orange-500">
            <label className="flex items-center gap-3 text-sm text-slate-700">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
              />

              Remember me
            </label>
          </div>

          <button className="h-14 w-full rounded-2xl bg-orange-500 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600">
            Log In
          </button>

          <div className="mt-1 mb-5 flex items-center">
            <div className="h-px flex-1 bg-slate-200" />

            <span className="mx-4 text-sm text-slate-400">
              or continue with
            </span>

            <div className="h-px flex-1 bg-slate-200" />
          </div>
          
          <button
            type="button"
            className="
    group
    flex
    h-14
    w-full
    items-center
    justify-center
    gap-3
    rounded-2xl
    border
    border-slate-200
    bg-white
    font-medium
    text-slate-700
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:border-orange-200
    hover:bg-orange-50/40
  "
          >
            <FcGoogle className="text-2xl" />

            Continue with Google
          </button>

          <button
            type="button"
            className="
    group
    mt-4
    flex
    h-14
    w-full
    items-center
    justify-center
    gap-3
    rounded-2xl
    border
    border-slate-200
    bg-white
    font-medium
    text-slate-700
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:border-slate-300
    hover:bg-slate-50
  "
          >
            <FaGithub className="text-xl" />

            Continue with GitHub
          </button>

          <p className="mt-8 text-center text-slate-500">
            Don't have an account?{" "}
            <button
              type="button"
              className="font-semibold text-orange-500 transition-colors hover:text-orange-600"
            >
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}