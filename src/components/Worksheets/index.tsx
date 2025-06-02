"use client";

import { useState, useEffect } from "react";
import { WorksheetType } from "@/types/worksheet";
import WorksheetCard from "./WorksheetCard";
import WorksheetTabs from "./WorksheetTabs";
import { worksheetStore } from "@/stores/worksheet.store";
import { useStore } from "@nanostores/react";

const Worksheets = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { worksheets, selectedWorksheetId } = useStore(worksheetStore);

  useEffect(() => {
    const fetchWorksheets = async () => {
      const response = await fetch("/api/worksheets");
      const { worksheets } = (await response.json()) as {
        worksheets: WorksheetType[];
      };
      console.log("worksheets", worksheets);
      worksheetStore.setKey("worksheets", worksheets);
      worksheetStore.setKey("selectedWorksheetId", worksheets[0].id);
      worksheetStore.setKey(
        "queryInput",
        worksheets[0]?.config?.queryInput || "",
      );
      setIsLoading(false);
    };
    fetchWorksheets();
  }, []);

  const handleAddNewWorksheet = () => {
    const newWorksheet = {
      id: worksheets.length + 1,
      name: `Worksheet ${worksheets.length + 1}`,
      config: {
        database: "",
        schema: "",
        table: "",
        queryInput: "",
      },
    };
    const updatedWorksheets = [...worksheets, newWorksheet];
    worksheetStore.setKey("worksheets", updatedWorksheets);
    worksheetStore.setKey("selectedWorksheetId", newWorksheet.id);
    worksheetStore.setKey("queryInput", newWorksheet.config.queryInput || "");
  };

  return (
    <div className="p-3 bg-white flex flex-col">
      <ul className="flex justify-start items-center">
        <WorksheetTabs
          worksheets={worksheets}
          selectedWorksheetId={selectedWorksheetId}
        />
        <button
          onClick={handleAddNewWorksheet}
          className="bg-blue-500 text-white p-2 px-4 rounded-md cursor-pointer"
        >
          +
        </button>
      </ul>

      <WorksheetCard isLoading={isLoading} />
    </div>
  );
};

export default Worksheets;
