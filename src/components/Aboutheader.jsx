import React from 'react'

const Aboutheader = () => {
  return (
    <>
     

<div className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-100 flex items-center px-6 py-12">
  <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
    
    {/* ✅ Left Side Content */}
    <div className="text-left">
      <h1 className="text-5xl sm:text-6xl font-bold text-purple-700 mb-6 leading-tight">
        Empowering Skills. <br className="hidden sm:block" /> Connecting Talent.
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-xl">
        SkillBarter lets you connect with talented people, exchange skills, and grow without borders. Whether you’re a creator, coder, editor, or entrepreneur — you belong here.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="/contact"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Contact Us
        </a>
        <a
          href="/signup"
          className="bg-white text-purple-700 border border-purple-500 px-6 py-3 rounded-lg font-medium hover:bg-purple-100 transition"
        >
          Join SkillBarter
        </a>
      </div>
    </div>

    {/* ✅ Right Side Image with Blob Shape */}
    <div className="relative w-full h-[450px] flex items-center justify-center">
      <div className="w-[90%] h-full bg-purple-200 rounded-full clip-blob shadow-xl overflow-hidden">
        <img
          src="https://www.financialexpress.com/wp-content/uploads/2022/07/training.jpg"
          alt="about-skillbarter"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>


    {/* 🌟 Mission & Vision Section */}
<div className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* 👈 Left Side Image */}
    <div className="relative w-full h-[350px]">
      <img
        src="https://unknown-universityas.com/wp-content/uploads/2023/01/Copy-of-Blue-Modern-Corporate-Digital-Finance-Presentation-Deck-1536x864.jpg"
        alt="mission"
        className="w-full h-full object-cover rounded-2xl shadow-xl clip-mission"
      />
    </div>

    {/* 👉 Right Side Text */}
    <div>
      <h3 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-6">Our Mission & Vision</h3>
      
      {/* ✅ Mission */}
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-purple-600 mb-2">🎯 Our Mission</h4>
        <p className="text-gray-700">
          To empower individuals to grow, learn, and earn through skill exchange. We want to make talent accessible and opportunity borderless.
        </p>
      </div>

      {/* ✅ Vision */}
      <div>
        <h4 className="text-xl font-semibold text-purple-600 mb-2">🚀 Our Vision</h4>
        <p className="text-gray-700">
          To become the leading global platform where skill-sharing becomes the new way of learning, collaborating, and earning.
        </p>
      </div>
    </div>
  </div>
</div>



{/* 💼 Meet the Team – Professional Design */}
<div className="bg-gradient-to-r from-purple-50 to-blue-50 py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-4">Our Core Team</h2>
    <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
      The minds and hearts behind SkillBarter — combining tech, creativity, and passion to make talent accessible.
    </p>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* 👩‍💻 Team Member 1 */}
      <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition duration-300">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="tayaba"
          className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-purple-300"
        />
        <h4 className="text-xl font-bold text-purple-700">Tayaba Tariq</h4>
        <p className="text-sm text-gray-600 mb-2">Founder | Frontend Developer</p>
        <p className="text-gray-500 text-sm">
          Passionate about React, smooth UI/UX, and building meaningful user experiences.
        </p>
      </div>

      {/* 👨‍💻 Team Member 2 */}
      <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition duration-300">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="ali"
          className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-purple-300"
        />
        <h4 className="text-xl font-bold text-purple-700">Ali Raza</h4>
        <p className="text-sm text-gray-600 mb-2">Backend Developer</p>
        <p className="text-gray-500 text-sm">
          API architect & security-focused dev, building scalable Node.js backends.
        </p>
      </div>

      {/* 👩 Team Member 3 */}
      <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition duration-300">
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="zainab"
          className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-purple-300"
        />
        <h4 className="text-xl font-bold text-purple-700">Zainab Malik</h4>
        <p className="text-sm text-gray-600 mb-2">UI/UX Designer</p>
        <p className="text-gray-500 text-sm">
          Designing clean and engaging user interfaces using Figma and accessibility best practices.
        </p>
      </div>
    </div>
  </div>
</div>


{/* 🌱 Our Core Values Section */}
<div className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-6">
      Our Core Values
    </h2>
    <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
      At SkillBarter, we operate with integrity, encourage innovation, and aim to make skill-sharing meaningful and accessible for everyone.
    </p>

    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
      {/* 🎯 Value 1 */}
      <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-md transition">
        <h4 className="text-2xl font-bold text-purple-700 mb-2">🤝 Collaboration</h4>
        <p className="text-gray-600 text-sm">
          We believe in the power of partnerships and shared success through mutual skill exchange.
        </p>
      </div>

      {/* 💡 Value 2 */}
      <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-md transition">
        <h4 className="text-2xl font-bold text-purple-700 mb-2">💡 Innovation</h4>
        <p className="text-gray-600 text-sm">
          We continuously improve and explore new ideas to empower people through digital skills.
        </p>
      </div>

      {/* 🛡️ Value 3 */}
      <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-md transition">
        <h4 className="text-2xl font-bold text-purple-700 mb-2">🛡️ Integrity</h4>
        <p className="text-gray-600 text-sm">
          Trust is at the heart of everything. We value honesty, respect, and transparency.
        </p>
      </div>

      {/* 🚀 Value 4 */}
      <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-md transition">
        <h4 className="text-2xl font-bold text-purple-700 mb-2">🚀 Growth</h4>
        <p className="text-gray-600 text-sm">
          We help individuals grow their skills, network, and careers through meaningful collaborations.
        </p>
      </div>
    </div>
  </div>
</div>


{/* 🗓️ Our Journey Timeline Section */}
<div className="bg-gradient-to-r from-blue-50 to-purple-50 py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-6">
      Our Journey
    </h2>
    <p className="text-lg text-gray-600 mb-12">
      From an idea to a growing skill-sharing movement — here's how SkillBarter evolved.
    </p>

    <div className="relative border-l-4 border-purple-400 ml-4 space-y-10 text-left">
      {/* Timeline Step 1 */}
      <div className="pl-6 relative">
        <span className="absolute top-1 left-[-16px] w-4 h-4 bg-purple-500 rounded-full border-4 border-white"></span>
        <h4 className="text-xl font-bold text-purple-700">2023 – Idea Born 💡</h4>
        <p className="text-gray-700 mt-2">
          Tayaba came up with the idea of a platform where people could exchange skills instead of just applying for jobs.
        </p>
      </div>

      {/* Timeline Step 2 */}
      <div className="pl-6 relative">
        <span className="absolute top-1 left-[-16px] w-4 h-4 bg-purple-500 rounded-full border-4 border-white"></span>
        <h4 className="text-xl font-bold text-purple-700">2024 – MVP Launched 🚀</h4>
        <p className="text-gray-700 mt-2">
          We launched our first basic version with skill signup, login, and a few featured categories.
        </p>
      </div>

      {/* Timeline Step 3 */}
      <div className="pl-6 relative">
        <span className="absolute top-1 left-[-16px] w-4 h-4 bg-purple-500 rounded-full border-4 border-white"></span>
        <h4 className="text-xl font-bold text-purple-700">2025 – User Growth & Teams 👥</h4>
        <p className="text-gray-700 mt-2">
          SkillBarter grew with community support, added profile booking, review systems, and a full-stack team.
        </p>
      </div>

      {/* Timeline Step 4 */}
      <div className="pl-6 relative">
        <span className="absolute top-1 left-[-16px] w-4 h-4 bg-purple-500 rounded-full border-4 border-white"></span>
        <h4 className="text-xl font-bold text-purple-700">2026 – Expansion Ahead 🌍</h4>
        <p className="text-gray-700 mt-2">
          We're working on expanding features like real-time chat, AI matching, and international reach.
        </p>
      </div>
    </div>
  </div>
</div>


{/* 💬 Testimonials Section */}
<div className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-6">
      What Our Users Say
    </h2>
    <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
      Hear from the real talents and clients who’ve found success through SkillBarter.
    </p>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
      {/* 🧑‍💻 Testimonial 1 */}
      <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://randomuser.me/api/portraits/women/50.jpg"
            alt="user"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h4 className="text-purple-700 font-semibold">Ayesha Khan</h4>
            <p className="text-sm text-gray-500">Graphic Designer</p>
          </div>
        </div>
        <p className="text-gray-700 text-sm">
          “I exchanged design work for help with JavaScript — it was an amazing experience. SkillBarter made it seamless!”
        </p>
      </div>

      {/* 🧔 Testimonial 2 */}
      <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="user"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h4 className="text-purple-700 font-semibold">Ahmed Raza</h4>
            <p className="text-sm text-gray-500">Web Developer</p>
          </div>
        </div>
        <p className="text-gray-700 text-sm">
          “I posted a small backend task and found a talented freelancer in minutes. Way better than traditional job boards.”
        </p>
      </div>

      {/* 👩 Testimonial 3 */}
      <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://randomuser.me/api/portraits/women/30.jpg"
            alt="user"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h4 className="text-purple-700 font-semibold">Fatima Noor</h4>
            <p className="text-sm text-gray-500">Video Editor</p>
          </div>
        </div>
        <p className="text-gray-700 text-sm">
          “I’ve grown my skills and client base here. Love the idea of no money exchange for certain tasks — pure talent trade!”
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  )

}

export default Aboutheader