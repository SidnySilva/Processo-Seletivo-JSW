import { BsThreeDotsVertical } from "react-icons/bs";
import StarRating from "../../utils/starRating";

interface ICar {
  src: string;
  imgDesc: string;
  name: string;
  nextReservation: string;
  status: boolean;
  rating: number;
}

export const RowComponent = ({
  src,
  imgDesc,
  name,
  nextReservation,
  status,
  rating,
}: ICar) => {
  return (
    <tr>
      <td className="px-4 py-1 text-base border-b border-gray-200 bg-white ">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-20 h-20 2xl:w-30 2xl:h-30 ">
            <img className="w-full h-full " src={src} alt={imgDesc} />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 text-sm whitespace-no-wrap font-normal 2xl:text-lg">
              {name}
            </p>
          </div>
        </div>
      </td>
      <td className="p-4 border-b border-gray-200 bg-white ">
        <p className="text-gray-500 text-sm whitespace-no-wrap 2xl:text-lg">{nextReservation}</p>
      </td>
      <td className="p-4 border-b border-gray-200 bg-white ">
        <span
          className={`relative inline-block px-3 py-1 font-semibold text-sm 2xl:text-lg ${
            status ? "text-green-800" : "text-red-800"
          } leading-tight`}>
          <span
            aria-hidden
            className={`absolute inset-0 ${
              status ? "bg-green-100" : "bg-red-100"
            } opacity-50 rounded-lg`}></span>
          <span className="relative">
            {status ? "Available" : "Unavailable"}
          </span>
        </span>
      </td>

      <td className="p-4 border-b border-gray-200 bg-white">
        <StarRating rating={rating} />
      </td>
      <td className="p-4 border-b border-gray-200 bg-white text-center">
        <button className="text-gray-800 hover:bg-gray-100 rounded-full p-1 transition duration-500">
          <BsThreeDotsVertical />
        </button>
      </td>
    </tr>
  );
};
