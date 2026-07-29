import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import {useNavigate} from 'react-router-dom';
import {useState} from 

export function BioCard() {
    const navigate = useNavigate();
  return (
    <div className="mt-15 w-full max-w-xl">
      {/* Step */}

      <p className="text-lg font-semibold text-orange-500">
        Step 5 of 7
      </p>

      {/* Progress */}

      <div className="mt-4 flex gap-2">
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-slate-200" />
        <div className="h-1.5 w-14 rounded-full bg-slate-200" />
      </div>

      {/* Heading */}

      <h1 className="mt-10 text-6xl font-black leading-tight text-slate-900">
        Write a short{" "}
        <span className="text-orange-500">
          bio
        </span>
      </h1>

      {/* Subtitle */}

      <p className="mt-5 text-xl leading-relaxed text-slate-500">
        Tell people about yourself.
      </p>

      {/* Bio */}

      <div className="mt-8">
        <label className="mb-3 block text-sm font-semibold text-slate-700">
          Bio
        </label>

        <textarea
          rows={6}
          maxLength={160}
          placeholder="Software Developer who loves building clean and impactful digital experiences."
          className="
            h-56
            w-full
            resize-none
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            text-lg
            leading-8
            outline-none
            transition-all
            duration-300
            placeholder:text-slate-400
            focus:border-orange-500
            focus:ring-4
            focus:ring-orange-100
          "
        />

        {/* Character Counter */}

        <div className="mt-3 flex justify-end">
          <span className="text-sm font-medium text-slate-400">
            0 / 160
          </span>
        </div>
      </div>

      {/* Buttons */}

      <div className="mb-14 mt-8 flex items-center justify-between">
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
          onClick={()=>navigate('/onboarding/avatar')}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Right Buttons */}

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
            onClick={()=>navigate('/onboarding/location')}
          >
            Next

            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}