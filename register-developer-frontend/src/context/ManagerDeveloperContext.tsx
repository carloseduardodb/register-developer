import { createContext, ReactNode, useState } from "react";

type Props = {
  idEditable: string;
  setIdEditable: (data: string) => void;
  statusModal: boolean;
  setStatusModal: (data: boolean) => void;
  title: string;
  setTitle: (data: string) => void;
  addExcludeItem: (data: string) => void;
  removeExcludeItem: (data: string) => void;
  containsExcludeItem: (data: string) => boolean;
  excludedItems: string[];
  setExcludedItems: (data: string[]) => void;
};

interface ManagerDeveloperContextProviderProps {
  children: ReactNode;
}

export const ManagerDeveloperContext = createContext({} as Props);

export function ManagerDeveloperProvider({
  children,
}: ManagerDeveloperContextProviderProps) {
  const [idEditable, setIdEditable] = useState("");
  const [excludedItems, setExcludedItems] = useState<string[]>([]);
  const [statusModal, setStatusModal] = useState(false);
  const [title, setTitle] = useState("Criar Desenvolvedor");

  const addExcludeItem = (id: string) => {
    setExcludedItems([...excludedItems, id]);
  };

  const removeExcludeItem = (id: string) => {
    setExcludedItems(excludedItems.filter((item) => item !== id));
  };

  const containsExcludeItem = (id: string) => {
    return excludedItems.includes(id);
  };

  return (
    <ManagerDeveloperContext.Provider
      value={{
        idEditable,
        setIdEditable,
        statusModal,
        setStatusModal,
        title,
        setTitle,
        addExcludeItem,
        removeExcludeItem,
        containsExcludeItem,
        excludedItems,
        setExcludedItems,
      }}
    >
      {children}
    </ManagerDeveloperContext.Provider>
  );
}
