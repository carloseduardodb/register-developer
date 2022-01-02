import { useAlertSystem } from "../../hooks/useAlertSystem";

type Props = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  message: string;
};

const ModalConfirmation = ({ showModal, setShowModal, message }: Props) => {
  const { setDecision } = useAlertSystem();

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-5 py-4 border-b border-solid rounded-t">
                  <h3 className="text-2xl font-semibold">
                    Esta é um ação crítica
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-2 text-lg leading-relaxed">{message}</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end px-6 py-3 border-t border-solid rounded-b">
                  <button
                    className="text-red-500 hover:text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setDecision(false);
                    }}
                  >
                    Não
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 hover:bg-red-500-dark text-white active:bg-p-blue font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setDecision(true);
                    }}
                  >
                    Sim
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalConfirmation;
