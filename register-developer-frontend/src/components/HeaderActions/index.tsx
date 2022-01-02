import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDeveloper } from "../../hooks/useDeveloper";
import { useLocation } from "react-router-dom";
import { useLevel } from "../../hooks/useLevel";

const HeaderActions = () => {
  const navigate = useNavigate();

  // pega a rota atual usando react router
  const location = useLocation();

  const developer = useDeveloper();
  const level = useLevel();

  const handleCreateModal = () => {
    if (location.pathname === "/niveis") {
      level.setTitle("Cadastrar Nível");
      level.setStatusModal(true);
    } else if (location.pathname === "/desenvolvedores") {
      developer.setTitle("Cadastrar Desenvolvedor");
      developer.setStatusModal(true);
    }
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
