// src/pages/Home.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Homecarosal() {
  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        showArrows={true}
      >
        {/* 🚀 Slide 1 */}
        <div className="relative">
          <img
            className="w-full h-[90vh] object-cover"
            src="https://xqsuperschool.org/rethinktogether/wp-content/uploads/sites/5/2020/11/Knowledge-exchange-scaled-e1576006764956-1.jpg"
            alt="slide 1"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-6">
            <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
              Discover a New Way <br /> to Share and Grow Skills
            </h2>
            <p className="text-lg sm:text-2xl mb-8 max-w-4xl">
              SkillBarter is your gateway to a global network where individuals trade knowledge, expertise, and real-world skills. Whether you're an artist, a coder, or a mentor — there’s a place for you to shine.
            </p>
            <div className="space-x-6">
              <a href="/signup" className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 text-lg rounded-xl font-semibold shadow-lg">
                Join as a Talent
              </a>
              <a href="/contact" className="bg-white text-purple-700 border border-purple-600 px-8 py-3 text-lg rounded-xl font-semibold hover:bg-purple-100 shadow-lg">
                Hire a Talent
              </a>
            </div>
          </div>
        </div>

        {/* 💼 Slide 2 */}
        <div className="relative">
          <img
            className="w-full h-[90vh] object-cover"
            src="https://media.istockphoto.com/id/1319404394/photo/skills-learning-personal-development-finance-competency-business-concept.jpg?s=170667a&w=0&k=20&c=182hXsMOWb_5Gckmd3rT-KRnrDm8uQqzuNzw98_wt7c="
            alt="slide 2"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-6">
            <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
              Empower Your Passion, <br /> Earn With Your Talent
            </h2>
            <p className="text-lg sm:text-2xl mb-8 max-w-4xl">
              Why keep your skills to yourself when you can earn, grow, and contribute to meaningful projects? SkillBarter connects passionate individuals with those who need their expertise — no boundaries, just opportunities.
            </p>
            <div className="space-x-6">
              <a href="/signup" className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 text-lg rounded-xl font-semibold shadow-lg">
                Get Started
              </a>
              <a href="/contact" className="bg-white text-purple-700 border border-purple-600 px-8 py-3 text-lg rounded-xl font-semibold hover:bg-purple-100 shadow-lg">
                Explore Talents
              </a>
            </div>
          </div>
        </div>

        {/* 🌟 Slide 3 */}
        <div className="relative">
          <img
            className="w-full h-[90vh] object-cover"
            src="https://shooliniuniversity.com/blog/wp-content/uploads/2022/11/Life-Skills.jpg"
            alt="slide 3"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-6">
            <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
              Build Connections, <br /> Create a Skill-Based Future
            </h2>
            <p className="text-lg sm:text-2xl mb-8 max-w-4xl">
              Be part of a powerful ecosystem where skills are the currency. Collaborate with developers, designers, marketers, and dreamers just like you. Your next big opportunity might be just one click away.
            </p>
            <div className="space-x-6">
              <a href="/signup" className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 text-lg rounded-xl font-semibold shadow-lg">
                Become a Member
              </a>
              <a href="/contact" className="bg-white text-purple-700 border border-purple-600 px-8 py-3 text-lg rounded-xl font-semibold hover:bg-purple-100 shadow-lg">
                Post a Project
              </a>
            </div>
          </div>
        </div>
      </Carousel>
      
    </div>
  );
}
