import { worksheetStore } from "@/stores/worksheet.store";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";

export const usePagination = () => {
  const { queryInput } = useStore(worksheetStore);

  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(ITEMS_PER_PAGE);
  const [pagination, setPagination] = useState({
    totalItems: 0,
    totalPages: 0,
    currentPage: 1,
    pageSize: ITEMS_PER_PAGE,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (newSize: number) => {
    setPageSize(newSize);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [queryInput]);

  return {
    currentPage,
    pageSize,
    pagination,
    setCurrentPage,
    setPageSize,
    setPagination,
    handlePageChange,
    handlePageSizeChange,
  };
};
