import InputSearch from "../components/ui/InputSearch";
import Button from "../components/ui/Button";
import CardBook from "../components/ui/CardBook";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Loading from "../components/ui/Loading";
import { toast } from "react-toastify";
import NotFoundAnyBook from "../components/ui/NotFoundAnyBook";

function Books() {
  const [allBooks, setAllBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [typeBooks, setTypeBooks] = useState("الكل");
  const [categories, setCategories] = useState();

  const fetchCategories = async () => {
    const { data, error } = await supabase.from("category").select();
    if (data) setCategories(data);
    if (error) toast.error(error.message);
  };

  const fetchCurrentTypeBooks = async () => {
    setIsLoading(true);
    if (typeBooks === "الكل") {
      const { data, error } = await supabase.from("books").select("*");
      data ? setAllBooks(data) : toast.error(error.message);
    } else {
      const { data, error } = await supabase
        .from("books")
        .select("*")
        .eq("name_category", typeBooks);
      data ? setAllBooks(data) : toast.error(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCurrentTypeBooks();
  }, [typeBooks]);

  useEffect(() => {
    fetchCategories();
  }, []);

  if (isLoading) return <Loading text="جاري تحميل الكتب" />;

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

          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {categories?.map((category, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setTypeBooks(category.name);
                  }}
                >
                  <Button text={category.name} />
                </div>
              ))}
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
        <div
          className={`mt-8 mb-12 ${allBooks.length > 0 ? "grid" : ""} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}
        >
          {allBooks.length > 0 ? (
            allBooks.map((book, index) => {
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
            })
          ) : (
            <NotFoundAnyBook message="لا يوجد اي كتب في هذا القسم بعد" />
          )}
        </div>
        {/*=== Content Books ===*/}
      </div>
    </section>
  );
}

export default Books;
