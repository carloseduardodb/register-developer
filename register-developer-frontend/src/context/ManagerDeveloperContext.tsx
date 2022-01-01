import { createContext, ReactNode, useState } from "react";

type Props = {
  idEditable: string;
  setIdEditable: (data: string) => void;
  statusModal: boolean;
  setStatusModal: (data: boolean) => void;
  title: string;
  setTitle: (data: string) => void;
};

interface ManagerDeveloperContextProviderProps {
  children: ReactNode;
}

export const ManagerDeveloperContext = createContext({} as Props);

export function ManagerDeveloperProvider({
  children,
}: ManagerDeveloperContextProviderProps) {
  const [idEditable, setIdEditable] = useState("");
  const [statusModal, setStatusModal] = useState(false);
  const [title, setTitle] = useState("Criar Desenvolvedor");

  return (
    <ManagerDeveloperContext.Provider
      value={{
        idEditable,
        setIdEditable,
        statusModal,
        setStatusModal,
        title,
        setTitle,
      }}
    >
      {children}
    </ManagerDeveloperContext.Provider>
  );
}
