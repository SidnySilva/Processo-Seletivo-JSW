import React from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
}

// Receive the rating as a prop and display the quantity as stars 
export const StarRating = ({ rating }: StarRatingProps) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <>
      <FaStar />
    </>
  ));

  return <div className="flex text-gray-900 whitespace-no-wrap">{stars}</div>;
};

export default StarRating;
