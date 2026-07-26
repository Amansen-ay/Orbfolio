import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import {useNavigate} from 'react-router-dom';

export function BirthdayCard() {
    const navigate = useNavigate();
  return (
    <div className="mt-[-35px] w-full max-w-xl">
      {/* Step */}

      <p className="text-lg font-semibold text-orange-500">
        Step 7 of 7
      </p>

      {/* Progress */}

      <div className="mt-4 flex gap-2">
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
      </div>

      {/* Heading */}

      <h1 className="mt-10 text-6xl font-black leading-tight text-slate-900">
        What's your{" "}
        <span className="text-orange-500">
          date of birth?
        </span>
      </h1>

      {/* Subtitle */}

      <p className="mt-5 text-xl leading-relaxed text-slate-500">
        This is optional and won't be shown publicly.
      </p>

      {/* Date Input */}

      <div className="mt-12">
        <label className="mb-3 block text-sm font-semibold text-slate-700">
          Date of Birth
        </label>

        <div className="relative">
          <CalendarDays
            size={20}
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="date"
            className="
              h-16
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-white
              pl-14
              pr-5
              text-lg
              outline-none
              transition-all
              duration-300
              focus:border-orange-500
              focus:ring-4
              focus:ring-orange-100
            "
          />
        </div>
      </div>

      {/* Buttons */}

      <div className="mt-16 flex items-center justify-between">
        {/* Back */}

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
          onClick={()=>navigate('/onboarding/location')}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Right Buttons */}

        <div className="flex gap-4">
          <button
            type="button"
            className="
              h-14
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
            onClick={()=>navigate('/onboarding/finished')}
          >
            Skip for now
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
            onClick={()=>navigate('/onboarding/finished')}
          >
            Finish Setup

            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}