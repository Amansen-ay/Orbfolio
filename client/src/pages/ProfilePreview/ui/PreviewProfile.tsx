import { Link2, MapPin } from "lucide-react";

export function PreviewProfile() {
  return (
    <div className="flex min-h-full flex-col">
      {/* Avatar */}

      <div
        className="
          mx-auto
          h-24 w-24
          overflow-hidden
          rounded-full
          border-4 border-orange-200
        "
      >
        <img
          src="https://i.pravatar.cc/200"
          alt="Aman Sen"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Identity */}

      <h2 className="mt-3 text-center text-3xl font-black text-slate-900">
        Aman Sen
      </h2>

      <p className="mt-1 text-center font-semibold text-orange-500">
        @amansen
      </p>

      {/* Bio */}

      <p className="mt-4 text-center text-sm leading-6 text-slate-500">
        Full Stack Developer passionate about building beautiful digital
        experiences and modern web applications.
      </p>

      {/* Divider */}

      <div className="my-5 h-px bg-slate-100" />

      {/* Location */}

      <div className="flex items-center justify-center gap-2 text-slate-600">
        <MapPin size={17} className="text-orange-500" />

        <span className="text-sm">
          Uttar Pradesh, India
        </span>
      </div>

      {/* Empty links */}

      <div
        className="
          mt-4
          flex flex-col items-center
          rounded-3xl
          border border-dashed border-slate-200
          bg-slate-50/60
          px-6 py-9
          text-center
        "
      >
        <div
          className="
            flex h-11 w-11
            items-center justify-center
            rounded-full
            bg-orange-100
            text-orange-500
          "
        >
          <Link2 size={20} />
        </div>

        <h3 className="mt-4 font-bold text-slate-900">
          No links added yet
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Add your first link from the dashboard and it will appear here.
        </p>
      </div>

      {/* Branding */}

      <p className="mt-auto pt-10 text-center text-xs text-slate-400">
        Made with{" "}
        <span className="font-bold text-orange-500">
          Orbfolio
        </span>
      </p>
    </div>
  );
}