import { carsList } from "@/utils/data";
import { RowComponent } from "./row";

interface ICar {
  src: string;
  imgDesc: string;
  name: string;
  nextReservation: string;
  status: boolean;
  rating: number;
}

const columnsName = ["Car", "Next Reservation", "Status", "Rating", "Actions"];

export const TableComponent = () => {
  return (
    <table>
      <thead>
        <tr>
          {columnsName.map((column, index) => (
            <th scope="col" key={index}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {carsList.map((car: ICar, i: number) => (
          <RowComponent key={i} {...car} />
        ))}
      </tbody>
    </table>
  );
};
