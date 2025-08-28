import React from "react";

const BreadCrumb = () => {
  const breadcrumbs = [
    { text: "Home", url: "/" },
    { text: "Categories", url: "/Categories/:categoryId" },
    // { text: "Men's Wear", url: "/computer-and-gadget/tablets" },
    // {
    //   text: "T Shirt",
    //   url: "/computer-and-gadget/tablets/apple-ipad-pro",
    // },
  ];

  return (
    <nav className="w-full pb-4 lg:px-10 px-4">
      <ol className="flex flex-wrap items-center text-sm text-gray-600">
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <li className="mx-1 flex items-center">
                <span className="text-gray-400">›</span>
              </li>
            )}
            <li>
              <a
                href={crumb.url}
                className={`hover:text-gray-800 ${
                  index === breadcrumbs.length - 1
                    ? "font-normal"
                    : "hover:underline"
                }`}
              >
                {crumb.text}
              </a>
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
