import React from "react";
import { useLevel } from "../../hooks/useLevel";
import ModalEditCreate from "../ModalEditCreate";
import Input from "../Input/index";

const ManagerLevelModals = () => {
  const { setStatusModal, statusModal, title, idEditable } = useLevel();

  return (
    <div>
      <ModalEditCreate
        setShowModal={setStatusModal}
        showModal={statusModal}
        title={title}
        idEditable={idEditable}
      >
        <form action="">
          <div className="flex flex-wrap -mx-3 mb-6 py-5 px-10 gap-y-6">
            <Input name="Nível" />
          </div>
        </form>
      </ModalEditCreate>
    </div>
  );
};

export default ManagerLevelModals;
