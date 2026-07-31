import { User, ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '@/shared/api/axiosInstance';
import { useAuth } from '@/features/auth/model/AuthContext';
import axios from 'axios';

export function DisplayNameCard() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

   async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!displayName.trim()) {
      setError("Display name must be provided!")
      return
    }
    if(displayName.length>50){
      setError("Display name can not exceed 50 characters!")
      return
    }
    try {

      setIsLoading(true);

      await api.patch('/users/me', {
        displayName:displayName.trim()
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      navigate('/onboarding/username')
    }
    catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("STATUS:", error.response?.status);
      console.log("BACKEND DATA:", error.response?.data);
      setError(
            error.response?.data?.message ??
            "Failed to save display name."
        );
    } else {
      console.error(error);
      setError("Something went wrong.");
    }
  } finally {
    setIsLoading(false);
  }

}
return (
  <div className="w-full max-w-xl">
    {/* Step */}
    <p className="text-lg font-semibold text-orange-500">
      Step 2 of 7
    </p>

    {/* Progress */}
    <div className="mt-4 flex gap-2">
      <div className="h-1.5 w-14 rounded-full bg-orange-500" />
      <div className="h-1.5 w-14 rounded-full bg-orange-500" />
      <div className="h-1.5 w-14 rounded-full bg-slate-200" />
      <div className="h-1.5 w-14 rounded-full bg-slate-200" />
      <div className="h-1.5 w-14 rounded-full bg-slate-200" />
      <div className="h-1.5 w-14 rounded-full bg-slate-200" />
      <div className="h-1.5 w-14 rounded-full bg-slate-200" />
    </div>

    {/* Heading */}
    <h1 className="mt-10 text-6xl font-black leading-tight text-slate-900">
      What's your{" "}
      <span className="text-orange-500">
        display name?
      </span>
    </h1>

    {/* Subtitle */}
    <p className="mt-5 text-xl leading-relaxed text-slate-500">
      This is how people will see you on your profile.
    </p>

    {/* Form */}
    <form className="mt-12 space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="mb-3 block text-sm font-semibold text-slate-700">
          Display Name
        </label>

        <div
          className="
              flex
              h-16
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-5
              transition-all
              duration-300
              focus-within:border-orange-500
              focus-within:ring-4
              focus-within:ring-orange-100
            "
        >
          <User className="h-5 w-5 text-slate-400" />

          <input
            type="text"
            placeholder="Aman Sen"
            className="
                h-full
                w-full
                bg-transparent
                text-lg
                outline-none
                placeholder:text-slate-400
              "
            value={displayName}
            onChange={(e) => {
              setDisplayName(e.target.value)
              setError("")
            }}
          />
        </div>
      </div>

      <p className={error?"text-m text-red-400":"text-sm text-slate-400"}>
        {error?error:"You can change this later anytime."}
      </p>

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
          onClick={() => navigate('/onboarding/welcome')}
        >
          <ArrowLeft className="h-5 w-5" />
          Back
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
          {isLoading?"Setting up ....":"Next"}
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </form>
  </div>
);
}