import {
  GripVertical,
  Pencil,
  Trash2,
} from "lucide-react";

type LinkItemProps = {
  link: {
    title: string;
    url: string;
    icon: string;
    enabled: boolean;
  };
};

export function LinkItem({ link }: LinkItemProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-lg
        border
        border-zinc-200
        bg-white
        px-3
        py-2    
        transition-all
        duration-200
        hover:border-orange-200
        hover:shadow-sm
        
      "
    >
      {/* Left */}

      <div className="flex items-center gap-4">

        {/* Drag */}

        <button
          className="
            text-zinc-400
            transition
            hover:text-orange-500
            cursor-grab
          "
        >
          <GripVertical size={18} />
        </button>

        {/* Icon */}

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-zinc-100
            text-lg
            font-semibold
          "
        >
          {link.icon}
        </div>

        {/* Info */}

        <div>

          <h3 className="font-semibold text-zinc-900">
            {link.title}
          </h3>

          <p className="text-sm text-zinc-500">
            {link.url}
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-3">

        {/* Toggle */}

        <button
          className={`
            relative
            h-6
            w-11
            rounded-full
            transition
            ${
              link.enabled
                ? "bg-orange-500"
                : "bg-zinc-300"
            }
          `}
        >
          <span
            className={`
              absolute
              top-0.5
              h-5
              w-5
              rounded-full
              bg-white
              transition
              ${
                link.enabled
                  ? "left-[22px]"
                  : "left-0.5"
              }
            `}
          />
        </button>

        {/* Edit */}

        <button
          className="
            rounded-lg
            p-2
            text-zinc-500
            transition
            hover:bg-orange-50
            hover:text-orange-500
          "
        >
          <Pencil size={18} />
        </button>

        {/* Delete */}

        <button
          className="
            rounded-lg
            p-2
            text-zinc-500
            transition
            hover:bg-red-50
            hover:text-red-500
          "
        >
          <Trash2 size={18} />
        </button>

      </div>
    </div>
  );
}