import { ArrowLeft, ArrowRight, LockKeyhole } from "lucide-react";
import { PreviewPhone } from "./ui/PreviewPhone";

export function ProfilePreviewPage() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-orange-50
        via-white
        to-orange-100
      "
    >
      {/* Header */}

      <header className="flex items-center justify-between px-12 py-7">
        <h1 className="text-2xl font-black text-slate-900">
          <span className="text-orange-500">O</span>rbfolio
        </h1>

        <button
          type="button"
          className="
            flex items-center gap-2
            rounded-2xl border border-slate-200
            bg-white px-5 py-3
            font-semibold text-slate-700
            shadow-sm transition
            hover:-translate-y-0.5
            hover:bg-slate-50
          "
        >
          <ArrowLeft size={18} />
          Back to Setup
        </button>
      </header>

      {/* Main content */}

      <section
        className="
          mx-auto
          grid
          min-h-[760px]
          max-w-7xl
          grid-cols-[1fr_480px_1fr]
          items-center
          gap-10
          px-10
          pb-10
        "
      >
        {/* Left information */}

        <div className="mb-25 max-w-sm">
          <p className="font-bold uppercase tracking-[0.15em] text-orange-500">
            Profile Preview
          </p>

          <h2 className="mt-5 text-5xl font-black leading-[1.08] text-slate-900">
            This is how your profile{" "}
            <span className="text-orange-500">looks!</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            This is how others will see your Orbfolio when you share your
            profile.
          </p>

          {/* Preview notice */}

          <div
            className="
              mt-10
              flex items-center gap-4
              rounded-2xl
              border border-orange-100
              bg-white/80
              p-4
              shadow-sm
            "
          >
            <div
              className="
                flex h-12 w-12 shrink-0
                items-center justify-center
                rounded-xl bg-orange-100
                text-orange-500
              "
            >
              <LockKeyhole size={22} />
            </div>

            <div>
              <p className="font-semibold text-slate-900">
                This is a preview
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Your profile is ready for you to customise.
              </p>
            </div>
          </div>
        </div>

        {/* Phone */}

        <div className="mt-[-100px] relative flex justify-center">
          {/* Decorative glow */}

          <div
            className="
              absolute
              top-1/2
              h-[500px]
              w-[500px]
              -translate-y-1/2
              rounded-full
              bg-orange-200/40
              blur-[100px]
            "
          />

          {/* Floating dots */}

          <div className="absolute -left-10 top-20 h-4 w-4 rounded-full bg-orange-400 bg-gradient-to-br from-yellow-300 to-orange-500 shadow-lg float-fast" />
          <div className="absolute -right-40 top-40 h-3 w-3 rounded-full bg-blue-400 bg-gradient-to-br from-purple-300 to-blue-500 shadow-lg float-medium" />
          <div className="absolute -left-5 bottom-82 h-3 w-3 rounded-full bg-pink-400 bg-gradient-to-br from-red-300 to-pink-500 shadow-lg float-fast" />
          <div className="absolute -right-20 bottom-20 h-4 w-4 rounded-full bg-orange-400 bg-gradient-to-br from-yellow-300 to-orange-500 shadow-lg float-fast" />

          <PreviewPhone />
        </div>

        {/* Right decorative area */}

        <div className="relative h-[600px]">
          <div
            className="
              absolute
              right-80 top-6
              h-[360px] w-[220px]
              rotate-[18deg]
              rounded-[32px]
              bg-gradient-to-br
              from-yellow-300
              to-orange-400
              shadow-xl
            "
          />

          <div
            className="
              absolute
              right-80 top-20
              h-[360px] w-[220px]
              rotate-[28deg]
              rounded-[32px]
              bg-gradient-to-br
              from-orange-400
              to-rose-500
              shadow-xl
            "
          />

          <div
            className="
              absolute
              right-90 top-32
              h-[360px] w-[220px]
              rotate-[28deg]
              rounded-[32px]
              bg-gradient-to-br
              from-pink-500
              to-violet-600
              shadow-xl
            "
          />
        </div>
      </section>

      {/* Bottom actions */}

      <div className="mt-[-45px] mx-auto flex max-w-7xl items-center justify-between px-10 pb-10">
        <button
          type="button"
          className="
            flex h-14 items-center gap-3
            rounded-2xl border border-slate-200
            bg-white px-7
            font-semibold text-slate-700
            transition
            hover:-translate-y-0.5
            hover:bg-slate-50
          "
        >
          <ArrowLeft size={19} />
          Back to Setup
        </button>

        <button
          type="button"
          className="
            flex h-14 items-center gap-3
            rounded-2xl
            bg-orange-500 px-8
            font-semibold text-white
            shadow-lg shadow-orange-200
            transition
            hover:-translate-y-0.5
            hover:bg-orange-600
          "
        >
          Go to Dashboard
          <ArrowRight size={19} />
        </button>
      </div>
    </main>
  );
}