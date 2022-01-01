import React from "react";
import Table from "../../components/Table/index";
import HeaderActions from "../../components/HeaderActions/index";

const ManageDevelopers = () => {
  return (
    <>
      <div className="flex justify-center bg-p-blue-light">
        <main className="w-full max-w-4xl">
          <HeaderActions />
          <Table />
        </main>
      </div>
    </>
  );
};

export default ManageDevelopers;
