import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import {useNavigate} from 'react-router-dom';
export function LocationCard() {
    const navigate = useNavigate();
  return (
    <div className="w-full max-w-xl">
      {/* Step */}

      <p className="mt-15 text-lg font-semibold text-orange-500">
        Step 6 of 7
      </p>

      {/* Progress */}

      <div className="mt-4 flex gap-2">
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-slate-200" />
      </div>

      {/* Heading */}

      <h1 className="mt-10 text-6xl font-black leading-tight text-slate-900">
        Where are you{" "}
        <span className="text-orange-500">
          located?
        </span>
      </h1>

      {/* Subtitle */}

      <p className="mt-5 text-xl leading-relaxed text-slate-500">
        This helps people know more about you.
      </p>

      {/* Country */}

      <div className="mt-8">
        <label className="mb-3 block text-sm font-semibold text-slate-700">
          Country
        </label>

        <div className="relative">
          <select
            className="
              h-16
              w-full
              appearance-none
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-5
              pr-12
              text-lg
              outline-none
              transition-all
              duration-300
              focus:border-orange-500
              focus:ring-4
              focus:ring-orange-100
            "
          >
            <option>🇮🇳 India</option>
            <option>🇺🇸 United States</option>
            <option>🇨🇦 Canada</option>
            <option>🇬🇧 United Kingdom</option>
          </select>

          <ChevronDown
            size={20}
            className="
              pointer-events-none
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />
        </div>
      </div>

      {/* State */}

      <div className="mt-8">
        <label className="mb-3 block text-sm font-semibold text-slate-700">
          State
        </label>

        <div className="relative">
          <select
            className="
              h-16
              w-full
              appearance-none
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-5
              pr-12
              text-lg
              outline-none
              transition-all
              duration-300
              focus:border-orange-500
              focus:ring-4
              focus:ring-orange-100
            "
          >
            <option>Uttar Pradesh</option>
            <option>Delhi</option>
            <option>Maharashtra</option>
            <option>Karnataka</option>
          </select>

          <ChevronDown
            size={20}
            className="
              pointer-events-none
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />
        </div>
      </div>

      {/* Buttons */}

      <div className="mb-14 mt-10 flex items-center justify-between">
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
          onClick={()=>navigate('/onboarding/bio')}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="flex gap-4">
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
            onClick={()=>navigate('/onboarding/dateofbirth')}
          >
            Next
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}