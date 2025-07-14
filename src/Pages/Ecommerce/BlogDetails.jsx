import React from "react";
import BlogArticle from "../../components/Ecommerce/Blog/BlogArticle";
import BlogCard from "../../components/Ecommerce/Blog/BlogCard";
import CategoriesSidebar from "../../components/Ecommerce/Blog/CategoriesSidebar";
import AlsoLike from "../../components/Ecommerce/Blog/AlsoLike";

const BlogDetails = () => {
  return (
    <div className="  bg-[#faf9f9] py-12">
      <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto bg-[#faf9f9]">
        <div className="col-span-2">
          <BlogArticle />
        </div>
        <div className=" space-y-4">
          <CategoriesSidebar />

          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Latest News
          </h2>
          <BlogCard />
          <BlogCard />
        </div>
      </div>

      <AlsoLike />
    </div>
  );
};

export default BlogDetails;
