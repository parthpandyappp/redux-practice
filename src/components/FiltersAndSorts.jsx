const FiltersAndSorts = (props) => {
  const { setIsVeg, setSortByPrice, isVeg, setSortByRatings } = props;
  return (
    <section className="md:w-1/4 h-full border mt-4 md:ml-2 p-2 rounded md:order-1 order-3">
      <h3 className="font-bold text-lg">Filter and Sorts</h3>
      <article className="flex items-center gap-2 mt-3 mb-3">
        <p className="text-gray-500 font-semibold">Veg</p>
        <span
          className="flex h-6 w-10 bg-gray-100 cursor-pointer rounded-2xl px-6 py-0.5 border items-center relative"
          onClick={() => setIsVeg((prev) => !prev)}
        >
          <input
            type="button"
            className={`absolute h-4 w-4 rounded-full outline-none ${
              !isVeg ? "bg-red-700 right-1" : "bg-green-600 left-1"
            } cursor-pointer `}
          />
        </span>
        <p className="text-gray-500 font-semibold">Non-veg</p>
      </article>
      <article className="flex flex-col gap-1">
        <p className="text-gray-500 font-bold text-lg">Sort by price</p>
        <span>
          <input
            type="radio"
            name="sort_by_price"
            value="HIGH_TO_LOW"
            onChange={(e) => setSortByPrice(e.target.value)}
          />
           {" "}
          <label for="HIGH_TO_LOW" className="text-gray-500 font-semibold">
            High to Low
          </label>
        </span>
        <span>
          <input
            type="radio"
            name="sort_by_price"
            value="LOW_TO_HIGH"
            onChange={(e) => setSortByPrice(e.target.value)}
          />
           {" "}
          <label for="LOW_TO_HIGH" className="text-gray-500 font-semibold">
            Low to High
          </label>
        </span>
      </article>
      <article className="flex flex-col gap-1 mt-3">
        <p className="text-gray-500 font-bold text-lg">Sort by ratings</p>
        <span>
          <input
            type="radio"
            name="sort_by_ratings"
            value="4_above"
            onChange={(e) => setSortByRatings(e.target.value)}
          />
           {" "}
          <label for="sort_by_ratings" className="text-gray-500 font-semibold">
            4 stars & above
          </label>
        </span>
        <span>
          <input
            type="radio"
            name="sort_by_ratings"
            value="3_above"
            onChange={(e) => setSortByRatings(e.target.value)}
          />
           {" "}
          <label for="sort_by_ratings" className="text-gray-500 font-semibold">
            3 stars and above
          </label>
        </span>
        <span>
          <input
            type="radio"
            name="sort_by_ratings"
            value="2_above"
            onChange={(e) => setSortByRatings(e.target.value)}
          />
           {" "}
          <label for="sort_by_ratings" className="text-gray-500 font-semibold">
            2 stars and above
          </label>
        </span>
        <span>
          <input
            type="radio"
            name="sort_by_ratings"
            value="1_above"
            onChange={(e) => setSortByRatings(e.target.value)}
          />
           {" "}
          <label for="sort_by_ratings" className="text-gray-500 font-semibold">
            1 stars and above
          </label>
        </span>
      </article>
    </section>
  );
};

export { FiltersAndSorts };
