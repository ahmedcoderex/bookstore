import Button from "../components/ui/Button";
import CardBook from "../components/ui/CardBook";
import Loading from "../components/ui/Loading";
import NotFoundAnyBook from "../components/ui/NotFoundAnyBook";
import useBooks from "../hooks/useBooks";
function Books() {
  const {
    allBooks,
    isLoading,
    categories,
    loaderRef,
    setTypeBooks,
    setAllBooks,
    setPage,
    hasMore,
    hasFetched,
  } = useBooks();

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

          <div className="flex flex-wrap gap-2 mt-4">
            <div
              onClick={() => {
                setTypeBooks("الكل");
                setAllBooks([]);
                setPage(0);
                hasFetched.current = false;
              }}
            >
              <Button text="الكل" />
            </div>
            {categories?.map((category, index) => (
              <div
                key={index}
                onClick={() => {
                  setTypeBooks(category.name);
                  setAllBooks([]);
                  setPage(0);
                  hasFetched.current = false;
                }}
              >
                <Button text={category.name} />
              </div>
            ))}
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
                  key={book.id}
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

        {hasMore && (
          <div ref={loaderRef} className="flex justify-center py-10">
            {isLoading && <Loading text="تحميل المزيد..." />}
          </div>
        )}

        {!hasMore && (
          <p className="text-center text-gray-500">لا يوجد كتب أخرى</p>
        )}
      </div>
    </section>
  );
}

export default Books;
