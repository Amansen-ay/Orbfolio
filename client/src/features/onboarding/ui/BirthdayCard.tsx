import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api } from '@/shared/api/axiosInstance';
import { useAuth } from '@/features/auth/model/AuthContext';
import { useState } from 'react';


export function BirthdayCard() {
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { token } = useAuth();

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    if (!dateOfBirth) {
      setError("Please select your date of birth or skip for now.");
      return;
    }
    if (dateOfBirth && dateOfBirth > new Date()) {
      setError("Please select valid date of birth")
      return
    }
    const today = new Date();

    const minimumDate = new Date(
      today.getFullYear() - 13,
      today.getMonth(),
      today.getDate()
    );

    if (dateOfBirth > minimumDate) {
      setError("You must be at least 13 years old.");
      return;
    }
    try {
      setIsLoading(true);
      await api.patch('/users/me', {
        dateOfBirth
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      navigate('/onboarding/finished');
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("STATUS:", error.response?.status);
        console.log("BACKEND DATA:", error.response?.data);
        setError(
          error.response?.data?.message ??
          "Failed to save date of birth."
        );
      } else {
        console.error(error);
        setError("Something went wrong.");
      }
    } finally {
      setIsLoading(false);
    }
  }
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
            onChange={(e) => {
              setDateOfBirth(e.target.valueAsDate)
              setError("")
            }}
          />
        </div>
      </div>

      <div className="mt-[10px] text-sm font-medium text-red-600">
        {error}
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
          onClick={() => navigate('/onboarding/location')}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Right Buttons */}

        <form onSubmit={handleSubmit} className="flex gap-4">
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
            onClick={() => navigate('/onboarding/finished')}
          >
            Skip for now
          </button>

          <button
            type="submit"
            disabled={isLoading}
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

          >
            {isLoading ? "Finishing..." : "Finish Setup"}

            <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}