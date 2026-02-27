import InputSearch from "../components/ui/InputSearch";
import Button from "../components/ui/Button";
import CardBook from "../components/ui/CardBook";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
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
  {
    id: 4,
    image: "/books/v5.jfif",
    title: "نظرية الفستق",
    description:
      "مجموعة مقالات تطوير ذات تساعدك على فهم نفسك وتحسين طريقة تفكيرك.",
    price: 95,
  },
  {
    id: 4,
    image: "/books/v6.jfif",
    title: "نظرية الفستق",
    description:
      "مجموعة مقالات تطوير ذات تساعدك على فهم نفسك وتحسين طريقة تفكيرك.",
    price: 95,
  },
  {
    id: 4,
    image: "/books/v7.jfif",
    title: "نظرية الفستق",
    description:
      "مجموعة مقالات تطوير ذات تساعدك على فهم نفسك وتحسين طريقة تفكيرك.",
    price: 95,
  },
  {
    id: 4,
    image: "/books/v8.jfif",
    title: "نظرية الفستق",
    description:
      "مجموعة مقالات تطوير ذات تساعدك على فهم نفسك وتحسين طريقة تفكيرك.",
    price: 95,
  },
  {
    id: 4,
    image: "/books/v9.jfif",
    title: "نظرية الفستق",
    description:
      "مجموعة مقالات تطوير ذات تساعدك على فهم نفسك وتحسين طريقة تفكيرك.",
    price: 95,
  },
  {
    id: 4,
    image: "/books/v10.jfif",
    title: "نظرية الفستق",
    description:
      "مجموعة مقالات تطوير ذات تساعدك على فهم نفسك وتحسين طريقة تفكيرك.",
    price: 95,
  },
  {
    id: 4,
    image: "/books/v11.jfif",
    title: "نظرية الفستق",
    description:
      "مجموعة مقالات تطوير ذات تساعدك على فهم نفسك وتحسين طريقة تفكيرك.",
    price: 95,
  },
];

function Books() {
  const [allBooks, setAllBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const { data, error } = await supabase.from("books").select("*");
      data ? setAllBooks(data) : console.error(error);
      setIsLoading(false)
    };
    fetchData();
  }, []);


  if(isLoading) return <Loading text="جاري تحميل الكتب"/>

  return (
    <section className="py-12">
      <div className="container">
        {/* Head section */}
        <div>
          <h2 className="text-4xl mb-2">كتالوج الكتب</h2>
          <p className="text-sm lg:text-lg leading-8">
            استكشف مجموعتنا المختارة بعناية من الروايات والكتب العلمية والأدبية
            التي تثري الفكر
          </p>
          <div className="w-90 mt-8 mb-2">
            <InputSearch />
          </div>

          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-2">
              <Button text="الكل" />
              <Button text="ديني" />
              <Button text="تنميه" />
              <Button text="فانتازيا" />
              <Button text="أدب" />
              <Button text="رومانسي" />
              <Button text="تسويق" />
            </div>
            <div className="flex items-center gap-1">
              <button>نرنيب حسب:</button>

              <select className="outline-none border-none p-2">
                <option value="new">الاحدث اولا</option>
                <option value="old">ااقدم اولا</option>
              </select>
            </div>
          </div>
        </div>
        {/*=== Head section ===*/}
        {/* Content Books */}

        <div className="mt-8 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allBooks?.map((book, index) => {
            return (
              <CardBook
                key={index}
                title={book.title}
                image={book.image}
                index={index}
                description={book.description}
                price={book.price}
                id={book.id}
              />
            );
          })}
        </div>
        {/*=== Content Books ===*/}
      </div>
    </section>
  );
}

export default Books;
