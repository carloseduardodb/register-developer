import React from "react";
import { AlertSystemProvider } from "./context/AlertSystemContext";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AlertSystemProvider>
        <Routes />
        <ToastContainer />
      </AlertSystemProvider>
    </>
  );
}

export default App;
