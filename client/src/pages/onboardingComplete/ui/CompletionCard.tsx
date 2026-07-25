import {
  ArrowRight,
  Check,
  Eye,
  ExternalLink,
} from "lucide-react";

export function CompletionCard() {
  return (
    <div className="w-full max-w-xl">
      {/* Success Icon */}

      <div
        className="
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-[0_20px_50px_rgba(15,23,42,0.08)]
        "
      >
        <Check
          size={42}
          className="text-emerald-500"
          strokeWidth={3}
        />
      </div>

      {/* Heading */}

      <h1 className="mt-10 text-6xl font-black leading-tight text-slate-900">
        You're all set!{" "}
        <span className="inline-block">🎉</span>
      </h1>

      {/* Subtitle */}

      <p className="mt-5 text-xl leading-relaxed text-slate-500">
        Your profile is ready and your Orbfolio is now live.
      </p>

      {/* Profile Link Card */}

      <div
        className="
          mt-12
          flex
          items-center
          justify-between
          rounded-3xl
          border
          border-orange-100
          bg-orange-50
          p-5
          transition-all
          duration-300
          hover:border-orange-200
        "
      >
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100"
            alt="Avatar"
            className="h-16 w-16 rounded-2xl object-cover"
          />

          <div>
            <h3 className="font-bold text-slate-900">
              amansen.orbfolio.app
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Share your profile and start connecting!
            </p>
          </div>
        </div>

        <button
          className="
            rounded-xl
            p-3
            transition
            hover:bg-white
          "
        >
          <ExternalLink
            size={20}
            className="text-slate-600"
          />
        </button>
      </div>

      {/* Buttons */}

      <div className="mt-14 flex gap-5">
        <button
          type="button"
          className="
            flex
            h-14
            flex-1
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-slate-200
            bg-white
            font-semibold
            text-slate-700
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-slate-50
          "
        >
          <Eye size={20} />

          Preview Profile
        </button>

        <button
          type="button"
          className="
            flex
            h-14
            flex-1
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-orange-500
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-orange-600
          "
        >
          Go to Dashboard

          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}