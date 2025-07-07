import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Userownprofile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const email = localStorage.getItem('email');

  useEffect(() => {
    if (!email) {
      setTimeout(() => navigate('/login'), 2000);
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://skillbrter.onrender.com/api/user/${email}`);
        if (res.data.success) {
          setUser(res.data.user);
          setPreviewImage(res.data.user.profileImage || 'https://via.placeholder.com/150');
        }
      } catch (err) {
        console.error("❌ Failed to fetch user:", err);
      }
    };

    fetchUser();
  }, [email, navigate]);

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

  const handleSave = async () => {
    try {
      console.log("Updated user data to send to backend:", user);
      setEditMode(false);
    } catch (err) {
      console.error("❌ Error saving profile:", err);
    }
  };

  if (!email) {
    return (
      <p className="text-center mt-10 text-red-500 font-semibold">
        Please login first to view your profile. Redirecting...
      </p>
    );
  }

  if (!user) {
    return (
      <p className="text-center mt-10 text-purple-600 font-medium">
        Loading profile...
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10 mt-12">
      <div className="flex flex-col items-center mb-8">
        <img
          src={previewImage}
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-purple-600 object-cover mb-4"
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
            className="text-center text-3xl font-bold text-gray-800 border-b border-gray-300 focus:outline-none mb-2"
          />
        ) : (
          <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
        )}
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { label: 'Phone', name: 'phone' },
          { label: 'Role', name: 'role' },
          { label: 'Location', name: 'location' },
          { label: 'Skills Have', name: 'skillsHave' },
          { label: 'Skills Want', name: 'skillsWant' },
        ].map(({ label, name, type = 'text' }) => (
          <div key={name}>
            <label className="block text-gray-600 font-medium mb-1">{label}</label>
            {editMode ? (
              <input
                type={type}
                name={name}
                value={user[name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            ) : (
              <p className="text-gray-800 font-medium">
                {name === 'password' ? '••••••••' : user[name]}
              </p>
            )}
          </div>
        ))}

        <div className="sm:col-span-2">
          <label className="block text-gray-600 font-medium mb-1">About Me</label>
          {editMode ? (
            <textarea
              name="description"
              value={user.description}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          ) : (
            <p className="text-gray-700">{user.description}</p>
          )}
        </div>
      </div>

      <div className="mt-10 flex justify-center space-x-6">
        {editMode ? (
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Userownprofile;
