type PaginationType = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

const Pagination = ({
  pagination,
  handlePageChange,
  handlePageSizeChange,
  pageSize,
  currentPage,
}: {
  pagination: PaginationType;
  handlePageChange: (page: number) => void;
  handlePageSizeChange: (pageSize: number) => void;
  pageSize: number;
  currentPage: number;
}) => {
  return (
    <div className="flex items-center justify-between px-2 py-2 border-t border-gray-200">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700">
          Page {pagination.currentPage} of {pagination.totalPages}
        </span>
        <select
          className="border border-gray-300 rounded-md px-2 py-1 cursor-pointer"
          value={pageSize}
          onChange={(e) => handlePageSizeChange(Number(e.target.value))}
        >
          <option value="10">10 rows</option>
          <option value="25">25 rows</option>
          <option value="50">50 rows</option>
          <option value="100">100 rows</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50 cursor-pointer"
          onClick={() => handlePageChange(1)}
          disabled={!pagination.hasPreviousPage}
        >
          First
        </button>
        <button
          className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50 cursor-pointer"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={!pagination.hasPreviousPage}
        >
          Previous
        </button>
        <button
          className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50 cursor-pointer"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={!pagination.hasNextPage}
        >
          Next
        </button>
        <button
          className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50 cursor-pointer"
          onClick={() => handlePageChange(pagination.totalPages)}
          disabled={!pagination.hasNextPage}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Pagination;
