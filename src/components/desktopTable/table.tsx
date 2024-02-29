import { carsList } from "@/utils/carList";
import { RowComponent } from "./rows";

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
    <div className="bg-white p-8 w-full">
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow  overflow-hidden">
          <table className="min-w-full leading-normal table-auto">
            <thead>
              <tr>
                {columnsName.map((column, index) => (
                  <th
                    scope="col"
                    className={`p-4 border-b-2 border-gray-200 bg-gray-50 ${
                      index === columnsName.length - 1
                        ? "text-center"
                        : "text-left"
                    } text-base font-semibold text-gray-500 uppercase tracking-wider`}
                    key={index}>
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
        </div>
      </div>
    </div>
  );
};
