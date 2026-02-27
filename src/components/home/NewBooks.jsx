import { FaArrowLeft } from "react-icons/fa";
import Button from "../ui/Button";
import { motion } from "motion/react";
import CardBook from "../ui/CardBook";
const newBooks = [
  {
    id: 1,
    image: "/books/v1.jfif",
    title: "فن اللامبالاة",
    description:
      "كتاب يتناول كيفية عيش حياة أكثر وعيًا وهدوءًا بعيدًا عن الضغوط غير المهمة.",
    price: 120,
  },
  {
    id: 2,
    image: "/books/v2.jfif",
    title: "العادات الذرية",
    description:
      "دليل عملي لبناء عادات جيدة والتخلص من العادات السيئة بطريقة علمية.",
    price: 150,
  },
  {
    id: 3,
    image: "/books/v3.jfif",
    title: "قوة الآن",
    description:
      "رحلة روحية لفهم الحاضر والتخلص من القلق المرتبط بالماضي والمستقبل.",
    price: 135,
  },
  {
    id: 4,
    image: "/books/v4.jfif",
    title: "نظرية الفستق",
    description:
      "مجموعة مقالات تطوير ذات تساعدك على فهم نفسك وتحسين طريقة تفكيرك.",
    price: 95,
  },
];



function NewBooks() {
  return (
    <section className="py-24">
      <div className="container">
        {/* Head Section */}
        <div className="mb-18 flex items-center justify-between text-xl lg:text-2xl">
          <h2>أحدث الكتب</h2>
          <button className="group flex items-center gap-3">
            <span>عرض الكل</span>{" "}
            <span className="group-hover:-translate-x-2 transition-all duration-300">
              <FaArrowLeft />
            </span>
          </button>
        </div>
        {/*=== Head Section ===*/}

        {/* Books */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {newBooks.map((book, index) => {
            return (
             <CardBook key={index} index={index} title={book.title} description={book.description} price={book.price} image={book.image} />
            );
          })}
        </div>
        {/*=== Books ===*/}
      </div>
    </section>
  );
}

export default NewBooks;
