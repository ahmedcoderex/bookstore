import React, { useEffect, useRef, useState } from "react";
import { FaBook } from "react-icons/fa";
import { toast } from "react-toastify";
import { supabase } from "../utils/supabaseClient";

const initialDataBook = {
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
  id_category: null,
  name_category: "",
};

function Dashboard() {
  const titleRef = useRef();
  const [categories, setCategories] = useState();
  const [dataBook, setDataBook] = useState(initialDataBook);
  useEffect(() => titleRef.current.focus(), []);

  const fillDataBook = (e) => {
    const { name, value } = e.target;

    setDataBook({
      ...dataBook,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from("category").select();
      if (error) toast.error(error.message);
      if (data) setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleAddNewBook = (e) => {
    e.preventDefault();
    if (!dataBook.title.trim()) {
      toast.error("يرجي ادخال اسم الكتاب");
      return;
    }
    if (!dataBook.description.trim()) {
      toast.error("يرجي ادخال وصف الكتاب");
      return;
    }
    if (!dataBook.language.trim()) {
      toast.error("يرجي ادخال لغه الكتاب");
      return;
    }
    if (!dataBook.image.trim()) {
      toast.error("يرجي ادخال صوره الكتاب");
      return;
    }
    if (!dataBook.author.trim()) {
      toast.error("يرجي ادخال مؤلف الكتاب");
      return;
    }
    if (!dataBook.price.trim()) {
      toast.error("يرجي ادخال سعر الكتاب");
      return;
    }
    if (!dataBook.publication_year.trim()) {
      toast.error("يرجي ادخال سنه نشر الكتاب");
      return;
    }
    if (!dataBook.rating.trim()) {
      toast.error("يرجي ادخال تقييم الكتاب");
      return;
    }
    if (!dataBook.count_pages.trim()) {
      toast.error("يرجي ادخال عدد صفحات الكتاب");
      return;
    }

    const sendDataIntoDatabase = async () => {
      try {
        const currentData = {
          title: dataBook.title,
          description: dataBook.description,
          author: dataBook.author,
          count_pages: dataBook.count_pages,
          publication_year: dataBook.publication_year,
          image: dataBook.image,
          price: dataBook.price,
          discount: dataBook.discount || 0,
          rating: dataBook.rating,
          language: dataBook.language,
          id_category: Number(dataBook.id_category),
          name_category: dataBook.name_category,
        };

        const { data, error } = await supabase
          .from("books")
          .insert([currentData])
          .select();

        if (error) throw error;

        console.log("Inserted Data:", data);
        setDataBook(initialDataBook);
        toast.success("Book added successfully ✅");
      } catch (error) {
        toast.error(error.message);
        console.error(error);
      }
    };
    sendDataIntoDatabase();
  };
  return (
    <section className="py-12 bg-(--secondary-bg) min-h-[calc(100vh-360px)]">
      <div className="container flex justify-center">
        <div className="w-full rounded-2xl py-8 px-2 rounded-2x bg-(--primary-color)/5">
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
            <textarea
              className="py-4 min-h-40 px-2 rounded-2xl border border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
              type="text"
              placeholder="وصف الكتاب"
              name="description"
              value={dataBook.description}
              onChange={(e) => fillDataBook(e)}
            ></textarea>

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
                className="py-4 w-full lg:w-fit px-2 rounded-2xl border flex-1 border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
                type="number"
                placeholder="السعر"
                name="price"
                value={dataBook.price}
                onChange={(e) => fillDataBook(e)}
              />
              <input
                className="py-4 w-full lg:w-fit px-2 rounded-2xl border flex-1 border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
                type="number"
                placeholder="الخصم ان وجد"
                name="discount"
                value={dataBook.discount}
                onChange={(e) => fillDataBook(e)}
              />
            </div>
            <div className="flex gap-4 items-center flex-col lg:flex-row">
              <input
                className="py-4 w-full lg:w-fit px-2 rounded-2xl border flex-1 border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
                type="text"
                placeholder="التقييم العام"
                name="rating"
                value={dataBook.rating}
                onChange={(e) => fillDataBook(e)}
              />
              <input
                className="py-4 w-full lg:w-fit px-2 rounded-2xl border flex-1 border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
                type="text"
                placeholder="اللغه"
                name="language"
                value={dataBook.language}
                onChange={(e) => fillDataBook(e)}
              />
            </div>

            <div className="flex gap-4 items-center flex-col lg:flex-row">
              <input
                className="py-4 w-full lg:w-fit px-2 rounded-2xl border flex-1 border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
                type="number"
                placeholder="عدد الصفحات"
                name="count_pages"
                value={dataBook.count_pages}
                onChange={(e) => fillDataBook(e)}
              />
              <input
                className="py-4 w-full lg:w-fit px-2 rounded-2xl border flex-1 border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
                type="number"
                placeholder="سنه الانشاء"
                name="publication_year"
                value={dataBook.publication_year}
                onChange={(e) => fillDataBook(e)}
              />
            </div>
            <div className="flex">
              <input
                className="h-22 py-4 px-2 flex-1 rounded-2xl border border-gray-400/50 outline-none hover:border-(--primary-color) transition-all duration-300 focus:border-(--primary-color)"
                type="text"
                placeholder="الصوره"
                name="image"
                value={dataBook.image}
                onChange={(e) => fillDataBook(e)}
              />

              <div className="w-22 h-22 rounded-2xl mr-4  overflow-hidden">
                {dataBook.image ? (
                  <img
                    src={dataBook.image}
                    alt="photo new book"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex justify-center items-center text-center">
                    <span>صوره الكتاب</span>
                  </div>
                )}
              </div>
            </div>

            <select
              name="id_category"
              onChange={(e) => {
                const selectedId = e.target.value;
                const selectedCategory = categories.find(
                  (cat) => cat.id.toString() === selectedId,
                );

                setDataBook({
                  ...dataBook,
                  id_category: selectedCategory?.id,
                  name_category: selectedCategory?.name,
                });
              }}
              className="w-full py-4 rounded-2xl border border-gray-500/40 hover:border-(--primary-color) outline-none px-2 focus:border-(--primary-color) transition-all duration-300"
            >
              <option value="">اختر تصنيف الكتاب</option>
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

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
