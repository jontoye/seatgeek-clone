import { useMemo } from "react";

const range = (start, end) => {
  let length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({ totalCount, pageSize }) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    return range(firstPageIndex, lastPageIndex);
  }, [totalCount, pageSize]);

  return paginationRange;
};
