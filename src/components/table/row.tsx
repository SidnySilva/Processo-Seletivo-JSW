import { carsList } from "@/utils/data";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

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
      <td>
        <div>
          <img className="w-20 h-20" src={src} alt={imgDesc} />
          <span>{name}</span>
        </div>
      </td>
      <td>{nextReservation} </td>
      <td>{status ? "Avaible" : "Unavaible"}</td>
      <td>{rating}</td>
      <td>
        <button>
          <BsThreeDotsVertical />
        </button>
      </td>
    </tr>
  );
};
