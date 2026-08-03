import {
  GripVertical,
  Pencil,
  Copy,
  Trash2,
  MoreHorizontal,
  BarChart3,
  
} from "lucide-react";
import type { ReactNode } from "react";


type LinkItemProps = {
  id: string,
  title: string,
  url: string,
  clicks: number,
  enabled: boolean,
  icon: ReactNode,
  background: string
}

export function LinkItem({ id, title, url, clicks,enabled, icon, background }: LinkItemProps) {
  return (
    <div
      className="
        mt-3
        mb-3
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-zinc-200
        bg-white
        px-3
        py-3
        shadow-sm
        transition-all
        duration-200
        hover:border-orange-200
        hover:shadow-md
      "
    >
      {/* Left */}

      <div className="flex items-center gap-5">

        {/* Drag */}

        <button className="text-zinc-400 hover:text-zinc-700">
          <GripVertical size={20} />
        </button>

        {/* Platform Icon */}

        <div
          className={`
            flex
            h-13
            w-13
            items-center
            justify-center
            rounded-2xl
            ${background}
          `}
        >
          {icon}
        </div>

        {/* Details */}

        <div>

          <h3 className="text-lg font-semibold text-zinc-900">
            {title}
          </h3>

          <p className="mt-1 text-sm text-zinc-500">
            {url}
          </p>

          <div className="mt-3 flex items-center gap-5">

            {/* Clicks */}

            <div className="flex items-center gap-2 text-sm text-zinc-500">

              <BarChart3 size={15} />

              <span>{clicks} clicks</span>

            </div>

            {/* Status */}

            <span
              className="
                rounded-full
                bg-green-100
                px-3
                py-1
                text-xs
                font-semibold
                text-green-600
              "
            >
              ● {status}
            </span>

          </div>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Toggle */}

        <label className="relative inline-flex cursor-pointer items-center">

          <input
            type="checkbox"
            checked={enabled}
            readOnly
            className="peer sr-only"
          />

          <div
            className="
              h-7
              w-12
              rounded-full
              bg-zinc-300
              transition-all

              peer-checked:bg-orange-500

              after:absolute
              after:left-[2px]
              after:top-[2px]
              after:h-6
              after:w-6
              after:rounded-full
              after:bg-white
              after:transition-all

              peer-checked:after:translate-x-5
            "
          />

        </label>

        {/* Actions */}

        <div className="flex items-center gap-2">

          <button
            className="
              rounded-xl
              border
              border-zinc-200
              p-3
              transition
              hover:border-orange-200
              hover:bg-orange-50
            "
          >
            <Pencil size={18} />
          </button>

          <button
            className="
              rounded-xl
              border
              border-zinc-200
              p-3
              transition
              hover:border-orange-200
              hover:bg-orange-50
            "
          >
            <Copy size={18} />
          </button>

          <button
            className="
              rounded-xl
              border
              border-zinc-200
              p-3
              text-red-500
              transition
              hover:border-red-200
              hover:bg-red-50
            "
          >
            <Trash2 size={18} />
          </button>

          <button
            className="
              rounded-xl
              border
              border-zinc-200
              p-3
              transition
              hover:border-orange-200
              hover:bg-orange-50
            "
          >
            <MoreHorizontal size={18} />
          </button>

        </div>

      </div>
    </div>
  );
}