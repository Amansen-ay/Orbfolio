import { PhoneProfile } from './PhoneProfile';
import { ThemeStack } from "./ThemeStack";
export function PhoneMockup() {
  return (
    <div className="relative mt-38 z-50 h-[560px] w-[500px] ">
      {/* Theme Cards */}

      <ThemeStack />
      {/* Floating Dot - Top Right */}

      <div
        className="
    absolute
    top-[-40px]
    left-[370px]
    h-4
    w-4
    rounded-full
    bg-gradient-to-br
    from-yellow-300
    to-orange-500
    shadow-[0_0_18px_rgba(251,146,60,0.6)]
    float-fast
  "
      />

      <div
        className="
    absolute
    top-[130px]
    left-[470px]
    h-4
    w-4
    rounded-full
    bg-gradient-to-br
    from-yellow-300
    to-orange-500
    shadow-[0_0_18px_rgba(251,146,60,0.6)]
    float-fast
  "
      />

      {/* Floating Dot - Middle */}

      <div
        className="
    absolute
    top-[390px]
    left-[390px]
    h-3
    w-3
    rounded-full
    bg-gradient-to-br
    from-yellow-300
    to-orange-500
    shadow-[0_0_14px_rgba(251,146,60,0.6)]
    float-medium
  "
      />

      {/* Floating Dot - Bottom */}

      <div
        className="
    absolute
    top-[510px]
    left-[470px]
    h-5
    w-5
    rounded-full
    bg-gradient-to-br
    from-yellow-300
    to-orange-500
    shadow-[0_0_20px_rgba(251,146,60,0.7)]
    float-slow
  "
      />

      

      {/* Phone */}
      <div
        className="
          absolute
          left-0
          top-0
          h-[580px]
          w-[300px]
          overflow-hidden
          rounded-[52px]
          border-[8px]
          border-slate-900
          bg-white
          shadow-[0_40px_80px_rgba(15,23,42,0.15)]
        "
      >
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-3 h-5 w-28 -translate-x-1/2 rounded-full bg-slate-900" />

        {/* Placeholder Content */}
        <PhoneProfile />
      </div>
    </div>
  );
}