import React from "react";
import { FaStar, FaRegStarHalf, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar className="text-yellow-600" key={i} />);
  }

  if (hasHalfStar) {
    stars.push(<FaRegStarHalf className="text-yellow-600" key={fullStars} />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={fullStars + (hasHalfStar ? 1 : 0) + i} />);
  }

  return (
    <section className="flex gap-1 items-center">
      <span className="text-sm font-semibold">{rating}</span> {stars}
    </section>
  );
};

export { Rating };
