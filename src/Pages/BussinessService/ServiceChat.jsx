import React from "react";
import BreadCrumb from "../../components/BusinessService/ServiceChat/BreadCrumb";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

// Sample image URLs or import your own
const avatars = {
  "John Wick": "https://i.pravatar.cc/150?img=1",
  "Adetola Mariam": "https://i.pravatar.cc/150?img=2",
  "Dolapo Grace": "https://i.pravatar.cc/150?img=3",
  "Cameron Williamson": "https://i.pravatar.cc/150?img=4",
  "Jerome Bell": "https://i.pravatar.cc/150?img=5",
  "Esther Howard": "https://i.pravatar.cc/150?img=6",
  "Theresa Webb": "https://i.pravatar.cc/150?img=7",
  "Creative Service": "https://i.pravatar.cc/150?img=8",
  You: "https://i.pravatar.cc/150?img=9",
};

const messagesList = [
  {
    name: "John Wick",
    preview: "Hi Creative Service, hope this m...",
    date: "Fri",
  },
  {
    name: "Adetola Mariam",
    preview: "Hi Creative Service, hope this m...",
    date: "Wed",
  },
  {
    name: "Dolapo Grace",
    preview: "Creative Service Kindly note...",
    date: "Apr 11",
  },
  {
    name: "Cameron Williamson",
    preview: "Hi Hitek Financials, I hope this me",
    date: "Mar 15",
  },
  {
    name: "Jerome Bell",
    preview: "Hi MacTay Group, I hope this mes",
    date: "Mar 13",
  },
  {
    name: "Esther Howard",
    preview: "Hi Ovaboss, Am happy to be part",
    date: "Feb 20",
  },
  {
    name: "Theresa Webb",
    preview: "Hi MyNursera, I hope this messag",
    date: "Jan 30",
  },
];

const ServiceChat = () => {
  const [selectedChat, setSelectedChat] = useState("John Wick");
  const [showChat, setShowChat] = useState(false);
  const [chat, setChat] = useState([
    {
      sender: "You",
      text: "Hi Creative Business, I want a corporate Logo for my startup company.\nHow do you operate and when can this Logo be done? Let me know your method of operation.",
      time: "18:18",
    },
    {
      sender: "Creative Service",
      text: "Hi John Wick, thanks for reaching out to us. We are professional Logo design builders.\n\nWe will create multiple logo designs that align with the business objective and goal. We plan to finish within four days. First we select a color palette style and then we start different logo",
      time: "18:18",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setChat([
      ...chat,
      {
        sender: "You",
        text: input,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setInput("");
  };

  const handleSelectChat = (name) => {
    setSelectedChat(name);
    setShowChat(true);
  };

  const handleBackToList = () => {
    setShowChat(false);
  };

  return (
    <div className="bg-[#faf9f9] py-4 md:py-8">
      <BreadCrumb />

      <div className="flex h-screen bg-gray-50 lg:px-10 p-2 md:p-4 gap-4">
        {/* Messages List - Always visible on desktop, only visible on mobile when showChat is false */}
        <div
          className={`${
            showChat ? "hidden" : "w-full"
          } md:block md:w-1/3 bg-white rounded-lg shadow py-4 overflow-y-auto`}
        >
          <h2 className="text-lg font-semibold mb-4 px-4">Messages</h2>
          <ul className="space-y-4">
            {messagesList.map((msg, i) => (
              <li
                key={i}
                className="flex items-start gap-3 cursor-pointer hover:border-l-[#2600ff] hover:border-l-2 hover:bg-gray-100 px-4 py-2"
                onClick={() => handleSelectChat(msg.name)}
              >
                <img
                  src={avatars[msg.name]}
                  alt={msg.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold text-sm">{msg.name}</p>
                  <p className="text-xs text-gray-500">{msg.preview}</p>
                </div>
                <p className="text-xs text-gray-400">{msg.date}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Window - Always visible on desktop, only visible on mobile when showChat is true */}
        <div
          className={`${
            !showChat ? "hidden" : "w-full"
          } md:block md:w-2/3 bg-white rounded-lg shadow flex flex-col min-h-full`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-3">
              {/* Back button - only visible on mobile */}
              <button
                className="md:hidden text-gray-600"
                onClick={handleBackToList}
              >
                <FaArrowLeft />
              </button>

              <img
                src={avatars["Creative Service"]}
                alt="Creative Service"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold">Creative Service</h2>
                <span className="text-xs text-green-600">Online</span>
              </div>
            </div>
            <button className="bg-[#FFD700] hover:bg-yellow-500 text-sm px-4 py-2 rounded text-white font-medium">
              Create Milestone
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-6 overflow-y-auto h-[70vh]">
            {chat.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${
                  msg.sender === "You" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender !== "You" && (
                  <img
                    src={avatars[msg.sender]}
                    alt={msg.sender}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                <div className="max-w-md">
                  <p className="text-xs text-gray-500 mb-1">
                    {msg.sender} · {msg.time}
                  </p>
                  <div
                    className={`whitespace-pre-line p-3 rounded-md text-sm ${
                      msg.sender === "You"
                        ? "bg-gray-100 text-right"
                        : "bg-yellow-100"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
                {msg.sender === "You" && (
                  <img
                    src={avatars[msg.sender]}
                    alt={msg.sender}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="border-t p-4 flex gap-2">
            <input
              type="text"
              placeholder="Type your message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              onClick={handleSend}
              className="bg-[#FFD700] hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceChat;
