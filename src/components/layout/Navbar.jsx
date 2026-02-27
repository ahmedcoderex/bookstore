import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Button from "../ui/Button";
import { FiMenu } from "react-icons/fi";
import { motion } from "motion/react";
import Logo from "../ui/Logo";
import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [isOpenNavLinks, setIsOpenNavLinks] = useState(false);
  return (
    <nav
      className="h-18 flex items-center justify-between relative
    "
    >
      <div className="container flex items-center justify-between">
        <div className="flex gap-12 items-center">
          {/* Logo */}
          <Logo />
          {/*=== Logo ===*/}

          {/* Nav Link */}
          <div className="items-center gap-4 text-lg lg:text-xl hidden lg:flex">
            <NavLink
              to=""
              className={({ isActive }) =>
                `py-3 px-4 rounded-md transition-all duration-300 
                  hover:bg-(--primary-color) hover:text-gray-200
                  ${isActive ? "bg-(--primary-color) text-gray-200" : ""}`
              }
            >
              الرئيسيه
            </NavLink>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                `py-3 px-4 rounded-md transition-all duration-300 
                  hover:bg-(--primary-color) hover:text-gray-200
                  ${isActive ? "bg-(--primary-color) text-gray-200" : ""}`
              }
            >
              الكتب
            </NavLink>
            <NavLink
              to="/dashboard"
              className="py-3 px-4 rounded-md hover:bg-(--primary-color) hover:text-gray-200 transition-all duration-300"
            >
              لوحه التحكم
            </NavLink>
          </div>
          {/*=== Nav Link ===*/}
        </div>

        {/* Buttons & search icon */}
        <div className="hidden items-center gap-6 lg:flex">
          <div
            className="flex items-center gap-2
          bg-gray-200 rounded-xl px-3 text-lg lg:text-xl"
          >
            <CiSearch />
            <input
              type="text"
              className="
            outline-none border-none p-2"
            />
          </div>

          <Button text="تسجيل الدخول" />
        </div>
        {/*=== Buttons & search icon ===*/}

        {/* Show just in phone */}
        <>
          {/* Menu */}
          <motion.div
            initial={false}
            animate={{ scale: isOpenNavLinks ? 0.8 : 1 }}
            transition={{ duration: 0.3 }}
            className="text-2xl lg:hidden cursor-pointer "
            onClick={() => setIsOpenNavLinks(!isOpenNavLinks)}
          >
            {isOpenNavLinks ? <IoCloseSharp /> : <FiMenu />}
          </motion.div>
          {/*=== Menu ===*/}

          {isOpenNavLinks && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden z-50 lg:hidden bg-(--primary-color) absolute top-full w-full left-0 py-4"
            >
              <div className="container">
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

                <div className="flex flex-col text-gray-200 my-4">
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `w-full text-start py-3 px-4 rounded-md hover:text-(--primary-color) hover:bg-gray-200 transition-all duration-300
                  ${isActive ? "text-(--primary-color) bg-gray-200" : ""}`
                    }
                    onClick={() => setIsOpenNavLinks(false)}
                  >
                    الرئيسيه
                  </NavLink>
                  <NavLink
                    to="/books"
                    className={({ isActive }) =>
                      `w-full text-start py-3 px-4 rounded-md hover:text-(--primary-color) hover:bg-gray-200 transition-all duration-300
                  ${isActive ? "text-(--primary-color) bg-gray-200" : ""}`
                    }
                    onClick={() => setIsOpenNavLinks(false)}
                  >
                    الكتب
                  </NavLink>
                  <NavLink
                  to="/dashboard"
                    className={({ isActive }) =>
                      `w-full text-start py-3 px-4 rounded-md hover:text-(--primary-color) hover:bg-gray-200 transition-all duration-300
                  ${isActive ? "text-(--primary-color) bg-gray-200" : ""}`
                    }
                    onClick={() => setIsOpenNavLinks(false)}
                  >
                    لوحه التحكم
                  </NavLink>
                </div>
                <div>
                  <Button
                    text="تسجيل الدخول"
                    color="text-(--primary-color)"
                    bg="bg-gray-200"
                    width="w-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </>
        {/*=== Show just in phone ===*/}
      </div>
    </nav>
  );
}

export default Navbar;
