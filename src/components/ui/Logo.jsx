import React from "react";
import { FaBookOpen } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex gap-2 items-center text-xl lg:text-2xl cursor-pointer">
      <div className="text-gray-200 bg-(--primary-color) lg:w-10 w-8 h-8 lg:h-10 rounded-full flex justify-center items-center">
        <FaBookOpen />
      </div>

      <span className="font-semibold">بيت الكتاب</span>
    </div>
  );
}

export default Logo;
