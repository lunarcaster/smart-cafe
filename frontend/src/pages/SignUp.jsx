// src/pages/SignUp.jsx
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signInImg from "../assets/outdoor.png";

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Password does not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Registration failed");
        return;
      }

      setMessage("Account created successfully!");

      setTimeout(() => {
        navigate("/signin");
      }, 800);
    } catch (error) {
      setMessage("Cannot connect to backend server");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#4b3934] via-[#9b8f84] to-[#ede7dc] text-[#3E2C24]">
      <Navbar />

      <main className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Form Sign Up */}
          <div className="bg-[#FFF8F0] p-10 rounded-2xl shadow-lg">
            <h1 className="text-4xl font-semibold text-[#3E2C24] mb-2">
              Create Account
            </h1>

            <p className="text-[#3E2C24] mb-8">
              Sign up to reserve your table and enjoy La Lunarcaster Cafe.
            </p>

            <form onSubmit={handleSignUp} className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label className="font-semibold text-[#3E2C24] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="border border-[#ccc] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#a66f5d]"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-[#3E2C24] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="border border-[#ccc] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#a66f5d]"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-[#3E2C24] mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="border border-[#ccc] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#a66f5d]"
                  placeholder="Create your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-[#3E2C24] mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="border border-[#ccc] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#a66f5d]"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {message && (
                <p className="text-sm text-center font-semibold text-[#4a2d27]">
                  {message}
                </p>
              )}

              <button
                type="submit"
                className="bg-[#a66f5d] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Sign Up
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-[#3E2C24]">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-semibold underline hover:text-[#a66f5d]"
              >
                Sign In
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

export default SignUp;