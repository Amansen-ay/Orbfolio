import {
  LayoutDashboard,
  Link2,
  Palette,
  User,
  BarChart3,
  Settings,
  ChevronDown,
} from "lucide-react";
import {useNavigate} from 'react-router-dom';

const navigation = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    url:'/dashboard'
  },
  {
    label: "My Links",
    icon: Link2,
    url:'/mylinks'
  },
  {
    label: "Appearance",
    icon: Palette,
    url:'/appearance'
  },
  {
    label: "Profile",
    icon: User,
    url:'/profile'
  },
  {
    label: "Analytics",
    icon: BarChart3,
    url:'/analytics'
  },
  {
    label: "Settings",
    icon: Settings,
    url:'/analytics'
  },
];

type SidebarProps = {
  isOpen: boolean;
};

export function Sidebar({ isOpen }: SidebarProps) {
    const navigate = useNavigate();
  return (
    <aside
      className={`
        flex
        sticky
        top-0
        h-screen
        flex-col
        bg-zinc-900
        py-6
        transition-all
        duration-300
        ease-in-out
        ${isOpen ? "w-56 px-4" : "w-20 px-2"}
      `}
    >
      {/* Logo */}

      <div
        className={`
          flex
          items-center
          ${isOpen ? "justify-start px-2" : "justify-center"}
        `}
      >
        <h1 className="text-3xl font-black tracking-tight whitespace-nowrap">
          <span className="text-white">Orb</span>

          {isOpen && (
            <span className="text-orange-500">folio</span>
          )}
        </h1>
      </div>

      {/* Navigation */}

      <nav className="mt-6 flex flex-1 flex-col gap-2">
        {navigation.map(({ label, icon: Icon ,url}, index) => (
          <button
            key={label}
            className={`
              flex
              h-11
              items-center
              rounded-xl
              transition-all
              duration-300

              ${
                isOpen
                  ? "justify-start gap-3 px-3"
                  : "justify-center"
              }

              ${
                index === 0
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
              }
            `}
            onClick={()=>navigate(url)}
          >
            <Icon size={20} />

            {isOpen && (
              <span className="font-medium whitespace-nowrap">
                {label}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Profile */}

      <button
        className="
          flex
          items-center
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-800
          p-3
          transition-all
          duration-300
          hover:bg-zinc-700
        "
      >
        <img
          src="https://i.pravatar.cc/100"
          alt=""
          className="h-10 w-10 rounded-full object-cover"
        />

        {isOpen && (
          <>
            <div className="ml-3 min-w-0 flex-1 text-left">
              <p className="truncate text-sm font-semibold text-white">
                Aman Sen
              </p>

              <p className="truncate text-sm text-zinc-400">
                @amansen
              </p>
            </div>

            <ChevronDown
              size={18}
              className="text-zinc-400"
            />
          </>
        )}
      </button>
    </aside>
  );
}