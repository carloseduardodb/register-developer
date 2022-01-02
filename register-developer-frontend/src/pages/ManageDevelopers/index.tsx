import HeaderActions from "../../components/HeaderActions/index";
import ManagerDeveloperModals from "../../components/ManagerDeveloperModals";
import { ManagerDeveloperProvider } from "../../context/ManagerDeveloperContext";
import { UpdateTableProvider } from "../../context/UpdateTableContext";
import ManagerDeveloperTable from "../../components/ManagerDeveloperTable";

const ManageDevelopers = () => {
  return (
    <>
      <div className="flex justify-center bg-p-blue-light items-center h-screen">
        <main className="w-full max-w-6xl">
          <UpdateTableProvider>
            <ManagerDeveloperProvider>
              <HeaderActions />
              <br />

              <ManagerDeveloperTable />

              <ManagerDeveloperModals />
            </ManagerDeveloperProvider>
          </UpdateTableProvider>
        </main>
      </div>
    </>
  );
};

export default ManageDevelopers;
