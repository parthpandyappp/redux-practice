import { BsFillCartCheckFill } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#f1f1f1] flex flex-col gap-4 border p-2 rounded-md shadow-md z-10">
      <section className="flex justify-between items-center ">
        <article className="flex gap-2 items-center">
          <p className="h-6 w-6 bg-black rounded-full"></p>
          <p className="font-semibold text-lg">The Pie Spot</p>
        </article>
        <article className="flex gap-2 items-center">
          <span className="flex gap-1 font-bold p-1 border rounded-md drop-shadow-xl">
            Cart
            <BsFillCartCheckFill className="text-2xl" />
          </span>
        </article>
      </section>
    </nav>
  );
};

export { Nav };
