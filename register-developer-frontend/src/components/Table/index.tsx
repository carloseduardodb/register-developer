import Pagination from "../Pagination";
import { useAlertSystem } from "../../hooks/useAlertSystem";
import ModalConfirmation from "../ModalConfirmation";
import { useTable, usePagination } from "react-table";
import { useEffect } from "react";

export default function Table({
  columns,
  data,
  fetchData,
  loading,
  pageCount: controlledPageCount,
  total,
}: any) {
  const { setStatusModal, statusModal, message } = useAlertSystem();

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
  }, [fetchData, pageIndex, pageSize]);

  /**End table options */

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table
              {...getTableProps()}
              className="min-w-full divide-y divide-gray-200 max-h-96"
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
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            className="px-6 py-4 whitespace-nowrap"
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
                        <a href="#">
                          Editar {/*console.log(row.cells[0].value)*/}
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
              <button
                onClick={() => setStatusModal(true)}
                className="m-2 p-2 bg-p-blue hover:bg-p-blue-dark transform hover:scale-105 transition-transform delay-100 duration-100 rounded text-sm text-white"
              >
                Excluir Selecionados
              </button>

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
