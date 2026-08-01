import {
  Monitor,
  Smartphone,
  MapPin,
  Palette,
  Globe,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export function LivePreviewCard() {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
      {/* Header */}

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-zinc-900">
          Live Preview
        </h2>

        <div className="flex gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-orange-300 bg-orange-50 text-orange-500">
            <Monitor size={15} />
          </button>

          <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 hover:bg-zinc-100">
            <Smartphone size={15} />
          </button>
        </div>
      </div>

      {/* Phone */}

      <div className="mt-5 flex justify-center">
        <div
          className="
            aspect-[9/19]
            w-[240px]
            rounded-[38px]
            border-[5px]
            border-zinc-900
            bg-white
            px-5
            py-4
            shadow-lg
          "
        >
          {/* Logo */}

          <div className="mb-3 flex justify-center">
            <div className="h-4 w-4 rounded-full border-[3px] border-orange-500" />
          </div>

          {/* Avatar */}

          <img
            src="https://i.pravatar.cc/200"
            alt=""
            className="mx-auto h-16 w-16 rounded-full border-2 border-orange-500 object-cover"
          />

          {/* Name */}

          <h2 className="mt-3 text-center text-xl font-bold text-zinc-900">
            Aman Sen
          </h2>

          <p className="mt-1 text-center text-sm font-medium text-orange-500">
            @amansen
          </p>

          {/* Bio */}

          <p className="mx-auto mt-4 max-w-[180px] text-center text-xs leading-5 text-zinc-500">
            Full Stack Developer passionate about building beautiful
            digital experiences.
          </p>

          {/* Location */}

          <div className="mt-4 flex items-center justify-center gap-1 text-xs text-zinc-500">
            <MapPin size={13} className="text-orange-500" />
            Uttar Pradesh, India
          </div>

          {/* Links */}

          <div className="mt-5 flex flex-col gap-2">
            <button className="flex h-10 items-center justify-center gap-2 rounded-xl bg-orange-500 text-sm font-semibold text-white transition hover:bg-orange-600">
              <Globe size={15} />
              Portfolio
            </button>

            {[
              {
                icon: <FaGithub size={15} />,
                text: "GitHub",
              },
              {
                icon: <FaLinkedinIn size={15} />,
                text: "LinkedIn",
              },
              {
                icon: <FaTwitter size={15} />,
                text: "Twitter",
              },
              {
                icon: <MdEmail size={16} />,
                text: "Email Me",
              },
            ].map((item) => (
              <button
                key={item.text}
                className="
                  flex
                  h-10
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-orange-200
                  px-4
                  text-sm
                  font-medium
                  text-zinc-700
                  transition
                  hover:bg-orange-50
                "
              >
                <span className="text-zinc-700">{item.icon}</span>

                <span className="flex-1 text-center pr-4">
                  {item.text}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}

      <button
        className="
          mt-6
          flex
          h-11
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-orange-300
          text-sm
          font-semibold
          text-orange-500
          transition
          hover:bg-orange-50
        "
      >
        <Palette size={16} />
        Customize Appearance
      </button>
    </section>
  );
}