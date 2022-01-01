import React from "react";
import { AlertSystemProvider } from "./context/AlertSystemContext";
import Routes from "./routes";

function App() {
  return (
    <>
      <AlertSystemProvider>
        <Routes />
      </AlertSystemProvider>
    </>
  );
}

export default App;
