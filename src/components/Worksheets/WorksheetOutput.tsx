"use client";

import { useStore } from "@nanostores/react";
import { worksheetStore } from "@/stores/worksheet.store";

const WorksheetOutput = () => {
  const { output } = useStore(worksheetStore);

  return (
    <div className="p-2">
      <p className="text-sm text-gray-500">Output: {JSON.stringify(output)}</p>
    </div>
  );
};

export default WorksheetOutput;
