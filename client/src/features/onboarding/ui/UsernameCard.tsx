import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {useNavigate} from 'react-router-dom';

export function UsernameCard() {
    const navigate = useNavigate();
  return (
    <div className="w-full max-w-xl">
      {/* Step */}
      <p className="text-lg font-semibold text-orange-500">
        Step 3 of 7
      </p>

      {/* Progress */}
      <div className="mt-4 flex gap-2">
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-slate-200" />
        <div className="h-1.5 w-14 rounded-full bg-slate-200" />
        <div className="h-1.5 w-14 rounded-full bg-slate-200" />
        <div className="h-1.5 w-14 rounded-full bg-slate-200" />
      </div>

      {/* Heading */}
      <h1 className="mt-10 text-6xl font-black leading-tight text-slate-900">
        Choose your{" "}
        <span className="text-orange-500">
          username
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-5 text-xl leading-relaxed text-slate-500">
        This will be your unique link on Orbfolio.
      </p>

      {/* Username */}
      <div className="mt-12">
        <label className="mb-3 block text-sm font-semibold text-slate-700">
          Username
        </label>

        <div
          className="
            flex
            h-16
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            transition-all
            duration-300
            focus-within:border-orange-500
            focus-within:ring-4
            focus-within:ring-orange-100
          "
        >
          {/* Prefix */}

          <div
            className="
              flex
              items-center
              border-r
              border-slate-200
              bg-slate-50
              px-6
              text-base
              font-medium
              text-slate-500
            "
          >
            orbfolio.app/
          </div>

          {/* Input */}

          <input
            type="text"
            placeholder="amansen"
            className="
              flex-1
              px-5
              text-lg
              outline-none
              placeholder:text-slate-400
            "
          />

          {/* Status */}

          <div className="flex items-center px-5">
            <CheckCircle2
              size={22}
              className="text-green-500"
            />
          </div>
        </div>

        {/* Helper */}

        <div className="mt-4 flex items-center gap-2">
          <CheckCircle2
            size={18}
            className="text-green-500"
          />

          <span className="text-sm font-medium text-green-600">
            Username is available!
          </span>
        </div>
      </div>

      {/* Buttons */}

      <div className="mt-16 flex items-center justify-between">
        <button
          type="button"
          className="
            flex
            h-14
            items-center
            gap-2
            rounded-2xl
            border
            border-slate-200
            px-8
            font-semibold
            text-slate-700
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-slate-50
          "
          onClick={()=>navigate('/onboarding/displayname')}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          type="submit"
          className="
            flex
            h-14
            items-center
            gap-2
            rounded-2xl
            bg-orange-500
            px-10
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-orange-600
          "
          onClick={()=>navigate('/onboarding/avatar')}
        >
          Next
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}