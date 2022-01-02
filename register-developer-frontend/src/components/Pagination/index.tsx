import React, { ReactNode, useEffect } from "react";
import {
  FiChevronRight,
  FiChevronLeft,
  FiChevronsRight,
  FiChevronsLeft,
} from "react-icons/fi";

const Pagination = ({
  gotoPage,
  previousPage,
  nextPage,
  canNextPage,
  canPreviousPage,
  pageCount,
  pageIndex,
}: any) => {
  const [paginateElements, setPaginateElements] = React.useState<ReactNode>();

  const filterPages = (visiblePages: any, totalPages: number) => {
    return visiblePages.filter((page: any) => page <= totalPages);
  };

  const getVisiblePages = (page: number, total: number) => {
    if (total < 7) {
      return filterPages([1, 2, 3, 4, 5, 6], total);
    } else {
      if (page % 5 >= 0 && page > 4 && page + 2 < total) {
        return [1, page - 1, page, page + 1, total];
      } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
        return [1, total - 3, total - 2, total - 1, total];
      } else {
        return [1, 2, 3, 4, 5, total];
      }
    }
  };

  useEffect(() => {
    const visiblePages = getVisiblePages(pageIndex + 1, pageCount);

    visiblePages.map((page: any) => {});
    //console.log(visiblePages);
    setPaginateElements(renderButtonsForIndexPaginate(visiblePages));
  }, [pageIndex, pageCount]);

  const renderButtonsForIndexPaginate = (visiblePages: number[]) => {
    return (
      <>
        {visiblePages.map((i: number, index) => {
          return (
            <button
              key={i}
              className={`btn btn-sm btn-secondary bg-p-blue rounded-full flex items-center justify-center w-7 h-7 transform hover:scale-110 hover:bg-p-blue-dark transition-transform duration-200 ease-in-out ${
                pageIndex === i - 1 && "hover:scale-100 bg-p-blue-dark"
              }`}
              disabled={pageIndex === i - 1}
              onClick={() => gotoPage(i - 1)}
            >
              {visiblePages[index - 1] + 2 < i ? `..${i}` : i}
            </button>
          );
        })}
      </>
    );
  };

  // retorna paginação
  return (
    <div className="flex p-2 gap-x-3 text-white text-sm">
      <button
        className={`${
          !canPreviousPage && "hover:scale-100 bg-p-blue-dark"
        } bg-p-blue rounded-full flex items-center justify-center w-7 h-7 transform hover:scale-110 hover:bg-p-blue-dark transition-transform duration-200 ease-in-out`}
        disabled={!canPreviousPage}
        onClick={() => gotoPage(0)}
      >
        <FiChevronsLeft />
      </button>
      <button
        className={`${
          !canPreviousPage && "hover:scale-100 bg-p-blue-dark"
        } bg-p-blue rounded-full flex items-center justify-center w-7 h-7 transform hover:scale-110 hover:bg-p-blue-dark transition-transform duration-200 ease-in-out`}
        disabled={!canPreviousPage}
        onClick={() => previousPage()}
      >
        <FiChevronLeft />
      </button>

      {paginateElements}

      <button
        className={`${
          !canNextPage && "hover:scale-100 bg-p-blue-dark"
        } bg-p-blue rounded-full flex items-center justify-center w-7 h-7 transform hover:scale-110 hover:bg-p-blue-dark transition-transform duration-200 ease-in-out`}
        disabled={!canNextPage}
        onClick={() => nextPage()}
      >
        <FiChevronRight />
      </button>
      <button
        className={`${
          !canNextPage && "hover:scale-100 bg-p-blue-dark"
        } bg-p-blue rounded-full flex items-center justify-center w-7 h-7 transform hover:scale-110 hover:bg-p-blue-dark transition-transform duration-200 ease-in-out`}
        disabled={!canNextPage}
        onClick={() => gotoPage(pageCount - 1)}
      >
        <FiChevronsRight />
      </button>
    </div>
  );
};

export default Pagination;
