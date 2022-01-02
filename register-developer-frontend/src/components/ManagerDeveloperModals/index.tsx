import { useState } from "react";
import ModalEditCreate from "../ModalEditCreate";
import { useDeveloper } from "../../hooks/useDeveloper";
import Input from "../Input/index";
import { useEffect } from "react";
import api from "../../services/api";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUpdateTable } from "../../hooks/useUpdateTable";
import { toast } from "react-toastify";

type Inputs = {
  level: string;
  name: string;
  gender: "male" | "female" | "other";
  birth_of_date: Date;
  age: number;
  hobby: string;
};

interface IFormValues {
  level: string;
  name: string;
  gender: string;
  birth_date: string;
  age: string;
  hobby: string;
}

interface Level {
  level_uuid: string;
  level_id: number;
  name: string;
}

const ManagerDeveloperModals = () => {
  const { setStatusModal, statusModal, title, idEditable, setIdEditable } =
    useDeveloper();
  const { register, handleSubmit, setValue, reset } = useForm<IFormValues>();
  const [levels, setLevels] = useState<Level[]>();
  const { setUpdateTable, updateTable } = useUpdateTable();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const { age, birth_date, gender, level, hobby, name } = data;

    if (idEditable === "") {
      api
        .post(`/developers/create`, {
          age: Number(age),
          birth_date,
          gender,
          level: Number(level),
          hobby,
          name,
        })
        .then(() => {
          setStatusModal(false);
          setUpdateTable(!updateTable);
          reset();
          toast.success("Cadastrado com sucesso!");
        })
        .catch((err) => {
          toast.error("Erro ao cadastrar! Detalhes: " + err.message);
        });
    } else {
      api
        .patch(`/developers/update/${idEditable}`, {
          age: Number(age),
          birth_date,
          gender,
          level: Number(level),
          hobby,
          name,
        })
        .then(() => {
          setUpdateTable(!updateTable);
          setStatusModal(false);
          toast.success("Successo ao atualizar desenvolvedor");
        })
        .catch((err) => {
          toast.error("Erro ao atualizar desenvolvedor");
        });
    }
  };

  // get levels
  useEffect(() => {
    api.get("/levels/all").then((response) => {
      setLevels(response.data.data);
    });
  }, []);

  useEffect(() => {
    api
      .get(`/developers/${idEditable}`)
      .then((response) => {
        const [year, month, day] = response.data.birth_date.split("-");
        setValue("level", response.data.level.level_id);
        setValue("name", response.data.name);
        setValue("age", response.data.age);
        setValue("birth_date", `${year}-${month}-${day.substring(0, 2)}`);
        setValue("gender", response.data.gender);
        setValue("hobby", response.data.hobby);
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
            <div className="flex flex-row w-full">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Nível
                </label>
                <select
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  {...register("level")}
                >
                  {levels?.map((level) => (
                    <option key={level.level_uuid} value={level.level_id}>
                      {level.name}
                    </option>
                  ))}
                </select>
              </div>
              <Input label="name" register={register} required />
            </div>
            <div className="flex flex-row w-full">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Sexo
                </label>
                <select
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  {...register("gender")}
                >
                  <option value="female">Feminino</option>
                  <option value="male">Masculino</option>
                  <option value="other">Outro</option>
                </select>
              </div>
              <Input
                type="date"
                label="birth_date"
                register={register}
                required
              />
            </div>
            <div className="flex flex-row w-full">
              <Input label="age" required type="number" register={register} />
              <Input label="hobby" required register={register} />
            </div>
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

export default ManagerDeveloperModals;
