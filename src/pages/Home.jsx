import { useEffect, useState } from "react";
import { getAllProducts } from "../features";
import { useDispatch, useSelector } from "react-redux";
import { DishCard, FiltersAndSorts } from "../components/";
import {
  getFilteredByRatings,
  getSortedData,
  getVegOrNonVeg,
} from "../helpers/sorting-filtering-helpers";
import { TbLoader } from "react-icons/tb";

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

  return !productsLoading ? (
    <main className="flex flex-col md:flex-row mt-24 h-full md:w-4/5 mx-auto mb-12">
      <FiltersAndSorts
        isVeg={isVeg}
        setIsVeg={setIsVeg}
        setSortByPrice={setSortByPrice}
        setSortByRatings={setSortByRatings}
      />
      <section className="md:p-2 md:w-3/4 w-full mx-0 flex flex-wrap order-2">
        {products?.map((product) => (
          <DishCard key={product.key} dish={product} />
        ))}
      </section>
    </main>
  ) : (
    <main className="flex justify-center items-center h-screen w-full">
      <span className="flex gap-1 items-center">
        <p className="text-xl font-semibold text-gray-500">Pizzas loading</p>
        <TbLoader className="text-2xl text-gray-500 font-semibold" />
      </span>
    </main>
  );
};

export { Home };
