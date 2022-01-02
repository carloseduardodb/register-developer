import { useLevel } from "../../hooks/useLevel";
import ModalEditCreate from "../ModalEditCreate";
import Input from "../Input/index";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUpdateTable } from "../../hooks/useUpdateTable";
import api from "../../services/api";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface IFormValues {
  level: string;
  name: string;
  gender: string;
  birth_date: string;
  age: string;
  hobby: string;
}

const ManagerLevelModals = () => {
  const { setStatusModal, statusModal, title, idEditable, setIdEditable } =
    useLevel();
  const { register, handleSubmit, reset, setValue } = useForm<IFormValues>();
  const { setUpdateTable, updateTable } = useUpdateTable();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const { level } = data;
    if (idEditable === "") {
      api
        .post(`/levels/create`, {
          name: level,
        })
        .then(() => {
          setStatusModal(false);
          setUpdateTable(!updateTable);
          reset();
          toast.success("Cadastrado com sucesso!");
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      api
        .patch(`/levels/update/${idEditable}`, {
          name: level,
        })
        .then(() => {
          setUpdateTable(!updateTable);
          setStatusModal(false);
          toast.success("Sucesso ao atualizar nível");
        })
        .catch((err) => {
          toast.error(
            "Erro ao atualizar desenvolvedor. Detalhes: " + err.message
          );
        });
    }
  };

  useEffect(() => {
    api
      .get(`/levels/${idEditable}`)
      .then((response) => {
        console.log(`/levels/${idEditable}`);
        setValue("level", response.data.data.name);
      })
      .catch((err) => {});
  }, [idEditable]);

  return (
    <div>
      <ModalEditCreate
        setShowModal={setStatusModal}
        showModal={statusModal}
        title={title}
        idEditable={idEditable}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap -mx-3 mb-6 py-5 px-10 gap-y-6">
            <Input label="level" register={register} required selected />
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid rounded-b">
            <button
              className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                setIdEditable("");
                setStatusModal(false);
                reset();
              }}
            >
              Fechar
            </button>
            <input
              className="bg-p-blue cursor-pointer text-white active:bg-blue-600 hover:bg-p-blue-dark font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
              value={`${idEditable !== "" ? "Salvar Alterações" : "Salvar"}`}
            />
          </div>
        </form>
      </ModalEditCreate>
    </div>
  );
};

export default ManagerLevelModals;
