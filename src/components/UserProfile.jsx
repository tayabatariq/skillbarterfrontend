import React from "react";
import { useParams, useLocation } from "react-router-dom";

const UserProfile = () => {
  const { userId } = useParams();
  const llocation = useLocation();

  const {
    name,
    email,
    skillsHave,
    skillsWant,
    image,
    phone,
    location,
    role,
    description,
  } = llocation.state || {};

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Profile Card */}
      <div className="bg-white rounded-3xl shadow-xl p-10 grid md:grid-cols-3 gap-10 items-start">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={image}
            alt={name}
            className="w-48 h-48 rounded-full border-4 border-purple-300 object-cover shadow-md"
          />
        </div>

        {/* Basic Info */}
        <div className="md:col-span-2 space-y-6">
          {/* Header Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{name}</h1>
            <div className="text-gray-600 space-y-1 text-base">
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
              <p>Role: {role}</p>
              <p>Location: {location}</p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Skills You Have</h2>
            <div className="flex flex-wrap gap-2">
              {skillsHave?.map((skill, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full font-medium"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Skills You Want to Learn</h2>
            <div className="flex flex-wrap gap-2">
              {skillsWant?.map((skill, i) => (
                <span
                  key={i}
                  className="bg-purple-100 text-purple-700 text-sm px-4 py-1 rounded-full font-medium"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">About Me</h2>
            <p className="text-gray-700 text-base leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
