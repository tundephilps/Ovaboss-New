import React from "react";
import BlogCard from "./BlogCard";

const AlsoLike = () => {
  return (
    <div className="py-12 max-w-7xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        You may also like
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default AlsoLike;
