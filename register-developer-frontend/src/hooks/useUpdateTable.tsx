import { useContext } from "react";
import { UpdateTableContext } from "./../context/UpdateTableContext";

export const useUpdateTable = () => {
  const value = useContext(UpdateTableContext);
  return value;
};
