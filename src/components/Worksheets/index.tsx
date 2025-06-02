"use client";

import { useState, useEffect } from "react";
import { WorksheetType } from "@/types/worksheet";
import WorksheetCard from "./WorksheetCard";

const Worksheets = () => {
  const [worksheets, setWorksheets] = useState<WorksheetType[]>([]);

  useEffect(() => {
    const fetchWorksheets = async () => {
      const response = await fetch("/api/worksheets");
      const { worksheets } = (await response.json()) as {
        worksheets: WorksheetType[];
      };
      console.log("worksheets", worksheets);
      setWorksheets(worksheets);
    };
    fetchWorksheets();
  }, []);

  return (
    <div className="grid gap-4 p-3">
      {worksheets.map((worksheet: WorksheetType) => {
        return <WorksheetCard key={worksheet.id} worksheet={worksheet} />;
      })}
    </div>
  );
};

export default Worksheets;
