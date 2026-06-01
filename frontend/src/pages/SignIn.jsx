// src/pages/SignIn.jsx
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import signInImg from "../assets/signin-cafe.png"; // gunakan gambar kanan seperti Figma

function SignIn() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#4b3934] via-[#9b8f84] to-[#ede7dc] text-[#3E2C24]">
      {/* Navbar */}
      <Navbar />

    <main className="min-h-screen bg-gradient-to-r from-[#4b3934] via-[#9b8f84] to-[#ede7dc] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Form Sign In */}
        <div className="bg-[#FFF8F0] p-10 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-semibold text-[#3E2C24] mb-2">Welcome Back</h1>
          <p className="text-[#3E2C24] mb-8">Sign in to your account to continue</p>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="font-semibold text-[#3E2C24] mb-1">Email</label>
              <input
                type="email"
                className="border border-[#ccc] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#a66f5d]"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-[#3E2C24] mb-1">Password</label>
              <input
                type="password"
                className="border border-[#ccc] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#a66f5d]"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="bg-[#a66f5d] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Sign In
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-[#3E2C24]">
            Don’t have an account?{" "}
            <Link to="/signup" className="font-semibold underline hover:text-[#a66f5d]">
              Sign Up
            </Link>
          </p>
        </div>

        {/* Gambar kanan */}
        <div className="hidden lg:flex justify-center">
          <img
            src={signInImg}
            alt="Cafe interior"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </main>
    </div>
  );
}

export default SignIn;
