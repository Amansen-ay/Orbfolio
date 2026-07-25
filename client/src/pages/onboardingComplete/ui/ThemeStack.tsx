import { ThemeCard } from "@/pages/Login/ui/ThemeCard";

export function ThemeStack() {
  return (
    <div className="relative h-[420px] w-[320px]">
      {/* Card 1 */}

      <ThemeCard
        gradient="from-yellow-300 via-orange-300 to-orange-500"
        className="
          z-40
          rotate-[6deg]
          translate-x-0
          translate-y-0
        "
      />

      {/* Card 2 */}

      <ThemeCard
        gradient="from-orange-300 via-orange-500 to-red-500"
        className="
          z-30
          rotate-[16deg]
          translate-x-8
          translate-y-6
        "
      />

      {/* Card 3 */}

      <ThemeCard
        gradient="from-pink-400 via-rose-500 to-red-600"
        className="
          z-20
          rotate-[26deg]
          translate-x-16
          translate-y-12
        "
      />

      {/* Card 4 */}

      <ThemeCard
        gradient="from-indigo-400 via-violet-500 to-purple-600"
        className="
          z-10
          rotate-[36deg]
          translate-x-24
          translate-y-20
        "
      />
    </div>
  );
}