import React, { useState } from "react";
import axios from "axios";
import { IoSend } from "react-icons/io5";



export default function ChatBot() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = input;
  setChat((prev) => [...prev, { type: "user", text: userMessage }]);
  setInput("");

  try {
    const res = await axios.post("https://skillbrter.onrender.com/api/chatbot", {
      message: userMessage,
    });
    setChat((prev) => [...prev, { type: "bot", text: res.data.reply }]);
  } catch (error) {
  console.error("Axios Error:", error); // 👈 This will help you debug
  console.error("Error response:", error.response); // More specific
  setChat((prev) => [...prev, { type: "bot", text: "Error: Unable to get response." }]);
}

};

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-purple-800 transition"
      >
        💬 Chat
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="mt-2 w-80 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
          <div className="bg-purple-700 text-white px-4 py-2 font-bold">
            SkillBarter Assistant
          </div>
          <div className="p-3 h-64 overflow-y-auto space-y-2 text-sm">
            {chat.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2 rounded-lg max-w-xs ${
                    msg.type === "user"
                      ? "bg-purple-100 text-right"
                      : "bg-gray-100 text-left"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center border-t px-2 py-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask something..."
              className="flex-grow border rounded px-3 py-1 text-sm focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="ml-2 text-purple-700 hover:text-purple-900"
            >
              <IoSend size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
