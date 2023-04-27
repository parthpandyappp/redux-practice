import { useEffect } from "react";
import { getAllProducts } from "../features";
import { useDispatch, useSelector } from "react-redux";

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
