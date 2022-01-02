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

interface ManagerLevelContextProviderProps {
  children: ReactNode;
}

export const ManagerLevelContext = createContext({} as Props);

export function ManagerLevelProvider({
  children,
}: ManagerLevelContextProviderProps) {
  const [idEditable, setIdEditable] = useState("");
  const [statusModal, setStatusModal] = useState(false);
  const [title, setTitle] = useState("Criar Nível");
  const [excludedItems, setExcludedItems] = useState<string[]>([]);

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
    <ManagerLevelContext.Provider
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
    </ManagerLevelContext.Provider>
  );
}
