import { useMemo, useState, useRef, useCallback } from "react";
import api from "../../services/api";
import { useEffect } from "react";
import TableDeveloper from "../TableDeveloper/index";
import { toast } from "react-toastify";

const ManagerDeveloperTable = () => {
  const [serverData, setServerData] = useState<any>([]);

  useEffect(() => {
    api
      .get("/developers")
      .then((response) => {
        setServerData(response.data);
      })
      .catch((error) => {
        toast.error(
          "Erro ao carregar os desenvolvedores. Detalhes: " + error.message
        );
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
        toast.error("Erro ao carregar os desenvolvedores");
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
        Cell: ({ value, row }: any) => {
          if (value === "male") return "Masculino";
          if (value === "female") return "Feminino";
          else return "outro";
        },
      },
      {
        Header: "Hobby",
        accessor: "hobby",
      },
      {
        Header: "Data de Nascimento",
        accessor: "birth_date",
        Cell: ({ value, row }: any) => {
          return value.split("T")[0];
        },
      },
      {
        Header: "Idade",
        accessor: "age",
      },
    ],
    []
  );

  // We'll start our table without any data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [total, setTotal] = useState(0);
  const fetchIdRef = useRef(0);

  const fetchData = useCallback(({ pageSize, pageIndex }) => {
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
    <TableDeveloper
      columns={columns}
      data={data}
      fetchData={fetchData}
      loading={loading}
      pageCount={pageCount}
      total={total}
    />
  );
};

export default ManagerDeveloperTable;
