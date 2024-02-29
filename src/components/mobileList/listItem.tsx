import { IoIosCheckmark, IoIosClose } from "react-icons/io";
import StarRating from "../../utils/starRating";
import { BsThreeDotsVertical } from "react-icons/bs";

interface ICar {
  src: string;
  imgDesc: string;
  name: string;
  nextReservation: string;
  status: boolean;
  rating: number;
}

export const ListItem = ({
  src,
  imgDesc,
  name,
  nextReservation,
  status,
  rating,
}: ICar) => {
  return (
    <li className="p-3 flex justify-between items-center user-card">
      <div className="flex items-center relative">
        <img className="w-20 h-20 object-cover" src={src} alt={imgDesc} />
        <div
          className={`absolute top-0.5 left-0.5 text-white rounded-full ${
            status ? "bg-green-800" : "bg-red-800"
          }`}>
          {status ? <IoIosCheckmark /> : <IoIosClose />}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-base">{name}</span>
        <span className="font-normal text-xs text-gray-500">
          Next reservation: {nextReservation}
        </span>
        <span className="mt-3 font-medium ">
          <StarRating rating={rating} />
        </span>
      </div>
      <div className="self-start">
        <button>
          <BsThreeDotsVertical />
        </button>
      </div>
    </li>
  );
};
