export function LoginCard() {
  return (
    <section className="flex justify-center lg:justify-end">
      <div className="w-full max-w-lg rounded-[32px] border border-gray-200/70 bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
        <h2 className="text-5xl font-bold tracking-tight text-slate-900">
          Welcome back
        </h2>

        <p className="mt-3 text-lg text-slate-500">
          Log in to continue managing your profile.
        </p>

        <form className="mt-10 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <button className="h-14 w-full rounded-2xl bg-orange-500 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600">
            Log In
          </button>
        </form>
      </div>
    </section>
  );
}