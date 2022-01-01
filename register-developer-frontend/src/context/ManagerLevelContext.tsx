import { createContext, ReactNode, useState } from "react";

type Props = {
  idEditable: string;
  setIdEditable: (data: string) => void;
  statusModal: boolean;
  setStatusModal: (data: boolean) => void;
  title: string;
  setTitle: (data: string) => void;
};

interface ManagerLevelContextProviderProps {
  children: ReactNode;
}

export const ManagerLevelContext = createContext({} as Props);

export function ManagerLevelProvider({
  children,
}: ManagerLevelContextProviderProps) {
  const [idEditable, setIdEditable] = useState("");
  const [statusModal, setStatusModal] = useState(false);
  const [title, setTitle] = useState("Criar Desenvolvedor");

  return (
    <ManagerLevelContext.Provider
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
    </ManagerLevelContext.Provider>
  );
}
