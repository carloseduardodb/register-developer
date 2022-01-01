import { createContext, ReactNode, useState } from "react";

type Props = {
  statusModal: boolean;
  setStatusModal: (data: boolean) => void;
  message: string;
  setMessage: (data: string) => void;
};

interface AlertSystemContextProviderProps {
  children: ReactNode;
}

export const AlertSystemContext = createContext({} as Props);

export function AlertSystemProvider({
  children,
}: AlertSystemContextProviderProps) {
  const [statusModal, setStatusModal] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <AlertSystemContext.Provider
      value={{
        statusModal,
        setStatusModal,
        message,
        setMessage,
      }}
    >
      {children}
    </AlertSystemContext.Provider>
  );
}
