import HeaderActions from "../../components/HeaderActions/index";
import { ManagerLevelProvider } from "../../context/ManagerLevelContext";
import { UpdateTableProvider } from "../../context/UpdateTableContext";
import ManagerLevelModals from "../../components/ManagerLevelModals/index";
import ManagerDeveloperTable from "../../components/ManagerDeveloperTable";
import ManagerLevelTable from "../../components/ManagerLevelTable/index";

const ManageLevels = () => {
  return (
    <>
      <div className="flex justify-center bg-p-blue-light items-center h-screen">
        <main className="w-full max-w-6xl">
          <UpdateTableProvider>
            <ManagerLevelProvider>
              <HeaderActions />
              <br />

              <ManagerLevelTable />

              <ManagerLevelModals />
            </ManagerLevelProvider>
          </UpdateTableProvider>
        </main>
      </div>
    </>
  );
};

export default ManageLevels;
