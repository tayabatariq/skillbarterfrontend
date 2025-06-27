import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    interest: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setResponseMsg("✅ Your message has been sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          location: "",
          interest: "",
          message: "",
        });
      } else {
        setResponseMsg("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setResponseMsg("🚫 Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-xl grid md:grid-cols-2 gap-10 p-8 md:p-14">
        {/* ─── Left Side ─── */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              <span className="text-purple-600">Let’s Collaborate</span> <br />
              Exchange Skills & Ideas
            </h2>
            <p className="mt-4 text-gray-600">
              Whether you want to offer your talent or find someone to help on your journey —
              we’re just a message away. Let's build together on SkillBarter.
            </p>

            <div className="mt-6 text-sm text-gray-700 space-y-2">
              <p>📞 +92 312 345 6789</p>
              <p>📧 support@skillbarter.com</p>
              <p>🌍 Visit Us Online Anytime</p>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-4 bg-purple-50 p-4 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=80&q=80"
              alt="team member"
              className="rounded-full w-16 h-16 object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Want to Join Our Talent Network?
              </p>
              <a href="/signup" className="text-purple-600 text-sm underline">
                View Opportunities
              </a>
            </div>
          </div>
        </div>

        {/* ─── Right Side: Form ─── */}
        <div className="bg-slate-50 text-black p-6 md:p-8 rounded-xl shadow-inner">
          <h3 className="text-2xl font-semibold mb-4 text-center text-purple-700">
            Contact SkillBarter Team
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="p-3 rounded-md bg-white w-full border border-gray-300"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="p-3 rounded-md bg-white w-full border border-gray-300"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="p-3 rounded-md bg-white w-full border border-gray-300"
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City / Country"
                className="p-3 rounded-md bg-white w-full border border-gray-300"
              />
            </div>

            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="p-3 rounded-md bg-white w-full border border-gray-300 text-gray-600"
              required
            >
              <option disabled value="">
                What skill area are you interested in?
              </option>
              <option>Skill Exchange</option>
              <option>Partnership</option>
              <option>Web/App Development</option>
              <option>Marketing Support</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="p-3 rounded-md bg-white w-full h-28 border border-gray-300"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-md text-white font-semibold"
            >
              Send Message
            </button>

            {responseMsg && (
              <p className="text-sm text-center text-green-600 mt-2">{responseMsg}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
