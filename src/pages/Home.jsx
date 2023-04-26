import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features";

const Home = () => {
  const dispatch = useDispatch();
  const { products, productsLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  console.log("Product status: ", products, productsLoading);
  return <h1 className="flex flex-col grow">Home</h1>;
};

export { Home };
