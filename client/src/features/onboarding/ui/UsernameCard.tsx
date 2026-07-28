import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '@/features/auth/model/AuthContext';
import { api } from '@/shared/api/axiosInstance';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function UsernameCard() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("")
    if (!username.trim()) {
      setError("username must be provided!")
      return
    }
    try {
      setIsLoading(true)

      await api.patch('/users/me', {
        username: username.trim()
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      navigate('/onboarding/avatar')
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("STATUS:", error.response?.status);
        console.log("BACKEND DATA:", error.response?.data);
        setError(
          error.response?.data?.message ??
          "Failed to save username."
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
      <form onSubmit={handleSubmit}>
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
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
                setError("")
              }}
            />

            {/* Status */}

            {username.trim().length>3 &&
              <div className="flex items-center px-5">
                <CheckCircle2
                  size={22}
                  className="text-green-500"
                />
              </div>}
          </div>

          {/* Helper */}

          {!error && username.length > 3 ?
            <div className="mt-4 flex items-center gap-2">
              <CheckCircle2
                size={18}
                className="text-green-500"
              />

              <span className="text-sm font-medium text-green-600">
                Looks good!
              </span>


            </div>
            :
            <div className="mt-3 text-sm font-medium text-red-600">
              {error}
            </div>

          }
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
            onClick={() => navigate('/onboarding/displayname')}
          >
            <ArrowLeft size={18} />
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
            {isLoading ? "Setting up...." : "Next"}
            <ArrowRight size={18} />
          </button>
        </div>
      </form>

    </div>
  );
}