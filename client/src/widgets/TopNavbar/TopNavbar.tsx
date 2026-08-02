import { Bell, Search, PanelLeftClose } from "lucide-react";

type TopNavbarProps = {
    onToggleSidebar: () => void;
};

export function TopNavbar({ onToggleSidebar }: TopNavbarProps) {
    return (
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-zinc-200 bg-white px-8">

            {/* Left */}
            <div className="flex gap-5">
                <button
                    onClick={onToggleSidebar}
                    className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-lg
        border
        border-zinc-200
        transition
        hover:bg-zinc-100
    "
                >
                    <PanelLeftClose size={20} />
                </button>
                <div>
                    <h1 className="text-3xl font-bold text-zinc-900">
                        Dashboard
                    </h1>

                    <p className="mt-1 text-sm text-zinc-500">
                        Manage your links and profile.
                    </p>
                </div>
            </div>



            {/* Right */}

            <div className="flex items-center gap-5">

                {/* Search */}

                <button
                    className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-zinc-200
            text-zinc-500
            transition-all
            duration-200
            hover:border-orange-300
            hover:bg-orange-50
            hover:text-orange-500
          "
                >
                    <Search size={19} />
                </button>

                {/* Notification */}

                <button
                    className="
            relative
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-zinc-200
            text-zinc-500
            transition-all
            duration-200
            hover:border-orange-300
            hover:bg-orange-50
            hover:text-orange-500
          "
                >
                    <Bell size={19} />

                    <span
                        className="
              absolute
              -right-1
              -top-1
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-orange-500
              text-[11px]
              font-semibold
              text-white
            "
                    >
                        2
                    </span>
                </button>

                {/* Avatar */}

                <button
                    className="
            overflow-hidden
            rounded-full
            ring-2
            ring-orange-200
            transition-all
            duration-200
            hover:ring-orange-500
          "
                >
                    <img
                        src="https://i.pravatar.cc/150"
                        alt=""
                        className="h-11 w-11 object-cover"
                    />
                </button>

            </div>
        </header>
    );
}