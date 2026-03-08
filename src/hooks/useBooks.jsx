import { useState, useEffect, useRef } from "react";
import { supabase } from "../utils/supabaseClient";
import { toast } from "react-toastify";

function useBooks() {
  const [allBooks, setAllBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [typeBooks, setTypeBooks] = useState("الكل");
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [categories, setCategories] = useState();

  const limit = 20;

  // fetch all categories into database
  const fetchCategories = async () => {
    const { data, error } = await supabase.from("category").select();
    if (data) setCategories(data);
    if (error) toast.error(error.message);
  };

  // fetch current books
  const fetchCurrentTypeBooks = async (isNewType = false) => {
    if (isLoading) return;

    setIsLoading(true);

    const currentPage = isNewType ? 0 : page;
    const from = page * limit; // page = 0 , limit = 10 => first from = 0 , second from = 10 , ..est
    const to = from + limit - 1; // from = 10, limit = 10 => first to = 9, second to = 19, ..est
    // step 1 = (from zero, to 9), step 2 = (from 10, to 19), step 3 = (from 20, to 29), ..est

    let query = supabase
      .from("books")
      .select("id,title,image,description,price") // don't get all data get only I needed it
      .order("created_at", { ascending: false }) // fetch books new than old
      .range(from, to); // don't get all books

    if (typeBooks !== "الكل") {
      query = query.eq("name_category", typeBooks);
    }

    const { data, error } = await query;

    if (error) {
      toast.error(error.message);
    }

    if (data) {
      // لازم اخد الكتب القديمه واضيف عليها الكتب اللي جت
      setAllBooks((prev) => (isNewType ? data : [...prev, ...data]));
      setPage((prev) => prev + 1);
      // لو البيانات اللي لسه جايه اقل من الليميت اللي انا محدده يبقي مفيش داتا تاني
      if (data.length < limit) {
        setHasMore(false);
      }
    }

    setIsLoading(false);
  };

  const loaderRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading && hasMore) {
        fetchCurrentTypeBooks();
      }
    });
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => observer.disconnect();
  }, [isLoading]);

  const hasFetched = useRef(false);
  useEffect(() => {
    setTypeBooks("الكل");
    setAllBooks([]);
    setPage(0);

    if (!hasFetched.current) {
      fetchCurrentTypeBooks(true);
      hasFetched.current = true;
    }
  }, [typeBooks]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    allBooks,
    isLoading,
    categories,
    loaderRef,
    setTypeBooks,
    setAllBooks,
    setPage,
    hasMore,
    hasFetched,
  };
}

export default useBooks;
