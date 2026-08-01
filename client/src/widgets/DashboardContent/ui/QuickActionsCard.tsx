import {
  Palette,
  Globe,
  QrCode,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Appearance",
    description: "Customize your page with beautiful themes.",
    action: "Customize",
    icon: Palette,
  },
  {
    title: "Domains",
    description: "Connect a custom domain to your profile.",
    action: "Manage",
    icon: Globe,
  },
  {
    title: "QR Code",
    description: "Share your page anywhere, anytime.",
    action: "View QR",
    icon: QrCode,
  },
  {
    title: "Analytics",
    description: "Track visitors and engagement.",
    action: "View Analytics",
    icon: BarChart3,
  },
];

export function QuickActionsCard() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {actions.map(({ title, description, action, icon: Icon }) => (
        <button
          key={title}
          className="
            group
            flex
            h-40
            flex-col
            rounded-2xl
            border
            border-zinc-200
            bg-white
            p-3
            text-left
            shadow-sm
            transition-all
            duration-200
            hover:-translate-y-1
            hover:border-orange-300
            hover:shadow-md
          "
        >
          {/* Icon */}

          <div
            className="
              mb-3
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              bg-orange-50
              text-orange-500
            "
          >
            <Icon size={18} />
          </div>

          {/* Title */}

          <h3 className="text-[15px] font-semibold text-zinc-900">
            {title}
          </h3>

          {/* Description */}

          <p className="mt-1 text-xs leading-5 text-zinc-500">
            {description}
          </p>

          {/* CTA */}

          <div
            className="
              mt-auto
              flex
              items-center
              gap-1.5
              text-xs
              font-semibold
              text-orange-500
            "
          >
            {action}

            <ArrowRight
              size={14}
              className="
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            />
          </div>
        </button>
      ))}
    </div>
  );
}