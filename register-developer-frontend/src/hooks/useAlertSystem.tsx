import { useContext } from "react";
import { AlertSystemContext } from "./../context/AlertSystemContext";

export const useAlertSystem = () => {
  const value = useContext(AlertSystemContext);
  return value;
};
