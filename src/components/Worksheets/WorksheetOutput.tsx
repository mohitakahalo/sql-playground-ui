/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useStore } from "@nanostores/react";
import { worksheetStore } from "@/stores/worksheet.store";

const WorksheetOutput = () => {
  const { output } = useStore(worksheetStore);

  return (
    <div className="p-4 text-sm text-gray-500 font-[family-name:var(--font-geist-mono)] h-full w-full overflow-hidden">
      <p className="text-gray-900 pb-2 font-bold">Results: </p>
      {output.length > 0 ? (
        <div className="border border-gray-300 rounded-md h-[calc(100%-2rem)] overflow-hidden w-full">
          <div className="h-full w-full overflow-auto">
            <table className="w-full border-collapse">
              <thead className="sticky top-0 left-0 bg-gray-100">
                <tr>
                  {Object.entries(output[0]).map(([key]) => (
                    <th
                      key={key}
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
