import { useState } from "react";

export function usePagination(
  initialPage: number
): [number, (val: number) => () => void] {
  const [page, setPage] = useState(initialPage);
  function buildPaginationHandler(operation: number) {
    return function handlePagination() {
      setPage((page) => (page += operation));
    };
  }
  return [page, buildPaginationHandler];
}
