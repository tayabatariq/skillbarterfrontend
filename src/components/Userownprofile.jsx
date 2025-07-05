import React, { useState } from 'react';

const Userownprofile = () => {
  const [user, setUser] = useState({
    name: 'Tayaba Tariq',
    email: 'tayaba@example.com',
    skill: 'React Development',
    location: 'Lahore, Pakistan',
    about:
      'I am a frontend developer specializing in React.js. Passionate about learning and teaching tech.',
    profileImage: 'https://via.placeholder.com/150',
  });

  const [editMode, setEditMode] = useState(false);
  const [previewImage, setPreviewImage] = useState(user.profileImage);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreviewImage(imageURL);
      setUser((prev) => ({ ...prev, profileImage: imageURL }));
    }
  };

  const handleSave = () => {
    setEditMode(false);
    console.log('Updated user:', user);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 mt-10">
      {/* Profile Image + Name */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={previewImage}
          alt="Profile"
          className="w-36 h-36 rounded-full border-4 border-purple-700 object-cover mb-4"
        />
        {editMode && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm text-gray-600 mb-4"
          />
        )}
        {editMode ? (
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="text-center text-2xl font-bold text-gray-800 border-b border-gray-300 focus:outline-none mb-2"
          />
        ) : (
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
        )}
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>

      {/* Profile Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-600 font-medium mb-1">Skill</label>
          {editMode ? (
            <input
              type="text"
              name="skill"
              value={user.skill}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          ) : (
            <p className="text-purple-700 font-semibold">{user.skill}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1">Location</label>
          {editMode ? (
            <input
              type="text"
              name="location"
              value={user.location}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          ) : (
            <p className="text-gray-700">{user.location}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className="block text-gray-600 font-medium mb-1">About Me</label>
          {editMode ? (
            <textarea
              name="about"
              value={user.about}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          ) : (
            <p className="text-gray-700">{user.about}</p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-center space-x-4">
        {editMode ? (
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-blue-400 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Userownprofile;
