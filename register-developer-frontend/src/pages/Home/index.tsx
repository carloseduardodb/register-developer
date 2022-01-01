import React from "react";
import { FiAirplay, FiActivity } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-p-blue-light h-screen flex items-center justify-center">
        <section className="flex flex-col px-5 max-w-lg">
          <img src="initial-logo.svg" />
          <br />
          <hr className="text-gray-300" />
          <br />
          <h1 className="text-xl text-center font-semibold">
            Bem vindo ao sistema de cadastro de desenvolvedores!
          </h1>
          <br />
          <br />
          <p>Escolha uma das opções abaixo para continuar:</p>
          <br />
          <main className="gap-y-3 flex flex-col text-white items-center">
            <Link
              to="/developer"
              className="uppercase shadow-sm bg-p-blue p-2 transform hover:scale-105 transition-transform delay-150 duration-200 ease-in-out rounded-lg w-9/12 flex justify-center gap-2"
            >
              <FiAirplay size={25} />
              Desenvolvedor
            </Link>
            <Link
              to="/levels"
              className="uppercase shadow-sm bg-p-blue p-2 transform hover:scale-105 transition-transform delay-150 duration-200 ease-in-out rounded-lg w-9/12 flex justify-center gap-2"
            >
              <FiActivity size={25} />
              Niveis
            </Link>
          </main>
        </section>
      </div>
    </>
  );
};

export default Home;
