"use client";

import { useCallback, useState } from "react";
import { worksheetStore } from "@/stores/worksheet.store";
import { useStore } from "@nanostores/react";
import Dropdown from "../ui/Dropdown";

type WorksheetInputProps = {
  fetchQueryOutput: () => void;
};

const WorksheetInput = ({ fetchQueryOutput }: WorksheetInputProps) => {
  const { queryInput } = useStore(worksheetStore);
  const [runAs, setRunAs] = useState<string>("user");

  const setQueryInput = useCallback((queryInput: string) => {
    worksheetStore.setKey("queryInput", queryInput);
  }, []);

  return (
    <>
      <textarea
        className="w-full h-full bg-gray-50 p-2 rounded-md"
        value={queryInput}
        onChange={(e) => {
          setQueryInput(e.target.value);
        }}
      />
      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            fetchQueryOutput();
          }}
          className="bg-blue-500 text-white p-2 rounded-md mr-auto cursor-pointer"
        >
          Run Query
        </button>
        <Dropdown
          label={`Running as ${runAs.charAt(0).toUpperCase() + runAs.slice(1)}`}
          options={[
            { label: "User", value: "user" },
            { label: "Admin", value: "admin" },
          ]}
          onSelect={(value) => {
            setRunAs(value);
          }}
        />
      </div>
    </>
  );
};

export default WorksheetInput;
