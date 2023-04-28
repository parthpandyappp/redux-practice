import toast from "react-hot-toast";
import { AiFillCheckCircle } from "react-icons/ai";

const toastStyle = {
    backgroundColor: "white",
    border: "2px solid #3DA9FC",
    padding: "16px",
    color: "black",
};

const toastError = {
    backgroundColor: "white",
    border: "2px solid red",
    padding: "16px",
    color: "black",
};

const notifyShowingVegOnly = () => toast.custom((t) => (
    <span className="flex gap-1 items-center justify-center bg-slate-50 px-6 py-3 rounded-md border shadow-xl">
        <p
            className={`border-2 w-6 h-6 flex items-center justify-center rounded border-green-600 text-green-600 font-bold text-3xl`}
        >
            •
        </p>
        <p className="text-gray-500 font-bold">Showing veg pizzas only</p>
    </span>
))

const notifyShowingNonVegOnly = () => toast.custom((t) => (
    <span className="flex gap-1 items-center justify-center bg-slate-50 px-6 py-3 rounded-md border shadow-xl">
        <p
            className={`border-2 w-6 h-6 flex items-center justify-center rounded border-red-600 text-red-600 font-bold text-3xl`}
        >
            •
        </p>
        <p className="text-gray-500 font-bold">Showing non-veg pizzas only</p>
    </span>
))

const notifyAddToCart = (pizza) => toast.custom((t) => (
    <span className="flex gap-1 items-center justify-around bg-slate-50 px-6 py-3 rounded-md border shadow-xl">
        <AiFillCheckCircle className="text-green-600 text-xl" />
        <p className="text-gray-500 font-bold">{pizza} added to cart</p>
    </span>
))

const notifyOrderPlaced = () => toast.custom((t) => (
    <span className="flex gap-1 items-center justify-around bg-slate-50 px-6 py-3 rounded-md border shadow-xl">
        <AiFillCheckCircle className="text-green-600 text-xl" />
        <p className="text-gray-500 font-bold">Your order has been placed</p>
    </span>
))

const notifyToAddItemsInCart = () => toast.custom((t) => (
    <span className="flex gap-1 items-center justify-around bg-slate-50 px-6 py-3 rounded-md border-2 border-red-300 shadow-xl">
        <p className="text-gray-500 font-bold">Add an item in cart to place order</p>
    </span>
))

export { notifyShowingVegOnly, notifyShowingNonVegOnly, notifyAddToCart, notifyOrderPlaced, notifyToAddItemsInCart }