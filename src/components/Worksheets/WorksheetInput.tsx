"use client";

import { useCallback } from "react";
import { worksheetStore } from "@/stores/worksheet.store";
import { useStore } from "@nanostores/react";

type WorksheetInputProps = {
  fetchQueryOutput: () => void;
};

const WorksheetInput = ({ fetchQueryOutput }: WorksheetInputProps) => {
  const { queryInput } = useStore(worksheetStore);

  const setQueryInput = useCallback((queryInput: string) => {
    worksheetStore.setKey("queryInput", queryInput);
  }, []);

  return (
    <>
      <textarea
        className="w-full h-full bg-gray-200 p-2 rounded-md"
        value={queryInput}
        onChange={(e) => {
          setQueryInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetchQueryOutput();
        }}
        className="bg-blue-500 text-white p-2 rounded-md mr-auto cursor-pointer"
      >
        Run Query
      </button>
    </>
  );
};

export default WorksheetInput;
