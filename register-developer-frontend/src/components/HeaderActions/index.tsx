import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDeveloper } from "../../hooks/useDeveloper";

const HeaderActions = () => {
  const navigate = useNavigate();
  const { setStatusModal, setTitle } = useDeveloper();

  const handleCreateModal = () => {
    setTitle("Cadastrar Desenvolvedor");
    setStatusModal(true);
  };

  return (
    <>
      <div className="flex justify-between px-1 py-5">
        <button
          onClick={() => navigate(-1)}
          className="bg-p-blue hover:bg-p-blue-dark transform hover:scale-105 transition-transform delay-100 duration-200 ease-in rounded-full p-2"
        >
          <FiArrowLeft size={25} color="white" />
        </button>
        <button
          onClick={handleCreateModal}
          className="bg-p-blue hover:bg-p-blue-dark transform hover:scale-105 transition-transform delay-100 duration-200 ease-in rounded-md px-5 text-white"
        >
          Criar
        </button>
      </div>
    </>
  );
};

export default HeaderActions;
