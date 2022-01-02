import Pagination from "../Pagination";
import { useAlertSystem } from "../../hooks/useAlertSystem";
import ModalConfirmation from "../ModalConfirmation";
import { useTable, usePagination } from "react-table";
import { useEffect } from "react";
import { useUpdateTable } from "../../hooks/useUpdateTable";
import { useDeveloper } from "../../hooks/useDeveloper";
import ExcludeDevelopers from "../ExcludeDevelopers/index";

export default function Table({
  columns,
  data,
  fetchData,
  loading,
  pageCount: controlledPageCount,
  total,
}: any) {
  const { setStatusModal, statusModal, message } = useAlertSystem();
  const { updateTable } = useUpdateTable();
  const developerActions = useDeveloper();

  /** Edit modal options */
  const handleUpdateModal = (id: string) => {
    developerActions.setStatusModal(true);
    developerActions.setIdEditable(id);
  };

  /** Table options */
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controlledPageCount,
    },
    usePagination
  );

  // Listen for changes in pagination and use the state to fetch our new data
  useEffect(() => {
    fetchData({ pageIndex, pageSize });
    setPageSize(5);
  }, [fetchData, pageIndex, pageSize, updateTable, updateTable]);

  /**End table options */

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ">
            <table
              {...getTableProps()}
              className="min-w-full divide-y divide-gray-200 max-h-96 h-screen"
            >
              <thead className="bg-gray-50">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        {...column.getHeaderProps()}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Ações
                    </th>
                  </tr>
                ))}
              </thead>
              <tbody
                {...getTableBodyProps()}
                className="bg-white divide-y divide-gray-200"
              >
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className={`hover:bg-gray-200 cursor-pointer ${
                        developerActions.containsExcludeItem(row.cells[0].value)
                          ? "bg-blue-200"
                          : ""
                      }`}
                      onClick={() => {
                        developerActions.containsExcludeItem(row.cells[0].value)
                          ? developerActions.removeExcludeItem(
                              row.cells[0].value
                            )
                          : developerActions.addExcludeItem(row.cells[0].value);
                      }}
                    >
                      {row.cells.map((cell) => {
                        return (
                          <td
                            className="px-6 py-4 whitespace-nowrap break-words"
                            style={{ height: "64px" }}
                            {...cell.getCellProps()}
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                      <td
                        scope="col"
                        className="relative px-6 py-3 text-p-blue-dark font-semibold"
                      >
                        <a
                          onClick={() => {
                            handleUpdateModal(row.cells[0].value);
                            developerActions.setTitle("Editar Desenvolvedor");
                          }}
                          className="cursor-pointer text-p-blue hover:text-p-blue-dark"
                        >
                          Editar
                        </a>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  {loading && (
                    // Use our custom loading state to show a loading indicator
                    <td colSpan={10000}>Loading...</td>
                  )}
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between">
              <ExcludeDevelopers />
              <ModalConfirmation
                showModal={statusModal}
                setShowModal={setStatusModal}
                message="Tem certeza que deseja excluir os usuários selecionados?"
              />
              <Pagination
                gotoPage={gotoPage}
                previousPage={previousPage}
                nextPage={nextPage}
                canNextPage={canNextPage}
                canPreviousPage={canPreviousPage}
                pageCount={pageCount}
                pageOptions={pageOptions}
                pageIndex={pageIndex}
                setPageSize={setPageSize}
                pageSize={pageSize}
              />
            </div>
          </div>

          <p className="px-2 py-2">
            Exibindo {page.length} de {total} resultados
          </p>
        </div>
      </div>
    </div>
  );
}
