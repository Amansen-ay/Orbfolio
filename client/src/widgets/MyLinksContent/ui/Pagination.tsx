import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export function PaginationFooter() {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-sm">

      {/* Left */}

      <p className="text-sm font-medium text-zinc-500">
        Showing <span className="font-semibold text-zinc-900">1</span> to{" "}
        <span className="font-semibold text-zinc-900">5</span> of{" "}
        <span className="font-semibold text-zinc-900">12</span> links
      </p>

      {/* Pagination */}

      <div className="flex items-center gap-3">

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
            text-zinc-500
            transition
            hover:bg-zinc-100
          "
        >
          <ChevronLeft size={18} />
        </button>

        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              text-sm
              font-semibold
              transition

              ${
                page === 1
                  ? "border-orange-500 bg-orange-500 text-white"
                  : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100"
              }
            `}
          >
            {page}
          </button>
        ))}

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
            text-zinc-500
            transition
            hover:bg-zinc-100
          "
        >
          <ChevronRight size={18} />
        </button>

      </div>

      {/* Page Size */}

      <div className="flex items-center gap-3">

        <span className="text-sm font-medium text-zinc-500">
          Show
        </span>

        <button
          className="
            flex
            h-10
            w-20
            items-center
            justify-between
            rounded-xl
            border
            border-zinc-200
            bg-white
            px-4
            text-sm
            font-medium
            text-zinc-700
            transition
            hover:bg-zinc-50
          "
        >
          5

          <ChevronDown size={16} />
        </button>

      </div>

    </div>
  );
}