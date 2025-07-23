import React, { useState } from "react";
import { MdPhoto } from "react-icons/md";
import Avatar from "../../../assets/Avatar.png";

import { BsEmojiSmile } from "react-icons/bs";

const CreatePost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow p-4 w-full  mx-auto">
        <h2 className="text-gray-800 font-semibold mb-4">Create a post</h2>

        <div className="flex items-start gap-3 mb-4">
          {/* Avatar */}
          <img
            src={Avatar} // Replace with actual profile image path
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          {/* Input box */}
          <input
            type="text"
            placeholder="Write something here..."
            readOnly
            onClick={() => setIsModalOpen(true)}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 cursor-pointer text-gray-600"
          />
        </div>
        <hr />
        {/* Photo/Video button */}
        <button className="flex items-center gap-2 text-yellow-500 font-medium hover:bg-yellow-50 px-3 py-2 rounded">
          <MdPhoto className="text-xl" />
          Photo/Video
        </button>
      </div>

      {/* Full Post Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xl p-5 relative">
            {/* User Info */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={Avatar}
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">
                  Fatimah Oladigbolu
                </h3>
                <p className="text-sm text-gray-500">Personal Customer</p>
              </div>
            </div>

            {/* Text area */}
            <textarea
              rows="4"
              placeholder="What product do you want to talk about?"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-yellow-400 text-gray-800"
            />

            {/* Action row */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-4">
                <BsEmojiSmile className="text-xl text-gray-600 cursor-pointer" />
                <MdPhoto className="text-xl text-yellow-500 cursor-pointer" />
              </div>
              <button
                className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500"
                onClick={() => setIsModalOpen(false)}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePost;
