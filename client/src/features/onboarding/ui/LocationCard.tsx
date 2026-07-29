import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Country, State } from "country-state-city";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '@/shared/api/axiosInstance';
import { useAuth } from '@/features/auth/model/AuthContext';
import axios from 'axios';


export function LocationCard() {
  const [countryCode, setCountryCode] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const countries = Country.getAllCountries();
  const { token } = useAuth();
  const states = countryCode
    ? State.getStatesOfCountry(countryCode)
    : [];

  const navigate = useNavigate();

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    if (!countryCode) {
      setError("Please select the country")
      return
    }
    if (!stateCode) {
      setError("Please select the state")
      return
    }
    const selectedCountry = Country.getCountryByCode(countryCode);

    const selectedState = State.getStateByCodeAndCountry(
      stateCode,
      countryCode
    );
    if (!selectedCountry || !selectedState) {
      setError("Invalid location selected");
      return;
    }

    try {
      setIsLoading(true);
      await api.patch('/users/me', {
        country: selectedCountry.name,
        state: selectedState.name,
      },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      navigate('/onboarding/dateofbirth')
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("STATUS:", error.response?.status);
        console.log("BACKEND DATA:", error.response?.data);
        setError(
          error.response?.data?.message ??
          "Failed to save location."
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
            value={countryCode}
            onChange={(e) => {
              setCountryCode(e.target.value);
              setStateCode("");
              setError("")
            }}
          >
            <option value="">Select your country</option>

            {countries.map((country) => (
              <option
                key={country.isoCode}
                value={country.isoCode}
              >
                {country.name}
              </option>
            ))}
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
      <div className="mt-[10px] text-sm font-medium text-red-600">
        {error === "Please select the country" && "Please select the country"}
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
            value={stateCode}
            onChange={(e) => {
              setStateCode(e.target.value)
              setError("")
            }
            }
            disabled={!countryCode}
          >
            <option value="">Select your state</option>

            {states.map((state) => (
              <option
                key={state.isoCode}
                value={state.isoCode}
              >
                {state.name}
              </option>
            ))}
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
      <div className="mt-[10px] text-sm font-medium text-red-600">
        {error === "Please select the state" && "Please select the state"}
      </div>

      {/* Buttons */}

      <form onSubmit={handleSubmit} className="mb-14 mt-10 flex items-center justify-between">
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
          onClick={() => navigate('/onboarding/bio')}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="flex gap-4">
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
            {isLoading ? "Setting up..." : "Next"}
            <ArrowRight size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}