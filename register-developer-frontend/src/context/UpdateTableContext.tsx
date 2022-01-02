import { createContext, ReactNode, useState } from "react";

type Props = {
  setUpdateTable: (data: boolean) => void;
  updateTable: boolean;
};

interface UpdateTableContextProviderProps {
  children: ReactNode;
}

export const UpdateTableContext = createContext({} as Props);

export function UpdateTableProvider({
  children,
}: UpdateTableContextProviderProps) {
  const [updateTable, setUpdateTable] = useState(false);

  return (
    <UpdateTableContext.Provider
      value={{
        updateTable,
        setUpdateTable,
      }}
    >
      {children}
    </UpdateTableContext.Provider>
  );
}
