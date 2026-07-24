type ThemeCardProps = {
  className?: string;
  gradient: string;
};

export function ThemeCard({
  className = "",
  gradient,
}: ThemeCardProps) {
  return (
    <div
      className={`absolute h-[270px] w-[170px] rounded-[34px] bg-gradient-to-br ${gradient} shadow-[0_25px_60px_rgba(15,23,42,0.18)] ${className}`}
    >
      {/* Fake Theme Preview */}

      <div className="flex h-full flex-col p-5">
        {/* Profile */}

        <div className="mx-auto h-14 w-14 rounded-full bg-white/90" />

        <div className="mx-auto mt-4 h-3 w-24 rounded-full bg-white/90" />

        <div className="mx-auto mt-2 h-2 w-16 rounded-full bg-white/70" />

        {/* Divider */}

        <div className="mt-5 h-px bg-white/30" />

        {/* Fake Links */}

        <div className="mt-5 space-y-3">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl bg-white/15 px-3 py-2 backdrop-blur-sm"
            >
              <div className="h-3 w-3 rounded-full bg-white/90" />

              <div className="h-2 flex-1 rounded-full bg-white/80" />
            </div>
          ))}
        </div>

        {/* Footer */}

        <div className="mt-auto">
          <div className="h-px bg-white/30" />

          <div className="mx-auto mt-4 h-2 w-20 rounded-full bg-white/70" />
        </div>
      </div>
    </div>
  );
}