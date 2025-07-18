import React from "react";
import BlogCard from "../../components/Ecommerce/Blog/BlogCard";
import BlogCard2 from "../../components/Ecommerce/Blog/BlogCard2";
import SearchFilter from "../../components/Ecommerce/Blog/SearchFilter";
import Pagination from "../../components/Ecommerce/Blog/Pagination";

const Blog = () => {
  return (
    <div className="lg:p-12 p-4 bg-[#faf9f9] ">
      <SearchFilter />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-w-7xl mx-auto">
        <div>
          {" "}
          <BlogCard />
        </div>
        <div className="space-y-2">
          <BlogCard2 />

          <BlogCard2 />
        </div>
      </div>
      <div className="grid lg:grid-cols-3  grid-cols-1 max-w-7xl mx-auto gap-6 pt-12">
        <BlogCard /> <BlogCard /> <BlogCard />
      </div>

      <Pagination />
    </div>
  );
};

export default Blog;
