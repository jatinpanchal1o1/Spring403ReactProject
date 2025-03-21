import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "../../style/Star.css";

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    debugger;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icon icon-style" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon icon-style" />
        ) : (
          <AiOutlineStar className="icon icon-style" />
        )}
      </span>
    );
  });

  return (
   <div className="icon-style">
        {ratingStar}
      </div>
    );
};

export default Star;