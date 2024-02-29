import { carsList } from "@/utils/carList";
import { ListItem } from "./listItem";

interface ICar {
  src: string;
  imgDesc: string;
  name: string;
  nextReservation: string;
  status: boolean;
  rating: number;
}

export const ListComponent = () => {
  return (
      <div className="max-w-sm mx-auto my-10">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {carsList.map((car: ICar, i: number) => (
              <ListItem key={i} {...car} />
            ))}
          </ul>
        </div>
      </div>
  );
};
