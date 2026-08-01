import {
    LayoutDashboard,
    Link2,
    Palette,
    User,
    BarChart3,
    Settings,
    ChevronDown,
} from "lucide-react";

const navigation = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "My Links",
        icon: Link2,
    },
    {
        label: "Appearance",
        icon: Palette,
    },
    {
        label: "Profile",
        icon: User,
    },
    {
        label: "Analytics",
        icon: BarChart3,
    },
    {
        label: "Settings",
        icon: Settings,
    },
];

export function Sidebar() {
    return (
        <aside className="flex h-screen w-50 flex-col bg-zinc-900 px-4 py-6">

            {/* Logo */}

            <div className="px-2">
                <h1 className="text-3xl font-black tracking-tight">
                    <span className="text-white">Orb</span>
                    <span className="text-orange-500">folio</span>
                </h1>
            </div>

            {/* Navigation */}

            <nav className="mt-5 flex flex-1 flex-col gap-2">

                {navigation.map(({ label, icon: Icon }, index) => (
                    <button
                        key={label}
                        className={`
              flex
              h-10
              items-center
              gap-3
              rounded-xl
              px-3
              text-left
              transition-all
              duration-200
              hover:bg-zinc-800
              hover:text-white

              ${index === 0
                                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                                : "text-zinc-300"
                            }
            `}
                    >
                        <Icon size={20} />

                        <span className="font-medium">
                            {label}
                        </span>
                    </button>
                ))}

            </nav>

            {/* Profile */}

            <button
                className="
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-800
          p-3
          transition-all
          duration-200
          hover:bg-zinc-700
        "
            >

                <div className="flex min-w-0 items-center gap-3">

                    <img
                        src="https://i.pravatar.cc/100"
                        alt=""
                        className="h-10 w-10 rounded-full object-cover"
                    />

                    <div className="min-w-0 flex-1 text-left">

                        <p className="truncate text-sm font-semibold text-white">
                            Aman sen
                        </p>

                        <p className="truncate text-sm text-zinc-400">
                            @amansen
                        </p>

                    </div>

                </div>

                <ChevronDown
                    size={18}
                    className="text-zinc-400"
                />

            </button>

        </aside>
    );
}