import { useLevel } from "../../hooks/useLevel";
import { useAlertSystem } from "../../hooks/useAlertSystem";
import { useEffect } from "react";
import api from "../../services/api";
import { useUpdateTable } from "../../hooks/useUpdateTable";
import { toast } from "react-toastify";

const ExcludeLevels = () => {
  const { excludedItems, setExcludedItems } = useLevel();
  const { setUpdateTable, updateTable } = useUpdateTable();
  const { setStatusModal, decision, setDecision } = useAlertSystem();

  useEffect(() => {
    excludedItems.forEach((item) => {
      api
        .delete(`/levels/delete/${item}`)
        .then((data) => {
          toast.success("Sucesso ao excluir nível(is)");
        })
        .catch((err) => {
          if (err.response.data.statusCode === 400) {
            toast.warn(
              "Não é possível excluir nível(is) com desenvolvedores cadastrados!",
              {
                autoClose: 50000,
              }
            );
            if (excludedItems.length > 1) {
              toast.info(
                "Os items que não estavam com desenvolvedores cadastrados foram excluídos!",
                {
                  autoClose: 40000,
                }
              );
            }
          } else {
            toast.error("Erro ao excluir nível(is)");
          }
        });
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
          : toast.warn("Nenhum item selecionado!");
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

export default ExcludeLevels;
