const ReviewOrder = ({ dish, toggleReviewOrder }) => {
  const { name, qty, price, pizzaSize, pizzaToppings } = dish;
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center min-h-screen bg-gray-300 bg-opacity-50 backdrop-blur-sm">
      <article className="min-h-2/5 w-4/5 md:min-h-1/3 md:w-1/3 m-auto bg-white rounded-md shadow-xl px-4 py-3">
        <h1 className="font-bold text-lg">Your order</h1>
        <section className="flex flex-col gap-2 mt-2">
          <span className="flex flex-col">
            <p className="font-bold text-gray-700">Pizza</p>
            <p className="font-bold text-gray-500">{name}</p>
          </span>
          <hr />
          <span className="flex flex-col">
            <p className="font-bold text-gray-700">Pizza size</p>
            <p className="font-bold text-gray-500">{pizzaSize}</p>
          </span>
          <hr />
          <span className="flex flex-col">
            <p className="font-bold text-gray-700">Price per Pizza</p>
            <p className="font-bold text-gray-500">₹{price}</p>
          </span>
          <hr />
          <span className="flex flex-col">
            <p className="font-bold text-gray-700">Pizza toppings</p>
            <p className="font-bold text-gray-500">
              {pizzaToppings.join(", ")}
            </p>
          </span>
          <hr />
          <span className="flex flex-col">
            <p className="font-bold text-gray-700">
              Total number of pizzas ordered
            </p>
            <p className="font-bold text-gray-500">{qty}</p>
          </span>
          <hr />
          <span className="flex flex-col">
            <p className="font-bold text-gray-700">
              Total billing amount for this pizza
            </p>
            <p className="font-bold text-gray-500">₹{qty * price}</p>
          </span>
        </section>
        <section className="text-center">
          <button
            className="bg-blue-400 hover:bg-blue-500 shadow rounded-lg text-white px-4 py-1"
            onClick={() => toggleReviewOrder(false)}
          >
            Okay
          </button>
        </section>
      </article>
    </div>
  );
};

export { ReviewOrder };
