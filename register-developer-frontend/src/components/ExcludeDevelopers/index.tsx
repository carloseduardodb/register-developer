import { useDeveloper } from "../../hooks/useDeveloper";
import { useAlertSystem } from "../../hooks/useAlertSystem";
import { useEffect } from "react";
import api from "../../services/api";
import { useUpdateTable } from "../../hooks/useUpdateTable";
import { toast } from "react-toastify";

const ExcludeDevelopers = () => {
  const { excludedItems, setExcludedItems } = useDeveloper();
  const { setUpdateTable, updateTable } = useUpdateTable();
  const { setStatusModal, decision, setDecision } = useAlertSystem();

  useEffect(() => {
    excludedItems.forEach((item) => {
      api.delete(`/developers/delete/${item}`);
    });
    setUpdateTable(!updateTable);
    setDecision(false);
    setExcludedItems([]);
  }, [decision === true]);

  return (
    <button
      onClick={() => {
        excludedItems.length > 0
          ? setStatusModal(true)
          : toast.error("Nenhum item selecionado!");
      }}
      className={`${
        excludedItems.length > 0
          ? "bg-p-blue-dark hover:bg-p-blue-dark "
          : "bg-gray-300 cursor-not-allowed"
      } m-2 p-2 mb-5 transform hover:scale-105 transition-transform delay-100 duration-100 rounded text-sm text-white`}
    >
      Excluir Selecionados
    </button>
  );
};

export default ExcludeDevelopers;
