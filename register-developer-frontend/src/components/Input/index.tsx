import { InputHTMLAttributes } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { useEffect } from "react";

interface IFormValues {
  level: string;
  name: string;
  gender: string;
  birth_date: string;
  age: string;
  hobby: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  selected?: boolean;
}

const Input = ({
  selected,
  register,
  label,
  required,
  ...rest
}: InputProps) => {
  return (
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-first-name"
      >
        {label === "level" && "Nível"}
        {label === "name" && "Nome"}
        {label === "gender" && "Gênero"}
        {label === "birth_date" && "Data de Nascimento"}
        {label === "age" && "Idade"}
        {label === "hobby" && "Hobby"}
      </label>
      <input
        {...rest}
        {...register(label, { required, minLength: 2 })}
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-first-name"
        placeholder={`${label === "name" ? "Digite o nome" : ""} ${
          label === "age" ? "Digite a idade" : ""
        } ${label === "hobby" ? "Digite o hobby" : ""} ${
          label === "level" ? "Digite o nível" : ""
        }`}
      />
    </div>
  );
};

export default Input;
