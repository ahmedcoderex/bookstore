import React from "react";
import { CiSearch } from "react-icons/ci";

function InputSearch() {
  return (
    <div
      className="flex items-center gap-2
                  bg-blue-50 rounded-xl px-3 text-lg lg:text-xl"
    >
      <CiSearch />
      <input
        type="text"
        className=" flex-1 
                    outline-none border-none p-2"
      />
    </div>
  );
}

export default InputSearch;
