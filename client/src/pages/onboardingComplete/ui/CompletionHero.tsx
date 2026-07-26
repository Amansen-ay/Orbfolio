import { ThemeStack } from "./ThemeStack";
import { ProfilePreview } from "./ProfilePreview";


export function CompletionHero() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden">
      {/* Background Glow */}

      <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange-300/30 blur-[120px]" />

      {/* Floating Dots */}

      <div className="absolute left-14 top-16 h-2.5 w-2.5 rounded-full bg-orange-400 bg-gradient-to-br from-yellow-300 to-orange-500 float-fast" /> 
   

      <div className="absolute right-20 top-28 h-3.5 w-3.5 rounded-full bg-blue-400 bg-gradient-to-br from-purple-300 to-blue-500 float-medium" />

      <div className="absolute left-10 bottom-32 h-3.5 w-3.5 rounded-full bg-pink-400 bg-gradient-to-br from-red-300 to-pink-500 float-slow" />

      <div className="absolute right-14 bottom-20 h-2.5 w-2.5 rounded-full bg-orange-400 bg-gradient-to-br from-yellow-300 to-orange-500 float-fast" />

      <div className="absolute left-1/2 top-12 h-2 w-2 rounded-full bg-slate-400" />

      {/* Theme Cards */}

      <div className="absolute right-8 top-1/2 -translate-y-1/2 scale-[0.95]">
        <ThemeStack />
      </div>

      {/* Profile Card */}

      <div className="relative z-20 scale-[0.92]">
        <ProfilePreview />
      </div>
    </div>
  );
}



