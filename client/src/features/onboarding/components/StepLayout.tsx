type StepLayoutProps = {
    left:React.ReactNode,
    children: React.ReactNode;
};

export function StepLayout({ left,children }: StepLayoutProps) {
    return (
        <main
            className="
        min-h-screen
        bg-gradient-to-br
        from-orange-100
        via-white
        to-orange-50
        px-6
        py-10
      "
        >
            <div
                className="
          mx-auto
          flex
          min-h-[700px]
          max-w-7xl
          overflow-hidden
          rounded-[32px]
          border
          border-slate-200
          bg-white
          shadow-[0_30px_80px_rgba(15,23,42,0.08)]
        "
            >
                {/* Left Side */}

                <div
                    className="
    w-[42%]
    border-r
    border-slate-100
    bg-gradient-to-br
    from-orange-50
    to-white
  "
                >
                    {left}
                </div>

                {/* Right Side */}

                <div
                    className="
            flex
            flex-1
            items-center
            justify-center
            px-20
          "
                >
                    {children}
                </div>

            </div>

        </main>
    );
}