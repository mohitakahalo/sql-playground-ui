/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useStore } from "@nanostores/react";
import { worksheetStore } from "@/stores/worksheet.store";
import Dropdown from "../ui/Dropdown";

const WorksheetOutput = () => {
  const { output } = useStore(worksheetStore);
  const columns = output && output.length > 0 ? Object.keys(output[0]) : [];

  return (
    <div className="p-4 text-sm text-gray-500 font-[family-name:var(--font-geist-mono)] h-full w-full overflow-hidden">
      <p className="text-gray-900 pb-2 font-bold flex justify-between items-center">
        <span className="text-gray-500">
          Results: {output.length} rows found
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
      {output.length > 0 ? (
        <div className="border border-gray-300 rounded-md h-[calc(100%-2rem)] overflow-hidden w-full">
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
    </div>
  );
};

export default WorksheetOutput;
