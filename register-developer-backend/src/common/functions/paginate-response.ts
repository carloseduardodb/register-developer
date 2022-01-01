export function paginateResponse(data, page, limit = 5) {
  const [result, total] = data;
  const lastPage = Math.ceil(total / limit);
  const nextPage = Number(page) + 1 > lastPage ? null : Number(page) + 1;
  const prevPage = Number(page) - 1 < 1 ? null : Number(page) - 1;
  return {
    statusCode: 'success',
    data: [...result],
    count: total,
    currentPage: Number(page),
    nextPage: nextPage,
    prevPage: prevPage,
    lastPage: lastPage,
  };
}
