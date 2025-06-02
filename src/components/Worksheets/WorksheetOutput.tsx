/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useStore } from "@nanostores/react";
import { worksheetStore } from "@/stores/worksheet.store";

const WorksheetOutput = () => {
  const { output } = useStore(worksheetStore);

  return (
    <div className="p-2 text-sm text-gray-500 font-[family-name:var(--font-geist-mono)]">
      <p className="text-gray-900">Output: </p>
      {output.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr>
              {Object.entries(output[0]).map(([key]) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {output.map((rowData: any) => (
              <tr key={rowData.id}>
                {Object.values(rowData).map((value: any, index: number) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-900">No rows found</p>
      )}
    </div>
  );
};

export default WorksheetOutput;
