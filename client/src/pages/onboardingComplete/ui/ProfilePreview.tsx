export function ProfilePreview() {
  return (
    <div
      className="
        relative
        w-[310px]
        rounded-[34px]
        border
        border-slate-200
        bg-white
        p-8
        shadow-[0_35px_80px_rgba(15,23,42,0.12)]
      "
    >
      {/* Avatar */}

      <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-orange-200">
        <img
          src="https://i.pravatar.cc/200"
          alt="Profile"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Name */}

      <h2 className="mt-5 text-center text-2xl font-bold text-slate-900">
        Aman Sen
      </h2>

      {/* Username */}

      <p className="mt-1 text-center text-sm font-medium text-orange-500">
        @amansen
      </p>

      {/* Bio */}

      <p className="mt-6 text-center text-sm leading-7 text-slate-500">
        Full Stack Developer passionate about building beautiful digital
        experiences and modern web applications.
      </p>

      {/* Divider */}

      <div className="my-8 h-px bg-slate-100" />

      {/* Location */}

      <div className="flex items-center justify-center gap-2">
        <span className="text-lg">📍</span>

        <span className="text-sm text-slate-600">
          Uttar Pradesh, India
        </span>
      </div>

      {/* Links */}

      <div className="mt-8 space-y-3">
        <button
          className="
            h-12
            w-full
            rounded-2xl
            bg-orange-500
            font-medium
            text-white
          "
        >
          Portfolio
        </button>

        <button
          className="
            h-12
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-white
            font-medium
            text-slate-700
          "
        >
          GitHub
        </button>

        <button
          className="
            h-12
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-white
            font-medium
            text-slate-700
          "
        >
          LinkedIn
        </button>

        <button
          className="
            h-12
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-white
            font-medium
            text-slate-700
          "
        >
          Contact
        </button>
      </div>
    </div>
  );
}