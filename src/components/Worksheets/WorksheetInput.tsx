"use client";

import { useEffect, useState } from "react";
import { worksheetStore } from "@/stores/worksheet.store";
import { useStore } from "@nanostores/react";
import Dropdown from "../ui/Dropdown";

type WorksheetInputProps = {
  fetchQueryOutput: () => void;
};

const WorksheetInput = ({ fetchQueryOutput }: WorksheetInputProps) => {
  const { queryInput } = useStore(worksheetStore);
  const [query, setQuery] = useState<string>("");
  const [runAs, setRunAs] = useState<string>("USER");

  useEffect(() => {
    setQuery(queryInput);
  }, [queryInput]);

  return (
    <>
      <textarea
        className="w-full h-full bg-gray-50 p-2 rounded-md"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            worksheetStore.setKey("queryInput", query);
            fetchQueryOutput();
          }}
          className="bg-blue-500 text-white p-2 rounded-md mr-auto cursor-pointer uppercase font-[family-name:var(--font-geist-mono)] font-bold"
        >
          Run Query
        </button>
        <Dropdown
          label={`Running as: ${runAs}`}
          options={[
            { label: "User", value: "USER" },
            { label: "Admin", value: "ADMIN" },
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
