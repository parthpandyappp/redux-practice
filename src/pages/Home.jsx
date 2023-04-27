import { useEffect, useState } from "react";
import { getAllProducts } from "../features";
import { useDispatch, useSelector } from "react-redux";
import { DishCard, FiltersAndSorts } from "../components/";
import {
  getFilteredByRatings,
  getSortedData,
  getVegOrNonVeg,
} from "../helpers/sorting-filtering-helpers";

const Home = () => {
  const dispatch = useDispatch();
  let { products, productsLoading } = useSelector((state) => state.products);
  const [isVeg, setIsVeg] = useState(true);
  const [sortByPrice, setSortByPrice] = useState("HIGH_TO_LOW");
  const [sortByRatings, setSortByRatings] = useState(null);
  products = getVegOrNonVeg(products, isVeg);
  products = getSortedData(products, sortByPrice);
  products = getFilteredByRatings(products, sortByRatings);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  console.log("Product status: ", products, productsLoading);
  return (
    <main className="flex flex-col md:flex-row mt-24 h-full md:w-4/5 mx-auto mb-12">
      <FiltersAndSorts
        isVeg={isVeg}
        setIsVeg={setIsVeg}
        setSortByPrice={setSortByPrice}
        setSortByRatings={setSortByRatings}
      />
      <section className="md:p-2 md:w-3/4 w-full mx-0 flex flex-wrap order-2">
        {products.map((product) => (
          <DishCard dish={product} />
        ))}
      </section>
    </main>
  );
};

export { Home };

{
  /* <span className="">
          <p className="text-gray-500 font-bold">Sort by price</p>
          <div>
            <input
              type="radio"
              name="sort_by_price"
              value="HIGH_TO_LOW"
              onChange={(e) => setSortByPrice(e.target.value)}
            />
              <label for="html">HIGH TO LOW</label>
          </div>
           
          <div>
            <input
              type="radio"
              name="sort_by_price"
              value="LOW_TO_HIGH"
              onChange={(e) => setSortByPrice(e.target.value)}
            />
              <label for="css">LOW TO HIGH</label>{" "}
          </div>
        </span>
        <span>
          <p>SORT BY PRICE</p>
          <input
            type="radio"
            name="sort_by_ratings"
            value="4_above"
            onChange={(e) => setSortByRatings(e.target.value)}
          />
            <label for="sort_by_ratings">4 stars & above</label>
           
          <input
            type="radio"
            name="sort_by_ratings"
            value="3_above"
            onChange={(e) => setSortByRatings(e.target.value)}
          />
            <label for="sort_by_ratings">3 stars & above</label>{" "}
          <input
            type="radio"
            name="sort_by_ratings"
            value="2_above"
            onChange={(e) => setSortByRatings(e.target.value)}
          />
            <label for="sort_by_ratings">2 & above</label>{" "}
          <input
            type="radio"
            name="sort_by_ratings"
            value="1_above"
            onChange={(e) => setSortByRatings(e.target.value)}
          />
            <label for="sort_by_ratings">1 & above</label>{" "}
        </span> */
}
