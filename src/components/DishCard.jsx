import { motion } from "framer-motion";
import { Rating } from "./Ratings";
const DishCard = ({ dish }) => {
  const { name, description, isVeg, rating, price, img_url, size, toppings } =
    dish;
  return (
    <section className="w-1/2 p-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
        className="group active:opacity-25 flex flex-col border shadow-inner rounded-lg mx-auto bg-[#F6F6F6]"
      >
        <img
          src={img_url}
          className="md:w-full h-32 md:h-72 object-cover rounded-lg"
          alt={name}
        />
        <span className="flex md:flex-row flex-col items-center gap-2 p-2 md:h-12 h-20 justify-between">
          <article className="flex gap-1">
            <p
              className={`border-2 w-6 h-6 flex items-center justify-center rounded ${
                isVeg
                  ? "border-green-600 text-green-600"
                  : "border-red-600 text-red-600"
              } font-bold text-3xl`}
            >
              •
            </p>
            <p className="text-sm font-bold text-gray-500 ">{name}</p>
          </article>
          <Rating rating={rating} />
        </span>
        <p className="text-gray-600 p-2 text-sm md:h-12 h-24">{description}</p>
        <span className="flex justify-between p-2 items-center h-12">
          <p className="font-semibold text-sm text-gray-500">₹{price}</p>
          <button className="flex gap-2 bg-[#F0F0F3] items-center border rounded-md text-sm p-1 font-bold text-gray-500 cursor-pointer shadow-md">
            <p className="flex items-center justify-center w-6 h-6 rounded-full shadow-inner  text-[#3CBCB4] ">
              +
            </p>
            ADD
          </button>
        </span>
      </motion.div>
    </section>
  );
};

export { DishCard };
