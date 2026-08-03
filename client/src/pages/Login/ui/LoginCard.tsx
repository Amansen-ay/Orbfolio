import { FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { api } from '@/shared/api/axiosInstance';
import { useAuth } from '@/features/auth/model/AuthContext';

export function LoginCard() {
  const { setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email!")
      return
    }

    if (!password.trim()) {
      setError("Please enter your password!");
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    try {
      setIsLoading(true);
      const response = await api.post('/users/login', {
        email: email.trim(),
        password: password.trim()
      })
      setAuth(response.data.token, response.data.user);
      navigate('/dashboard');

    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("STATUS:", error.response?.status);
        console.log("BACKEND DATA:", error.response?.data);
        setError(
          error.response?.data?.message ??
          "Failed to login"
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
    <section className="flex justify-center lg:justify-end">
      <div className="w-full max-w-lg rounded-[32px] border border-gray-200/70 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
        <div>
          <p className="text-sm font-semibold text-orange-500">
            Welcome back 👋
          </p>

          <h2 className="mt-2 text-5xl font-bold tracking-tight text-slate-900">
            Log in to <span className="text-orange-500">Orbfolio</span>
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Enter your credentials to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-800">
              Email address
            </label>

            <div
              className="
      flex
      h-14
      items-center
      rounded-2xl
      border
      border-slate-200
      px-4
      transition-all
      duration-300
      focus-within:border-orange-500
      focus-within:ring-4
      focus-within:ring-orange-100
    "
            >
              <FiMail className="text-xl text-slate-400" />

              <input
                type="email"
                placeholder="you@example.com"
                className="ml-3 w-full bg-transparent outline-none"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError("")
                }}
              />
            </div>
          </div>
          <div className="mt-[-15px] text-sm font-medium text-red-600">
            {error !== "Please enter your password!" && error}
          </div>
          <div>
            <div className="mb-3 flex items-center justify-between">
              <label className="text-sm font-semibold text-slate-800">
                Password
              </label>

              <button
                type="button"
                className="text-sm font-semibold text-orange-500 hover:text-orange-600"
              >
                Forgot?
              </button>
            </div>

            <div
              className="
      flex
      h-14
      items-center
      rounded-2xl
      border
      border-slate-200
      px-4
      transition-all
      duration-300
      focus-within:border-orange-500
      focus-within:ring-4
      focus-within:ring-orange-100
    "
            >
              <FiLock className="text-xl text-slate-400" />

              <input
                type="password"
                placeholder="Enter your password"
                className="ml-3 w-full bg-transparent outline-none"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError("")
                }}
              />
            </div>
          </div>

          <div className="mt-[-15px] text-sm font-medium text-red-600">
            {error === "Please enter your password!" && error}
          </div>
          <div className="flex items-center justify-between accent-orange-500">
            <label className="flex items-center gap-3 text-sm text-slate-700">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
              />

              Remember me
            </label>
          </div>

          <button type="submit" disabled={isLoading} className="h-14 w-full rounded-2xl bg-orange-500 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600">
            {isLoading ? "Logging in..." : "Log In"}
          </button>

          <div className="mt-1 mb-5 flex items-center">
            <div className="h-px flex-1 bg-slate-200" />

            <span className="mx-4 text-sm text-slate-400">
              or continue with
            </span>

            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Google */}
            <button
              type="button"
              className="
      group
      flex
      h-14
      items-center
      justify-center
      gap-2
      rounded-2xl
      border
      border-slate-200
      bg-white
      font-medium
      text-slate-700
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:border-orange-200
      hover:bg-orange-50/40
    "
            >
              <FcGoogle className="text-[22px]" />
              <span>Google</span>
            </button>

            {/* GitHub */}
            <button
              type="button"
              className="
      group
      flex
      h-14
      items-center
      justify-center
      gap-2
      rounded-2xl
      border
      border-slate-200
      bg-white
      font-medium
      text-slate-700
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:border-slate-300
      hover:bg-slate-50
    "
            >
              <FaGithub className="text-[20px]" />
              <span>GitHub</span>
            </button>
          </div>

          <p className="mt-8 text-center text-slate-500">
            Don't have an account?{" "}
            <button
              type="button"
              className="font-semibold text-orange-500 transition-colors hover:text-orange-600"
            >
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}