import { TableComponent } from "@/components/desktopTable/table";
import { ListComponent } from "@/components/mobileList/list";

const MainPage = () => {
  return (
    <>
      <div className="md:hidden">
        <ListComponent />
      </div>
      <div className="hidden md:block">
        <TableComponent />
      </div>
    </>
  );
};

export default MainPage;
