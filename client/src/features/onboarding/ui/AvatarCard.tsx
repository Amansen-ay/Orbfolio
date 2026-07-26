import {
  ArrowLeft,
  ArrowRight,
  CloudUpload,
} from "lucide-react";
import {useNavigate} from 'react-router-dom';

export function AvatarCard() {
    const navigate = useNavigate()
  return (
    <div className="w-full max-w-xl">
      {/* Step */}

      <p className="mt-15 text-lg font-semibold text-orange-500">
        Step 4 of 7
      </p>

      {/* Progress */}

      <div className="mt-4 flex gap-2">
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-orange-500" />
        <div className="h-1.5 w-14 rounded-full bg-slate-200" />
        <div className="h-1.5 w-14 rounded-full bg-slate-200" />
        <div className="h-1.5 w-14 rounded-full bg-slate-200" />
      </div>

      {/* Heading */}

      <h1 className="mt-8 text-6xl font-black leading-tight text-slate-900">
        Add a profile{" "}
        <span className="text-orange-500">
          photo
        </span>
      </h1>

      {/* Subtitle */}

      <p className="mt-5 text-xl leading-relaxed text-slate-500">
        This helps people recognize you.
      </p>

      {/* Upload Area */}

      <label
        className="
          mt-8
          flex
          h-60
          w-full
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-3xl
          border-2
          border-dashed
          border-slate-200
          bg-slate-50
          transition-all
          duration-300
          hover:border-orange-400
          hover:bg-orange-50
        "
      >
        <input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          className="hidden"
        />

        {/* Upload Icon */}

        <div
          className="
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-md
          "
        >
          <CloudUpload
            size={34}
            className="text-orange-500"
          />
        </div>

        {/* Text */}

        <p className="mt-8 text-lg font-semibold text-slate-700">
          Drag & drop your image here
        </p>

        <p className="mt-2 text-base text-slate-500">
          or click to browse
        </p>
      </label>

      {/* File Info */}

      <p className="mt-5 text-center text-sm text-slate-400">
        JPG, PNG or WEBP • Max size 5MB
      </p>

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
          onClick={()=>navigate('/onboarding/username')}
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
            onClick={()=>navigate('/onboarding/bio')}
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
            onClick={()=>navigate('/onboarding/bio')}
          >
            Next

            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}