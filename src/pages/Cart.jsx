import { useSelector } from "react-redux";
import { AiFillCaretUp } from "react-icons/ai";
import { CartItem } from "../components";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <main className="flex flex-col mt-24 h-full md:w-4/5 w-full mx-auto mb-12">
      <section
        className={`group flex gap-2 items-center p-2 my-2 w-full cursor-pointer active:text-[#3CBCB4] mt-12`}
      >
        <span className="relative">
          <p className="w-14 font-bold group-active:text-[#3CBCB4] text-gray-600">
            Cart
          </p>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-0 dark:border-gray-900">
            {cart.length}
          </div>
        </span>
        <span className="border-b-2 w-full"></span>
        <AiFillCaretUp className="cursor-pointer" />
      </section>
      {cart.length > 0 ? (
        <section className="mt-2 flex flex-col gap-4 shadow-inner bg-slate-50 rounded p-2">
          {cart?.map((dish) => {
            return <CartItem dish={dish} />;
          })}
        </section>
      ) : (
        <h2 className="text-lg font-bold text-center text-gray-500">
          The cart is empty, please add some delicious pizzas in here
        </h2>
      )}
    </main>
  );
};

export { Cart };
