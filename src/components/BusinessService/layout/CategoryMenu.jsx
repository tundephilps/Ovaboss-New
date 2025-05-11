const categories = [
  "Graphics and Design",
  "Programming and Tech",
  "Legal Service",
  "Traveling",
  "Automotive",
  "Architect",
  "Repair Service",
];

const CategoryMenu = () => {
  return (
    <div className="bg-[#e5e5e5] py-4">
      <div className="flex justify-between lg:px-12 px-4  lg:space-x-8  lg:text-sm text-[8px]  text-gray-700 font-medium">
        {categories.map((category, index) => (
          <span key={index} className="hover:text-yellow-600 cursor-pointer">
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
