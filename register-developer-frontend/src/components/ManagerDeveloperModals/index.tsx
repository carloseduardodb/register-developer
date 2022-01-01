import React from "react";
import ModalEditCreate from "../ModalEditCreate";
import { useDeveloper } from "../../hooks/useDeveloper";
import Input from "../Input/index";

const ManagerDeveloperModals = () => {
  const { setStatusModal, statusModal, title, idEditable } = useDeveloper();

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
            <div className="flex flex-row w-full">
              <Input name="Nível" selected />
              <Input name="Nome" />
            </div>
            <div className="flex flex-row w-full">
              <Input name="Sexo" selected />
              <Input type="date" name="Data de Nascimento" />
            </div>
            <div className="flex flex-row w-full">
              <Input type="number" name="Idade" />
              <Input name="Hobby" />
            </div>
          </div>
        </form>
      </ModalEditCreate>
    </div>
  );
};

export default ManagerDeveloperModals;
