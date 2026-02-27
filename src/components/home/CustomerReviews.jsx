
import { motion } from "motion/react";
function CustomerReviews() {
  const review_clients = () => {
    return Array.from({ length: 20 }, (_, index) => `/review_clients/v${index + 1}.webp`);
  };
  return (
    <section className="py-12">
      <div className="container">
        {/* Head section */}
        <div className="mb-18">
          <h2
            className="w-fit text-2xl lg:text-4xl mx-auto relative 
            before:content-[''] before:absolute before:-bottom-2 
            before:bg-(--head-sec-color) before:h-1 before:w-[70%] 
            before:transform before:-translate-x-1/2 before:left-1/2
            text-(--head-sec-color)"
          >
            اراء العملاء
          </h2>
        </div>
        {/*=== Head section ===*/}
        {/* Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {review_clients().map((photo, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              key={index}
              className="p-4 bg-(--secondary-bg) rounded-2xl"
            >
              <img
                src={photo}
                alt="photo"
                loading="lazy"
                className="rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
        {/*=== Photos ===*/}
      </div>
    </section>
  );
}

export default CustomerReviews;
