import React, { useEffect, useMemo } from "react";
import Table from "../../components/Table/index";
import HeaderActions from "../../components/HeaderActions/index";
import ManagerDeveloperModals from "../../components/ManagerDeveloperModals";
import { ManagerDeveloperProvider } from "../../context/ManagerDeveloperContext";
import ModalConfirmation from "../../components/ModalConfirmation";
import { useAlertSystem } from "../../hooks/useAlertSystem";
import api from "../../services/api";

const ManageDevelopers = () => {
  const [serverData, setServerData] = React.useState<any>([]);

  useEffect(() => {
    api
      .get("/developers")
      .then((response) => {
        setServerData(response.data);
      })
      .catch((error) => {
        alert("Erro ao carregar os desenvolvedores");
      });
  }, []);

  const fetchDeveloperData = async (page: any, pageSize: any) => {
    const offset = page * pageSize;
    return await api
      .get("/developers", {
        params: {
          page: page + 1,
          take: pageSize,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        alert("Erro ao carregar os desenvolvedores");
      });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Identificação",
        accessor: "developer_uuid",
      },
      {
        Header: "Nome",
        accessor: "name",
      },
      {
        Header: "Nível",
        accessor: "level.name",
      },
      {
        Header: "Sexo",
        accessor: "gender",
      },
      {
        Header: "Data de Nascimento",
        accessor: "birth_date",
      },
      {
        Header: "Idade",
        accessor: "age",
      },
    ],
    []
  );

  // We'll start our table without any data
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const fetchIdRef = React.useRef(0);

  const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
    const fetchId = ++fetchIdRef.current;
    setLoading(true);

    fetchDeveloperData(pageIndex, pageSize).then((response: any) => {
      if (fetchId === fetchIdRef.current) {
        setData(response.data);
        setPageCount(response.lastPage);
        setLoading(false);
        setTotal(response.count);
      }
    });
  }, []);

  return (
    <>
      <div className="flex justify-center bg-p-blue-light items-center h-screen">
        <main className="w-full max-w-6xl">
          <ManagerDeveloperProvider>
            <HeaderActions />
            <br />
            <Table
              columns={columns}
              data={data}
              fetchData={fetchData}
              loading={loading}
              pageCount={pageCount}
              total={total}
            />
            <ManagerDeveloperModals />
          </ManagerDeveloperProvider>
        </main>
      </div>
    </>
  );
};

export default ManageDevelopers;
