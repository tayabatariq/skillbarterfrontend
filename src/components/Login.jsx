import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈
import Footer from "./Footer";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user", // default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      console.log("Login successful:", data.user);
      navigate("/skills"); // 👈 Redirect to Home
    } else {
      alert(data.message || "Login failed");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Something went wrong. Please try again.");
  }
};

  return (
   <>
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-blue-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">
          Login to SkillBarter
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-purple-600 font-medium hover:underline"
          >
            Sign up here
          </a>
        </p>
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default Login;
