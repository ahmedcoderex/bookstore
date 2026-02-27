import React, { useEffect, useRef, useState } from "react";
import { FaBook } from "react-icons/fa";

function Dashboard() {
  const titleRef = useRef();
  const [dataBook, setDataBook] = useState({
    title: "",
    description: "",
    image: "",
    count_pages: "",
    language: "",
    price: "",
    discount: "",
    publication_year: "",
    author: "",
    rating: "",
  });
  useEffect(() => titleRef.current.focus(), []);

  const fillDataBook = (e) => {
    const { name, value } = e.target;

    setDataBook({
      ...dataBook,
      [name]: value,
    });
  };

  const handleAddNewBook = (e) => {
    e.preventDefault();
  };
  return (
    <section className="py-12 bg-(--secondary-bg) min-h-[calc(100vh-360px)]">
      <div className="container flex justify-center">
        <div className="w-[75%] max-w-200 z-50 rounded-2xl p-8 rounded-2x">
          {/* Head */}
          <div className="flex justify-center items-center gap-2 bg-(--primary-color) py-4 rounded-md text-3xl text-gray-200 mb-8 text-center font-semibold ">
            <FaBook />
            <h3>اضافه كتاب جديد</h3>
          </div>
          {/*=== Head ===*/}

          {/* add new book */}
          <form
            onSubmit={(e) => handleAddNewBook(e)}
            className=" text-(--primary-color)  text-2xl flex flex-col gap-2"
          >
            <input
              ref={titleRef}
              className="py-4 px-2 rounded-2xl border border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
              type="text"
              placeholder="اسم الكتاب"
              name="title"
              value={dataBook.title}
              onChange={(e) => fillDataBook(e)}
            />
            <input
              className="py-4 px-2 rounded-2xl border border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
              type="text"
              placeholder="وصف الكتاب"
              name="description"
              value={dataBook.description}
              onChange={(e) => fillDataBook(e)}
            />
            <input
              className="py-4 px-2 rounded-2xl border border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
              type="text"
              placeholder="المؤلف"
              name="author"
              value={dataBook.author}
              onChange={(e) => fillDataBook(e)}
            />
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <input
                className="py-4 px-2 rounded-2xl border flex-1 border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
                type="number"
                placeholder="السعر"
                name="price"
                value={dataBook.price}
                onChange={(e) => fillDataBook(e)}
              />
              <input
                className="py-4 px-2 rounded-2xl border flex-1 border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
                type="number"
                placeholder="الخصم ان وجد"
                name="discount"
                value={dataBook.discount}
                onChange={(e) => fillDataBook(e)}
              />
            </div>
            <div className="flex gap-4 items-center flex-col lg:flex-row">
              <input
                className="py-4 px-2 rounded-2xl border flex-1 border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
                type="text"
                placeholder="التقييم العام"
                name="rating"
                value={dataBook.rating}
                onChange={(e) => fillDataBook(e)}
              />
              <input
                className="py-4 px-2 rounded-2xl border flex-1 border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
                type="text"
                placeholder="اللغه"
                name="language"
                value={dataBook.language}
                onChange={(e) => fillDataBook(e)}
              />
            </div>

            <div className="flex gap-4 items-center flex-col lg:flex-row">
              <input
                className="py-4 px-2 rounded-2xl border flex-1 border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
                type="number"
                placeholder="عدد الصفحات"
                name="count_pages"
                value={dataBook.count_pages}
                onChange={(e) => fillDataBook(e)}
              />
              <input
                className="py-4 px-2 rounded-2xl border flex-1 border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
                type="number"
                placeholder="سنه الانشاء"
                name="publication_year"
                value={dataBook.publication_year}
                onChange={(e) => fillDataBook(e)}
              />
            </div>
            <input
              className="py-4 px-2 rounded-2xl border border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
              type="text"
              placeholder="الصوره"
              name="image"
              value={dataBook.image}
              onChange={(e) => fillDataBook(e)}
            />

            <button className="py-4 bg-(--primary-color) text-gray-200 rounded-xl hover:font-bold transition-all duration-300">
              اضافه الكتاب
            </button>
          </form>
          {/*=== add new book ===*/}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
