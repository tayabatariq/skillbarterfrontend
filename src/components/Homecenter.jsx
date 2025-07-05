import React from 'react'

const Homecenter = () => {
  return (
    <>
    {/* 🎯 Popular Skill Categories Section */}
<div className="bg-gray-50 py-16 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-6">
      Explore Popular Skill Categories
    </h2>
    <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
      Find top in-demand skills being exchanged, shared, and offered by talented individuals around the world.
    </p>

    <div className="grid md:grid-cols-3 gap-8 text-left">
      {/* Category 1 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-purple-600 mb-2">💻 Web Development</h3>
        <p className="text-gray-600">
          Frontend, backend, full-stack — from landing pages to complex apps.
        </p>
      </div>

      {/* Category 2 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-purple-600 mb-2">🎨 Graphic Design</h3>
        <p className="text-gray-600">
          Logos, branding, UI/UX, and social media visuals made creative.
        </p>
      </div>

      {/* Category 3 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-purple-600 mb-2">🎥 Video Editing</h3>
        <p className="text-gray-600">
          Short videos, intros, vlogs, reels and cinematic edits.
        </p>
      </div>

      {/* Category 4 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-purple-600 mb-2">✍️ Content Writing</h3>
        <p className="text-gray-600">
          SEO blogs, copywriting, articles, and creative writing services.
        </p>
      </div>

      {/* Category 5 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-purple-600 mb-2">📈 Digital Marketing</h3>
        <p className="text-gray-600">
          Social media, email marketing, SEO, and paid ad strategy.
        </p>
      </div>

      {/* Category 6 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-purple-600 mb-2">🤖 AI & Data Science</h3>
        <p className="text-gray-600">
          Data analysis, Python automation, and ML model building.
        </p>
      </div>
    </div>
  </div>
</div>

 {/* 🌟 Why Choose SkillBarter Section with Hover Expand */}
<div className="max-w-7xl mx-auto px-6 py-16 text-center">
  <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-purple-700">
    Why Choose SkillBarter?
  </h2>
  <p className="text-lg sm:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
    SkillBarter is more than just a platform — it's a thriving digital community where individuals exchange skills, connect with opportunities, and build careers without boundaries.
  </p>

  <div className="grid md:grid-cols-3 gap-8 text-left">
    {/* ✅ Feature 1 */}
    <div className="bg-white rounded-xl shadow-lg p-6 border border-purple-100 group transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl font-semibold text-purple-600 mb-2">🌐 Skill Exchange</h3>
      <p className="text-gray-600">
        Trade your expertise with others — graphic design for coding, writing for video editing.
      </p>
      <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 mt-2 text-gray-500">
        <p>
          You can grow faster by learning from others while offering your own knowledge. It's a win-win for all users.
        </p>
      </div>
    </div>

    {/* ✅ Feature 2 */}
    <div className="bg-white rounded-xl shadow-lg p-6 border border-purple-100 group transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl font-semibold text-purple-600 mb-2">🚀 Freelance Projects</h3>
      <p className="text-gray-600">
        Post or find freelance tasks and get connected to the right people for the job.
      </p>
      <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 mt-2 text-gray-500">
        <p>
          Whether you're a business or an individual, the platform enables you to manage work without middlemen.
        </p>
      </div>
    </div>

    {/* ✅ Feature 3 */}
    <div className="bg-white rounded-xl shadow-lg p-6 border border-purple-100 group transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl font-semibold text-purple-600 mb-2">🤝 Community Growth</h3>
      <p className="text-gray-600">
        Join a growing network of learners, creators, and professionals.
      </p>
      <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 mt-2 text-gray-500">
        <p>
          Attend live events, share updates, ask questions, and build long-term professional relationships.
        </p>
      </div>
    </div>
  </div>
</div>








{/* how it <word></word> */}


{/* 🚀 How It Works Section with Hover Animations */}
<div className="bg-gray-50 py-16 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-6">
      How SkillBarter Works?
    </h2>
    <p className="text-lg sm:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
      Whether you're offering your skills or searching for talent, SkillBarter makes the process simple and fast. Follow these 3 easy steps:
    </p>

    <div className="grid md:grid-cols-3 gap-10 text-left">
      {/* 🔍 Step 1 */}
      <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-purple-600 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-2xl font-semibold text-purple-700 mb-2">1. Create Your Profile</h3>
        <p className="text-gray-600">
          Sign up and tell us about your skills, experience, and what you're looking for. Build a strong portfolio to attract the right people.
        </p>
      </div>

      {/* 🔄 Step 2 */}
      <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-purple-600 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-2xl font-semibold text-purple-700 mb-2">2. Connect & Collaborate</h3>
        <p className="text-gray-600">
          Browse talents or post your needs. Start direct conversations, exchange ideas, and find the perfect match to begin working together.
        </p>
      </div>

      {/* ✅ Step 3 */}
      <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-purple-600 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-2xl font-semibold text-purple-700 mb-2">3. Deliver & Grow</h3>
        <p className="text-gray-600">
          Complete projects, earn ratings, and grow your profile. The more you collaborate, the stronger your network and visibility becomes.
        </p>
      </div>
    </div>
  </div>
</div>





{/* next <section></section> */}
{/* 💬 Call to Action Section with Background Image */}
<div
  className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1350&q=80')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 text-white text-center px-6 max-w-3xl">
    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
      Ready to Get Started with SkillBarter?
    </h2>
    <p className="text-lg sm:text-xl mb-8">
      Connect, collaborate, and grow with people who value your skills. Don’t wait to take the next step in your journey.
    </p>
    <a
      href="/contact"
      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg"
    >
      Contact Us
    </a>
  </div>
</div>




{/* testiomonaii */}
{/* 🙌 Testimonials Section - Updated with 6 Cards */}
<div className="bg-white py-16 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-6">
      What Our Users Say
    </h2>
    <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
      Hear from professionals and learners who’ve used SkillBarter to grow their careers and connect with amazing people.
    </p>

    <div className="grid md:grid-cols-3 gap-8 text-left">
      {/* Testimonial 1 */}
      <div className="bg-gray-50 rounded-xl shadow-lg p-6 transition transform hover:scale-105 duration-300">
        <p className="text-gray-700 mb-4">
          “SkillBarter gave me the platform to showcase my UI/UX skills and connect with clients globally. Loved the experience!”
        </p>
        <div>
          <h4 className="font-bold text-purple-700">Areeba Khan</h4>
          <span className="text-sm text-gray-500">Freelance Designer</span>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-gray-50 rounded-xl shadow-lg p-6 transition transform hover:scale-105 duration-300">
        <p className="text-gray-700 mb-4">
          “From project collaborations to paid gigs, SkillBarter helped me turn my part-time skills into a growing career.”
        </p>
        <div>
          <h4 className="font-bold text-purple-700">Zaid Ali</h4>
          <span className="text-sm text-gray-500">Full Stack Developer</span>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-gray-50 rounded-xl shadow-lg p-6 transition transform hover:scale-105 duration-300">
        <p className="text-gray-700 mb-4">
          “It’s amazing to meet like-minded people and learn from real professionals without spending a fortune. Highly recommended!”
        </p>
        <div>
          <h4 className="font-bold text-purple-700">Fatima Raza</h4>
          <span className="text-sm text-gray-500">Marketing Intern</span>
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="bg-gray-50 rounded-xl shadow-lg p-6 transition transform hover:scale-105 duration-300">
        <p className="text-gray-700 mb-4">
          “I exchanged my logo designing skills with a video editor and it turned into a full-time collaboration. SkillBarter is genius!”
        </p>
        <div>
          <h4 className="font-bold text-purple-700">Usman Sheikh</h4>
          <span className="text-sm text-gray-500">Brand Designer</span>
        </div>
      </div>

      {/* Testimonial 5 */}
      <div className="bg-gray-50 rounded-xl shadow-lg p-6 transition transform hover:scale-105 duration-300">
        <p className="text-gray-700 mb-4">
          “SkillBarter gave me confidence to offer my coding skills publicly. I landed my first internship through this platform!”
        </p>
        <div>
          <h4 className="font-bold text-purple-700">Hira Rizwan</h4>
          <span className="text-sm text-gray-500">Frontend Developer</span>
        </div>
      </div>

      {/* Testimonial 6 */}
      <div className="bg-gray-50 rounded-xl shadow-lg p-6 transition transform hover:scale-105 duration-300">
        <p className="text-gray-700 mb-4">
          “It’s the perfect place for students and beginners. Learn, share, and grow — together. Simple, safe, and super helpful.”
        </p>
        <div>
          <h4 className="font-bold text-purple-700">Ahmed Jutt</h4>
          <span className="text-sm text-gray-500">Student & Editor</span>
        </div>
      </div>
    </div>
  </div>
</div>


{/* faqs */}
<div className="bg-white py-16 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-6">
      Frequently Asked Questions
    </h2>
    <p className="text-lg text-gray-600 mb-12">
      Got a question? We’ve listed some of the most common ones below.
    </p>

    <div className="space-y-4 text-left">
      {/* FAQ 1 */}
      <details className="bg-gray-50 p-6 rounded-xl shadow group cursor-pointer transition-all duration-300">
        <summary className="text-xl font-semibold text-purple-600 mb-2 outline-none group-open:mb-4 transition duration-300">
          What is SkillBarter?
        </summary>
        <p className="text-gray-700">
          SkillBarter is a platform where users can exchange skills, offer freelance services, or collaborate on projects — without traditional job barriers.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="bg-gray-50 p-6 rounded-xl shadow group cursor-pointer transition-all duration-300">
        <summary className="text-xl font-semibold text-purple-600 mb-2 outline-none group-open:mb-4 transition duration-300">
          Is SkillBarter free to use?
        </summary>
        <p className="text-gray-700">
          Yes! Creating an account and connecting with others is completely free. You can exchange services or negotiate your own terms.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="bg-gray-50 p-6 rounded-xl shadow group cursor-pointer transition-all duration-300">
        <summary className="text-xl font-semibold text-purple-600 mb-2 outline-none group-open:mb-4 transition duration-300">
          Can I both offer and request skills?
        </summary>
        <p className="text-gray-700">
          Absolutely! You can list what you’re good at and also what you need help with. It’s a two-way collaboration system.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-gray-50 p-6 rounded-xl shadow group cursor-pointer transition-all duration-300">
        <summary className="text-xl font-semibold text-purple-600 mb-2 outline-none group-open:mb-4 transition duration-300">
          How do I contact a talent?
        </summary>
        <p className="text-gray-700">
          Just view their profile and use the contact or booking option to start a chat or send a proposal.
        </p>
      </details>
    </div>
  </div>
</div>




</>
  )
}

export default Homecenter