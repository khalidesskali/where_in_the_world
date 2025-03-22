import React from "react";

const Search = () => {
  return (
    <div className="relative text-dark-gray">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 absolute top-1/2 left-6 -translate-y-1/2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search for a country..."
        className="py-4 pl-16 focus:outline-none bg-white rounded-md w-full shadow-sm lg:w-[500px]"
      />
    </div>
  );
};

export default Search;
