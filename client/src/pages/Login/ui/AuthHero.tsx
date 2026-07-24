import { PhoneMockup } from "./PhoneMockup";

export function AuthHero() {
    return (
        <section className="flex h-full flex-col justify-center py-12">
            {/* Logo */}

            <div className="mb-16 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white text-xl font-bold">
                    O
                </div>

                <h2 className="text-4xl font-black tracking-tight">
                    Orb<span className="text-orange-500">folio</span>
                </h2>
            </div>

            {/* Badge */}

            <div className="inline-flex w-fit items-center rounded-full border border-orange-200 bg-orange-50 px-5 py-2">
                <span className="text-sm font-semibold text-orange-500">
                    👋 Welcome Back
                </span>
            </div>

            {/* Heading */}

            <h1 className="mt-10 max-w-[650px] text-7xl font-black leading-none tracking-tight text-slate-900">
                Log in to your

                <span className="mt-3 block text-orange-500">
                    Orbit.
                </span>
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-md text-xl leading-9 text-slate-600">
                Access your dashboard, manage your links, and grow your audience.
            </p>

            {/* Phone will come here */}

            <PhoneMockup/>
        </section>
    );
}