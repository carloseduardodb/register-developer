import { useContext } from "react";
import { ManagerLevelContext } from "./../context/ManagerLevelContext";

export const useLevel = () => {
  const value = useContext(ManagerLevelContext);
  return value;
};
