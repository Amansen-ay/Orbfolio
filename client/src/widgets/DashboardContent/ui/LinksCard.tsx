import { Plus } from "lucide-react";
import { LinkItem } from "./LinkItem";

const links = [
  {
    id: 1,
    title: "Twitter",
    url: "https://twitter.com/amansen",
    icon: "𝕏",
    enabled: true,
  },
  {
    id: 2,
    title: "Instagram",
    url: "https://instagram.com/amansen",
    icon: "📸",
    enabled: true,
  },
  {
    id: 3,
    title: "YouTube",
    url: "https://youtube.com/@amansen",
    icon: "▶",
    enabled: true,
  },
  {
    id: 4,
    title: "GitHub",
    url: "https://github.com/amansen",
    icon: "GH",
    enabled: true,
  },
];

export function LinksCard() {
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
      {/* Header */}

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-2xl font-bold text-zinc-900">
            Links
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Manage and organize the links on your page.
          </p>

        </div>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-md
            bg-orange-500
            px-5
            py-3
            font-medium
            text-white
            transition
            hover:bg-orange-600
          "
        >
          <Plus size={18} />

          Add New Link
        </button>

      </div>

      {/* Links */}

      <div className="mt-6 flex flex-col gap-3">

        {links.map((link) => (
          <LinkItem
            key={link.id}
            link={link}
          />
        ))}

      </div>

      {/* Footer */}

      <button
        className="
          mt-6
          w-full
          text-center
          font-semibold
          text-orange-500
          transition
          hover:text-orange-600
        "
      >
        View All Links →
      </button>

    </section>
  );
}