import { ThemeCard } from "./ThemeCard";

export function ThemeStack() {
  return (
    <div className="absolute left-[185px] top-[135px]">

      {/* Card 1 */}
      <ThemeCard
        gradient="from-yellow-300 via-orange-300 to-orange-500"
        className="
        
          rotate-[8deg]
          translate-x-0
          translate-y-0
        "
      />

      {/* Card 2 */}
      <ThemeCard
        gradient="from-orange-300 via-orange-500 to-orange-600"
        className="
        
          rotate-[28deg]
          translate-x-8
          translate-y-10
        "
      />

      {/* Card 3 */}
      <ThemeCard
        gradient="from-pink-500 via-red-500 to-rose-600"
        className="
        
          rotate-[34deg]
          translate-x-12
          translate-y-18
        "
      />
    </div>
  );
}