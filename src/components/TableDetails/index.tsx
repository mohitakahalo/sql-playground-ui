import { WorksheetConfigType } from "@/types/worksheet";
import React from "react";

const TableDetails = ({
  worksheetConfig,
  handlePreviewData,
}: {
  worksheetConfig: WorksheetConfigType;
  handlePreviewData: () => void;
}) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <h1 className="text-sm font-semibold text-gray-700">
        Database: {worksheetConfig?.database}
      </h1>
      <h1 className="text-sm font-semibold text-gray-700">
        Schema: {worksheetConfig?.schema}
      </h1>
      <h1 className="text-sm font-semibold text-gray-700">
        Table: {worksheetConfig?.table}
      </h1>
      <button
        onClick={handlePreviewData}
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer uppercase font-[family-name:var(--font-geist-mono)] text-sm"
      >
        Preview Data
      </button>
    </div>
  );
};

export default TableDetails;
