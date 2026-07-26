import { PreviewProfile } from "./PreviewProfile";

export function PreviewPhone() {
  return (
    <div
      className="
        relative
        z-20
        h-[620px]
        w-[360px]
        overflow-hidden
        rounded-[58px]
        border-[9px]
        border-slate-900
        bg-white
        shadow-[0_40px_100px_rgba(15,23,42,0.22)]
      "
    >
      {/* Dynamic Island */}

      <div
        className="
          absolute
          left-1/2
          top-4
          z-30
          h-7
          w-28
          -translate-x-1/2
          rounded-full
          bg-slate-900
        "
      />

      {/* Profile */}

      <div className="h-full overflow-y-auto px-6 pb-10 pt-16">
        <PreviewProfile />
      </div>
    </div>
  );
}