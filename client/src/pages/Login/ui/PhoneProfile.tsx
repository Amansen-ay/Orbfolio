import {
    FaGithub,
    FaLinkedinIn,
    FaTwitter,
    FaGlobe,
    FaInstagram,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const links = [
    {
        title: "My Portfolio",
        icon: <FaGlobe />,
    },
    {
        title: "GitHub",
        icon: <FaGithub />,
    },
    {
        title: "LinkedIn",
        icon: <FaLinkedinIn />,
    },
    {
        title: "Twitter",
        icon: <FaTwitter />,
    },
    {
        title: "Contact Me",
        icon: <MdEmail />,
    },
];

export function PhoneProfile() {
    return (
        <div className="flex h-full flex-col px-6 pt-10">

            {/* Avatar */}

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-orange-300 bg-orange-100 text-3xl font-black text-orange-500">
                O
            </div>

            {/* Name */}

            <h2 className="mt-4 text-center text-2xl font-bold text-slate-900">
                Aman Sen
            </h2>

            {/* Bio */}

            <p className="mt-2 text-center text-sm leading-6 text-slate-500">
                Building beautiful
                <br />
                digital experiences.
            </p>
            {/* Social Icons */}

            <div className="mt-5 flex justify-center gap-5">

                <button className="transition hover:scale-110">
                    <FaTwitter className="text-lg text-slate-700" />
                </button>

                <button className="transition hover:scale-110">
                    <FaGithub className="text-lg text-slate-700" />
                </button>

                <button className="transition hover:scale-110">
                    <FaLinkedinIn className="text-lg text-slate-700" />
                </button>

                <button className="transition hover:scale-110">
                    <FaInstagram className="text-lg text-slate-700" />
                </button>

            </div>

            {/* Divider */}

            <div className="my-4 h-px bg-slate-200" />

            {/* Links */}

            <div className="space-y-3">

                {links.map((link) => (
                    <button
                        key={link.title}
                        className="flex h-10 w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition hover:border-orange-300 hover:bg-orange-50"
                    >
                        <span className="text-slate-700">
                            {link.icon}
                        </span>

                        <span className="text-sm font-medium text-slate-700">
                            {link.title}
                        </span>
                    </button>
                ))}

            </div>

            {/* Footer */}

            <div className="mt-auto pb-6">

                

                <p className="mt-4 text-center text-xs text-slate-500">
                    Made with
                    <span className="font-semibold text-orange-500">
                        {" "}
                        Orbfolio
                    </span>
                </p>

            </div>

        </div>
    );
}