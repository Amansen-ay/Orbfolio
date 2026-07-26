import {
  ArrowRight,
  Link2,
  Sparkles,
  UserRound,
} from "lucide-react";
import {useNavigate} from 'react-router-dom';

export function WelcomeCard() {
    const navigate = useNavigate();

  return (
    <div className="max-w-xl">

      {/* Heading */}

      <p className="mb-3 text-lg font-semibold text-orange-500">
        Step 1 of 7
      </p>

      <h1 className="text-6xl font-bold leading-tight text-slate-900">
        Welcome to Orbfolio! 👋
      </h1>

      <p className="mt-6 max-w-lg text-xl leading-9 text-slate-500">
        Let's set up your profile and create your digital identity.
      </p>

      {/* Features */}

      <div className="mt-12 space-y-5">

        <div className="flex items-center gap-5">
          <div className="rounded-2xl bg-orange-100 p-3">
            <UserRound
              size={22}
              className="text-orange-500"
            />
          </div>

          <div>
            <h3 className="font-semibold text-slate-800">
              Create your profile
            </h3>

            <p className="text-sm text-slate-500">
              Personalize your public identity.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="rounded-2xl bg-orange-100 p-3">
            <Link2
              size={22}
              className="text-orange-500"
            />
          </div>

          <div>
            <h3 className="font-semibold text-slate-800">
              Share all your links
            </h3>

            <p className="text-sm text-slate-500">
              Bring everything together in one place.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="rounded-2xl bg-orange-100 p-3">
            <Sparkles
              size={22}
              className="text-orange-500"
            />
          </div>

          <div>
            <h3 className="font-semibold text-slate-800">
              Grow your audience
            </h3>

            <p className="text-sm text-slate-500">
              Build a profile you'll be proud to share.
            </p>
          </div>
        </div>

      </div>

      {/* CTA */}

      <button
        className="
          mt-14
          flex
          h-14
          w-72
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-orange-500
          font-semibold
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-orange-600
        "
        onClick={()=>navigate('/onboarding/displayname')}
      >
        Let's Get Started

        <ArrowRight size={20} />
      </button>
    </div>
  );
}