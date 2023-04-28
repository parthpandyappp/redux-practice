import { useDispatch, useSelector } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { getNoOfItems, getTotalAmount, notifyOrderPlaced } from "../helpers";
import { placeOrder } from "../features";

const Footer = () => {
  const location = useLocation();
  const dispatch = useDispatch();
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
        <span
          className={`flex items-center gap-2 p-1 px-2 mr-2 rounded ${
            cart.length > 0 ? "cursor-pointer" : "cursor-not-allowed"
          } `}
          title={`${
            cart.length === 0
              ? "please add some items to the cart first"
              : "Place order"
          }`}
          onClick={() => {
            dispatch(placeOrder());
            notifyOrderPlaced();
          }}
        >
          <p
            className={`font-bold text-sm md:text-base ${
              cart.length === 0 && "text-gray-500"
            } `}
          >
            Place Order
          </p>
          <span className="rounded-full bg-slate-50 shadow-inner p-1">
            <BsArrowRight
              className={`font-semibold text-xl ${
                cart.length === 0 && "text-gray-500"
              }`}
            />
          </span>
        </span>
      </article>
    </footer>
  );
};

export { Footer };
