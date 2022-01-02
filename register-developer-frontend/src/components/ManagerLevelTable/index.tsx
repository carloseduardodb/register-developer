import React, { useMemo, useEffect } from "react";
import api from "../../services/api";
import TableLevels from "../../components/TableLevels/index";
import { toast } from "react-toastify";

const ManagerLevelTable = () => {
  const [serverData, setServerData] = React.useState<any>([]);

  useEffect(() => {
    api
      .get("/levels")
      .then((response) => {
        setServerData(response.data);
      })
      .catch((error) => {
        toast.error("Erro ao carregar os níveis. Detalhes: " + error.message);
      });
  }, []);

  const fetchDeveloperData = async (page: any, pageSize: any) => {
    const offset = page * pageSize;
    return await api
      .get("/levels", {
        params: {
          page: page + 1,
          take: pageSize,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        toast.error("Erro ao carregar os níveis. Detalhes: " + error.message);
      });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Identificação",
        accessor: "level_uuid",
      },
      {
        Header: "Nome",
        accessor: "name",
      },
      {
        Header: "Desenvolvedores",
        accessor: "developers",
        Cell: ({ value, row }: any) => {
          return value.length;
        },
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
    <TableLevels
      columns={columns}
      data={data}
      fetchData={fetchData}
      loading={loading}
      pageCount={pageCount}
      total={total}
    />
  );
};

export default ManagerLevelTable;
