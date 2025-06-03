/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useStore } from "@nanostores/react";
import { worksheetStore } from "@/stores/worksheet.store";
import Dropdown from "../ui/Dropdown";
import { useState, useEffect, useCallback } from "react";
import Pagination from "../Pagination";
import { usePagination } from "@/hooks/usePagination";

const WorksheetOutput = () => {
  const store = useStore(worksheetStore);
  const { output, queryInput } = store;
  const columns = output && output.length > 0 ? Object.keys(output[0]) : [];

  const [searchTerm, setSearchTerm] = useState("");
  const {
    currentPage,
    pageSize,
    pagination,
    setCurrentPage,
    setPagination,
    handlePageChange,
    handlePageSizeChange,
  } = usePagination();

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: queryInput,
          page: currentPage,
          pageSize,
          searchTerm,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      worksheetStore.setKey("output", result.data);
      setPagination(result.pagination);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [currentPage, pageSize, searchTerm, queryInput, setPagination]);

  useEffect(() => {
    fetchData();
  }, [currentPage, pageSize, searchTerm, queryInput, fetchData]);

  return (
    <div className="flex flex-col gap-2 p-4 text-sm text-gray-500 font-[family-name:var(--font-geist-mono)] h-full w-full overflow-hidden">
      <p className="text-gray-900 font-bold flex justify-between items-center">
        <span className="text-gray-500">
          Results: {pagination.totalItems} rows found
        </span>
        <span className="text-gray-500 flex gap-2">
          <button className="bg-blue-500 text-white px-2 rounded-md cursor-pointer">
            Download (CSV)
          </button>
          <Dropdown
            label={
              <span className="text-gray-500 px-2 rounded-md cursor-pointer mr-2">
                Columns
              </span>
            }
            options={[
              ...columns.map((column) => ({
                label: (
                  <div className="flex gap-2">
                    <input type="checkbox" defaultChecked />
                    <span>{column}</span>
                  </div>
                ),
                value: column,
              })),
            ]}
            onSelect={(value) => {
              console.log(value);
            }}
            contentClassName="w-auto"
          />
        </span>
      </p>
      <input
        type="text"
        className="w-1/4 bg-white p-2 rounded-md outline-none border border-gray-300"
        placeholder="Search Results"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // Reset to first page on search
        }}
      />
      {output.length > 0 ? (
        <div className="border border-gray-300 rounded-md flex-1 overflow-hidden w-full">
          <div className="h-full w-full overflow-auto">
            <table className="w-full border-collapse">
              <thead className="sticky top-0 left-0 bg-gray-100">
                <tr>
                  {columns.map((key) => (
                    <th
                      key={`column-${key}`}
                      className="px-2 py-1 text-left border-b border-gray-300 whitespace-nowrap w-auto"
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {output.map((rowData: any, rowIndex: number) => (
                  <tr key={`row-${rowIndex}`}>
                    {Object.values(rowData).map(
                      (value: any, columnIndex: number) => (
                        <td
                          key={`cell-${rowIndex}-${columnIndex}`}
                          className="px-2 py-1 border-b border-gray-200 whitespace-nowrap w-auto"
                        >
                          {value}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="text-gray-900">No rows found</p>
      )}

      {/* Pagination Controls */}
      {pagination.totalItems > 0 && (
        <Pagination
          pagination={pagination}
          handlePageChange={handlePageChange}
          handlePageSizeChange={handlePageSizeChange}
          pageSize={pageSize}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default WorksheetOutput;
