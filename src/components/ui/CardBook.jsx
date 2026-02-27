
import { motion } from "motion/react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const handleDescriptionBook = (dis) => {
  return dis.split(" ").slice(0, 15).join(" ");
};

function CardBook({ image, title, description, price, index, id }) {
  const navigate = useNavigate();

  const handleGoToCurrentBook = (id) => {
    navigate(`/detailsBook/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 0.3 * index, duration: 0.6 }}
      key={index}
      className="group relative bg-(--secondary-bg) rounded-xl overflow-hidden"
    >
      <div className="overflow-hidden h-100 mb-4">
        <img
          className="group-hover:scale-110 group-hover:rotate-4 cursor-pointer transition-all duration-300 object-cover w-full h-full"
          src={image}
          alt={title}
        />
      </div>

      <h4 className="absolute top-2 left-2 bg-(--primary-color) text-gray-200 py-1 px-2 rounded-md">
        بيت الكتاب
      </h4>

      <div className="px-2 mb-2">
        <h3 className="text-lg lg:text-xl font-semibold">{title}</h3>

        <p className="mt-2 leading-6 mb-2">
          {handleDescriptionBook(description)}...
        </p>

        <div className="flex justify-between items-center text-xl">
          <span>{price}ج</span>
          <div onClick={() => handleGoToCurrentBook(id)}>
            <Button text="تفاصيل" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CardBook;
