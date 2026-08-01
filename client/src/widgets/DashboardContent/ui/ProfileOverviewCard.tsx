import {
  Globe,
  Copy,
  ExternalLink,
  MoreHorizontal,
} from "lucide-react";

export function ProfileOverviewCard() {
  return (
    <section
      className="
        rounded-lg
        border
        border-zinc-200
        bg-white
        p-5
        shadow-sm
      "
    >
      {/* Top */}

      <div className="flex items-start justify-between">

        {/* Left */}

        <div>

          <h2 className="text-2xl font-bold text-zinc-900">
            Your Profile
          </h2>

          <div className="mt-3 flex items-center gap-3">

            <Globe
              size={18}
              className="text-orange-500"
            />

            <span className="text-md font-semibold text-orange-500">
              orbfolio.com/amansen
            </span>

            <button
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-zinc-200
                transition
                hover:border-orange-300
                hover:bg-orange-50
              "
            >
              <Copy size={17} />
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          <button
            className="
              flex
              items-center
              gap-2
              rounded-md
              border
              h-10
              border-orange-500
              px-3
              py-3
              font-medium
              text-orange-500
              transition
              hover:bg-orange-500
              hover:text-white
            "
          >
            View My Page

            <ExternalLink size={17} />
          </button>

          <button
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-zinc-200
              transition
              hover:bg-zinc-100
            "
          >
            <MoreHorizontal size={18} />
          </button>

        </div>

      </div>

      {/* Bottom */}

      <div className="mt-3 flex items-center gap-3">

        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            bg-green-100
            px-3
            py-1.5
          "
        >
          <div className="h-2.5 w-2.5 rounded-full bg-green-500" />

          <span className="text-sm font-medium text-green-700">
            Live
          </span>
        </div>

        <p className="text-sm text-zinc-500">
          Your page is live and accessible.
        </p>

      </div>

    </section>
  );
}