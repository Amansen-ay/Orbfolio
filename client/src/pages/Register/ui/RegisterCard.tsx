import { FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';
import { api } from '@/shared/api/axiosInstance';
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/features/auth/model/AuthContext";
import axios from "axios";

export function RegisterCard() {
    const navigate = useNavigate();
    const { setAuth } = useAuth();
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(
        e: React.SyntheticEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        setError("");

        if (
            !firstName.trim() ||
            !lastName.trim() ||
            !email.trim() ||
            !password ||
            !confirmPassword
        ) {
            setError("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (!agreedToTerms) {
            setError(
                "Please agree to the Terms of Service and Privacy Policy."
            );
            return;
        }

        // Axios api call

        try {
            setIsLoading(true);

            const response = await api.post(
                "users/register",
                {
                    firstName: firstName.trim(),
                    lastName: lastName.trim(),
                    email: email.trim(),
                    password,
                }
            );

            setAuth(response.data.token, response.data.user);

            navigate("/onboarding/welcome");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("STATUS:", error.response?.status);
                console.log("BACKEND DATA:", error.response?.data);
            } else {
                console.error(error);
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
                        Ready to make your orbit?
                    </p>

                    <h2 className="mt-2 text-5xl font-bold tracking-tight text-slate-900">
                        Create your account
                    </h2>

                    <p className="mt-4 text-lg text-slate-500">
                        Create your account and start building your profile.
                    </p>
                </div>

                <form className="mt-6 space-y-6" onSubmit={handleSubmit}>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-800">
                                First Name
                            </label>

                            <input
                                type="text"
                                placeholder="John"
                                className="
        h-14
        w-full
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        px-5
        outline-none
        transition-all
        duration-300
        placeholder:text-slate-400
        focus:border-orange-400
        focus:bg-white
        focus:ring-4
        focus:ring-orange-100
      "
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-800">
                                Last Name
                            </label>

                            <input
                                type="text"
                                placeholder="Doe"
                                className="
        h-14
        w-full
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        px-5
        outline-none
        transition-all
        duration-300
        placeholder:text-slate-400
        focus:border-orange-400
        focus:bg-white
        focus:ring-4
        focus:ring-orange-100
      "
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
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
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="mb-3 flex items-center justify-between">
                            <label className="text-sm font-semibold text-slate-800">
                                Password
                            </label>

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
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                    </div>

                    {/* confirm password */}

                    <div>
                        <div className="mb-3 flex items-center justify-between">
                            <label className="text-sm font-semibold text-slate-800">
                                Confirm Password
                            </label>


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
                                placeholder="Confirm your password"
                                className="ml-3 w-full bg-transparent outline-none"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between accent-orange-500">
                        <label className="flex items-center gap-3 text-sm text-slate-700">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                                checked={agreedToTerms}
                                onChange={(e) => setAgreedToTerms(e.target.checked)}
                            />

                            I agree to the Terms of Service and Privacy Policy
                        </label>
                    </div>
                    {error && (
                        <p className="text-sm font-medium text-red-500">
                            {error}
                        </p>
                    )}

                    <button disabled={isLoading} className="h-14 w-full rounded-2xl bg-orange-500 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600">
                        {isLoading ? "Creating account...." : "Register"}
                    </button>

                    <div className="mt-1 mb-5 flex items-center">
                        <div className="h-px flex-1 bg-slate-200" />

                        <span className="mx-4 text-sm text-slate-400">
                            or Signup with
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
                            <FcGoogle className="text-2xl" />

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
                            <FaGithub className="text-xl" />

                            <span>GitHub</span>
                        </button>

                    </div>

                    <p className="mt-8 text-center text-slate-500">
                        Already have an account?{" "}
                        <button
                            type="button"
                            className="font-semibold text-orange-500 transition-colors hover:text-orange-600"
                        >
                            Login
                        </button>
                    </p>
                </form>
            </div>
        </section>
    );
}