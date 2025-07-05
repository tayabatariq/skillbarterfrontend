import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const UserCardList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);

  // 🔽 Fetch Users from Backend
  useEffect(() => {
    axios
      .get("https://skillbrter.onrender.com/api/users")
      .then((res) => {
        console.log("Fetched users:", res.data);
        setUsers(res.data);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  // 🔍 Filter by skillsHave safely
  const filteredUsers = users.filter((user) => {
    const skillsArray =
      typeof user.skillsHave === "string"
        ? user.skillsHave.split(",").map((s) => s.trim().toLowerCase())
        : user.skillsHave;

    return (
      Array.isArray(skillsArray) &&
      skillsArray.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  });

  return (
    <div className="max-w-full px-6 py-10 bg-gray-100 min-h-screen">
      {/* Search Bar */}
      <div className="relative z-0 mb-8 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search by skill..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
        />
        <Search className="absolute left-3 top-3.5 text-gray-500" size={20} />
      </div>

      {/* Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredUsers.map((user) => (
         <Link
  to={`/user/${user._id}`}
  state={{
    name: user.name,
    email: user.email,
    phone: user.phone, // hidden in card, used in profile
    location: user.location, // hidden in card, used in profile
    role: user.role, // hidden in card, used in profile

    description: user.description, // hidden in card, used in profile
    skillsHave: Array.isArray(user.skillsHave)
      ? user.skillsHave
      : user.skillsHave?.split(","),
    skillsWant: Array.isArray(user.skillsWant)
      ? user.skillsWant
      : user.skillsWant?.split(","),
    image:
      "https://img.freepik.com/premium-photo/cute-little-girls-picture-ai-generated_1003721-472.jpg",
  }}
  key={user._id}
>
  <div className="bg-white rounded-2xl shadow-md p-6 transition hover:shadow-xl hover:cursor-pointer">
    <div className="flex flex-col items-center">
      <img
        src="https://img.freepik.com/premium-photo/cute-little-girls-picture-ai-generated_1003721-472.jpg"
        alt={user.name}
        className="w-24 h-24 rounded-full border-4 border-purple-200 mb-4"
      />
      <h2 className="text-lg font-bold text-gray-800">
        {user.name || "No Name"}
      </h2>
      <p className="text-sm text-gray-500">{user.email}</p>
    </div>

    <div className="mt-6">
      <h3 className="font-medium text-sm text-gray-600 mb-1">Knows:</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {(Array.isArray(user.skillsHave)
          ? user.skillsHave
          : user.skillsHave?.split(",")
        )?.map((skill, index) => (
          <span
            key={index}
            className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium"
          >
            {skill.trim()}
          </span>
        ))}
      </div>

      <h3 className="font-medium text-sm text-gray-600 mb-1">Wants to Learn:</h3>
      <div className="flex flex-wrap gap-2">
        {(Array.isArray(user.skillsWant)
          ? user.skillsWant
          : user.skillsWant?.split(",")
        )?.map((skill, index) => (
          <span
            key={index}
            className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium"
          >
            {skill.trim()}
          </span>
        ))}
      </div>
    </div>
  </div>
</Link>

        ))}

        {filteredUsers.length === 0 && (
          <p className="text-center col-span-full text-gray-500 text-lg font-medium">
            No users found for "{searchTerm}"
          </p>
        )}
      </div>
    </div>
  );
};

export default UserCardList;
