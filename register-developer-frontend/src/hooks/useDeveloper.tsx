import { useContext } from "react";
import { ManagerDeveloperContext } from "./../context/ManagerDeveloperContext";

export const useDeveloper = () => {
  const value = useContext(ManagerDeveloperContext);
  return value;
};
