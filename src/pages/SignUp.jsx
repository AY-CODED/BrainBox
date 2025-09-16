import React, { useState } from "react";
import LightRays from "../../LightRays";
import { MoveRight, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { SiApple } from "react-icons/si";

// ✅ Make sure to include Poppins font in index.html
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div
            className="relative flex items-center justify-center w-full h-[600px] bg-black overflow-hidden"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            {/* Background effect */}
            <LightRays
                raysOrigin="top-center"
                raysColor="#ffffff"
                raysSpeed={1.5}
                lightSpread={0.8}
                rayLength={1.2}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
                className="custom-rays"
            />

            {/* Glassmorphic login card */}
            <div className="absolute inset-0 flex items-center justify-center mb-10">
                <div className="w-[350px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6">
                    <h1 className="text-white text-2xl font-bold mb-6 text-center">
                        Signup
                    </h1>

                    {/* Email */}
                    <label htmlFor="email" className="block text-white mb-2">
                        E-mail
                    </label>
                    <div className="relative mb-4">
                        <Mail
                            className="absolute left-3 top-2.5 text-gray-300"
                            size={18}
                        />
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full pl-10 pr-3 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 
                             focus:outline-none focus:ring-2 focus:ring-white/40"
                        />
                    </div>

                    {/* Password */}
                    <label htmlFor="password" className="block text-white mb-2">
                        Password
                    </label>
                    <div className="relative mb-6">
                        <Lock
                            className="absolute left-3 top-2.5 text-gray-300"
                            size={18}
                        />
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Enter your password"
                            className="w-full pl-10 pr-10 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 
                             focus:outline-none focus:ring-2 focus:ring-white/40"
                        />
                        {/* 👁 Show/Hide password button */}
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-2.5 text-gray-300 hover:text-white"
                        >
                            {showPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 rounded-md bg-white text-black font-semibold 
                           hover:bg-gray-200 transition flex items-center justify-center gap-2"
                    >
                        Sign In
                        <MoveRight size={18} />
                    </button>

                    {/* OR Separator */}
                    <p className="text-center mt-5 text-sm text-gray-300">OR</p>

                    {/* Social Login */}
                    <div className="mt-5 flex flex-col gap-3">
                        <button
                            className="w-full py-2 rounded-md bg-white/20 border border-white/30 text-white font-medium 
                                   flex items-center justify-center gap-2 hover:bg-white/30 transition"
                        >
                            {/* Google SVG */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                viewBox="0 0 488 512"
                            >
                                <path
                                    fill="#4285F4"
                                    d="M488 261.8c0-17.4-1.6-34.1-4.6-50.4H249v95.3h134.3c-5.8 31.3-23 57.7-49.2 75.5l79.6 61.9c46.5-42.9 74.3-106.2 74.3-182.3z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M249 492c66.7 0 122.6-22.1 163.4-59.9l-79.6-61.9c-22.1 14.8-50.5 23.7-83.8 23.7-64.4 0-119-43.5-138.5-102.1l-81.2 62.8C72.7 444.7 154.4 492 249 492z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M110.5 291.8c-4.8-14.5-7.5-29.9-7.5-45.8s2.7-31.3 7.5-45.8l-81.2-62.8C11 169.1 0 208.5 0 246s11 76.9 29.3 108.6l81.2-62.8z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M249 97.6c36.2 0 68.7 12.5 94.3 36.9l70.6-70.6C371.6 23.2 315.7 0 249 0 154.4 0 72.7 47.3 29.3 137.4l81.2 62.8C130 141.1 184.6 97.6 249 97.6z"
                                />
                            </svg>
                            Sign in with Google
                        </button>
                        <button
                            className="w-full py-2 rounded-md bg-white/20 border border-white/30 text-white font-medium 
                                   flex items-center justify-center gap-2 hover:bg-white/30 transition"
                        >
                            <SiApple size={18} color="#fff" /> Sign in with
                            Apple
                        </button>
                        <p className="text-center mt-6 text-sm text-gray-300">
                            Already have an account?{" "}
                            <a
                                href="/login"
                                className="text-white font-medium hover:underline"
                            >
                                Login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
