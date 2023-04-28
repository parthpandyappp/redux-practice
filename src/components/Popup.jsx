import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features";

const Popup = ({ size, toppings, name, togglePopup, productEssentials }) => {
  const [pizzaSize, setPizzaSize] = useState("");
  const [pizzaToppings, setPizzaToppings] = useState([]);

  const dispatch = useDispatch();
  const dishForCart = {
    ...productEssentials,
    pizzaSize,
    pizzaToppings,
    qty: 1,
  };

  const handleToppingsSelection = (e) => {
    const itemName = e.target.name;

    if (e.target.checked) {
      setPizzaToppings([...pizzaToppings, itemName]);
    } else {
      setPizzaToppings(pizzaToppings.filter((item) => item !== itemName));
    }
  };

  //   console.log("Pizza details: ", pizzaSize, pizzaToppings);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center min-h-screen bg-gray-300 bg-opacity-50 backdrop-blur-sm">
      <article className="min-h-2/5 w-4/5 md:min-h-1/3 md:w-1/3 m-auto bg-white rounded-md shadow-xl px-4 py-3">
        <section>
          <p className="text-gray-500 font-bold text-lg">
            Choose a size for your {name}
          </p>
          <div className="flex flex-col gap-1">
            {size[0].items.map((s) => {
              return (
                <span className="flex gap-2" key={s.size}>
                  <input
                    type="radio"
                    name="pizza-size"
                    val={pizzaSize}
                    onChange={() => setPizzaSize(s.size)}
                  />
                  <label
                    for="pizza-size"
                    className="text-gray-500 text-sm font-semibold"
                  >
                    {s.size}
                  </label>
                </span>
              );
            })}
          </div>
        </section>
        <section className="mt-3">
          <p className="text-gray-500 font-bold text-lg">Choose toppings</p>
          <div className="flex flex-col gap-1 mt-1">
            {toppings[0].items.map((t) => {
              return (
                <span className="flex gap-2" key={t.name}>
                  <input
                    type="checkbox"
                    name={`${t.name}`}
                    onChange={handleToppingsSelection}
                    checked={pizzaToppings.includes(t.name)}
                    val={t.name}
                  />
                  <label
                    for={`pizza-topping-${t.name}`}
                    className="text-gray-500 text-sm font-semibold"
                  >
                    {t.name}
                  </label>
                </span>
              );
            })}
          </div>
        </section>
        <section className="flex justify-center gap-2 w-3/4 mx-auto mt-2">
          <button
            className="flex gap-2 bg-[#F0F0F3] items-center border rounded-md text-sm py-0.5 px-1 font-bold text-gray-500 cursor-pointer shadow-md"
            onClick={() => {
              dispatch(addToCart(dishForCart));
              togglePopup(false);
            }}
          >
            <p className="flex items-center justify-center w-6 h-6 rounded-full shadow-inner  text-[#3CBCB4] ">
              +
            </p>
            Add to cart
          </button>
          <button
            className="flex gap-2 bg-[#F0F0F3] items-center border rounded-md text-sm py-0.5 px-1 font-bold text-gray-500 cursor-pointer shadow-md"
            onClick={() => {
              togglePopup(false);
            }}
          >
            <p className="flex items-center justify-center w-6 h-6 rounded-full shadow-inner  text-red-400 ">
              X
            </p>
            Cancel
          </button>
        </section>
      </article>
    </div>
  );
};

export { Popup };
