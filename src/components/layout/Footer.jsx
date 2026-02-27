import React from "react";
import Logo from "../ui/Logo";
import { BiWorld } from "react-icons/bi";
import { IoMdShare } from "react-icons/io";
import { VscMention } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="py-12 bg-(--secondary-bg) ">
      <div className="container grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div>
          <Logo />
          <p className="text-sm lg:text-lg mt-3 w-[85%] leading-7">
            نسعى في بيت الكتاب لربط القراء بالثقافة والمعرفة من خلال تجربة
            قرائية مميزة، مختارة بعناية لتلهم العقول وتغذي الأرواح.
          </p>
        </div>

        <div>
          <h3 className="text-xl mb-4 text-(--primary-color)">روابط سريعه</h3>

          <div className="flex flex-col gap-3 font-semibold text-sm">
            <a href="#" className="relative transition-all duration-300 hover:before:content-['>'] before:absolute hover:mr-2 before:-right-3 before:top-1/2 before:transform before:-translate-y-1/2">من نحن</a>
            <a href="#" className="relative transition-all duration-300 hover:before:content-['>'] before:absolute hover:mr-2 before:-right-3 before:top-1/2 before:transform before:-translate-y-1/2">اتصل بنا</a>
            <a href="#" className="relative transition-all duration-300 hover:before:content-['>'] before:absolute hover:mr-2 before:-right-3 before:top-1/2 before:transform before:-translate-y-1/2">بطاقات الهدايا</a>
            <a href="#" className="relative transition-all duration-300 hover:before:content-['>'] before:absolute hover:mr-2 before:-right-3 before:top-1/2 before:transform before:-translate-y-1/2">المدونه</a>
          </div>
        </div>

        <div>
          <h3 className="text-xl mb-4 text-(--primary-color)">الدعم السريع</h3>

          <div className="flex flex-col gap-3 font-semibold text-sm">
            <a href="#" className="relative transition-all duration-300 hover:before:content-['>'] before:absolute hover:mr-2 before:-right-3 before:top-1/2 before:transform before:-translate-y-1/2">الشحن والتواصل</a>
            <a href="#" className="relative transition-all duration-300 hover:before:content-['>'] before:absolute hover:mr-2 before:-right-3 before:top-1/2 before:transform before:-translate-y-1/2">الاسترجاع والاستبدال</a>
            <a href="#" className="relative transition-all duration-300 hover:before:content-['>'] before:absolute hover:mr-2 before:-right-3 before:top-1/2 before:transform before:-translate-y-1/2">الاسئله الشائعه</a>
            <a href="#" className="relative transition-all duration-300 hover:before:content-['>'] before:absolute hover:mr-2 before:-right-3 before:top-1/2 before:transform before:-translate-y-1/2">سياسه الخصوصيه</a>
          </div>
        </div>

        <div>
          <h3 className="text-xl mb-4">تواصل معنا</h3>

          <div className="mb-8 flex  gap-4 text-xl lg:text-3xl">
            <BiWorld />
            <VscMention />
            <IoMdShare />
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:scale-95 transition-all duration-300 w-fit">
            <div className="w-12 h-12 rounded-md  bg-(--whatsapp-color) flex justify-center items-center">
              <FaWhatsapp className="text-4xl text-gray-200 " />
            </div>
            <div className="flex flex-col">
              <span className="text-sm">تواصل عبر</span>
              <span className="text-lg">واتساب</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
