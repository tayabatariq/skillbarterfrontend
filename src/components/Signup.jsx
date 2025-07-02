import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    location: "",
    role: "",
    skillsHave: "",
    skillsWant: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://skillbarter-backend-production.up.railway.app/api/signup", formData);
      if (res.data.success) {
        navigate("/verify", { state: { email: formData.email } });
      } else {
        alert("Signup failed: " + res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Signup error. Please try again.");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-blue-100 p-6">
        <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-xl w-full">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">
            Sign Up to SkillBarter
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
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
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="03xx-xxxxxxx"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block mb-1 font-medium">Location</label>
              <input
                type="text"
                name="location"
                placeholder="City, Country"
                value={formData.location}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block mb-1 font-medium">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="">Select your role</option>
                <option value="Learner">Learner</option>
                <option value="Mentor">Mentor</option>
                <option value="Both">Both</option>
              </select>
            </div>

            {/* Skills You Offer */}
            <div>
              <label className="block mb-1 font-medium">Skills You Offer</label>
              <input
                type="text"
                name="skillsHave"
                placeholder="e.g., Photoshop"
                value={formData.skillsHave}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>

            {/* Skills You Want to Learn */}
            <div>
              <label className="block mb-1 font-medium">Skills You Want to Learn</label>
              <input
                type="text"
                name="skillsWant"
                placeholder="e.g., ReactJS"
                value={formData.skillsWant}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block mb-1 font-medium">Description</label>
              <textarea
                name="description"
                placeholder="Tell us about yourself..."
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700"
            >
              Create Account
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-purple-600 font-medium hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
