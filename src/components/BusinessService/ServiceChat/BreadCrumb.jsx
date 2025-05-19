import React from "react";
import { GoHome } from "react-icons/go";

const BreadCrumb = () => {
  const breadcrumbs = [
    { text: <GoHome />, url: "/" },
    { text: "Graphics and Design", url: "/Fatima" },
    { text: "Business details", url: "/BusinessDetails" },
    { text: "Messages", url: "/ServiceChat" },
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
