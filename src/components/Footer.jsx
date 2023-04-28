import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { getNoOfItems, getTotalAmount } from "../helpers";

const Footer = () => {
  const location = useLocation();
  const { cart } = useSelector((state) => state.cart);

  const noOfItems = getNoOfItems(cart);
  const totalAmount = getTotalAmount(cart);

  return location.pathname !== "/cart" ? (
    <footer className="fixed bottom-0 w-full bg-[#f1f1f1] flex-none font-semibold text-center p-2 shadow-xl border w-full">
      The Pie Spot &copy; 2023
    </footer>
  ) : (
    <footer className="fixed bottom-0 mx-auto justify-center bg-[#f1f1f1] flex-none font-semibold text-center p-2 shadow-xl border w-full">
      <article className="flex justify-between items-center w-4/5 mx-auto">
        <span className="flex gap-3 items-center">
          <p className="font-bold text-sm md:text-lg">{noOfItems} items</p>
          <p className="font-bold text-sm md:text-lg">₹ {totalAmount}</p>
        </span>
        <motion.span
          className="flex items-center gap-2 p-1 px-2 mr-2 rounded cursor-pointer"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.4)",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <p className="font-bold text-sm md:text-base">Place Order</p>
          <span className="cursor-pointer rounded-full bg-slate-50 shadow-inner p-1">
            <BsArrowRight className="font-semibold text-xl" />
          </span>
        </motion.span>
      </article>
    </footer>
  );
};

export { Footer };
