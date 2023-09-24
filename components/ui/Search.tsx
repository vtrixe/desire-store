import React from "react";

const Search = () => {
  return (
    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </span>
      <input
        type="text"
        className="py-2 pl-10 pr-4 rounded-lg focus:outline-none focus:bg-white focus:text-gray-900 w-full"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;