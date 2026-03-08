import { supabase } from "../utils/supabaseClient";
import { useEffect, useState } from "react";

function UseCurrentBook(_id) {
  const [currentBook, setCurrentBook] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // fetch current book by id
  useEffect(() => {
    const fetchCurrentBook = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("books")
        .select("*")
        .eq("id", _id)
        .single();
      data ? setCurrentBook(data) : console.error(error);
      setIsLoading(false);
    };
    fetchCurrentBook();
  }, []);

  return {currentBook, isLoading}
}

export default UseCurrentBook;
